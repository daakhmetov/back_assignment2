const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

const OPENWEATHER_API_KEY = "7551c924ef450e636b328bf8dc32c908";
const NEWS_API_KEY = "448ca0c89dae44b0b402ff3af91bfb15";

app.use(cors());
app.use(express.static("public"));

/*
  WEATHER API (Server-side only)
*/
app.get("/api/weather", async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          units: "metric",
          appid: OPENWEATHER_API_KEY
        }
      }
    );

    const data = response.data;

    res.json({
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      coordinates: data.coord,
      wind_speed: data.wind.speed,
      country: data.sys.country,
      rain_3h: data.rain ? data.rain["3h"] : 0
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

/*
  ADDITIONAL API: NEWS (Server-side only)
*/
app.get("/api/news", async (req, res) => {
  try {
    const country = req.query.country;
    if (!country) {
      return res.status(400).json({ error: "Country code is required" });
    }

    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines",
      {
        params: {
          country,
          apiKey: NEWS_API_KEY
        }
      }
    );

    const news = response.data.articles.slice(0, 5).map(article => ({
      title: article.title,
      url: article.url
    }));

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
