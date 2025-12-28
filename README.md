**Weather & News App**

**Overview**

Server-side API integration project using Node.js/Express.

Fetches weather for any city via OpenWeather API

Fetches top news headlines via NewsAPI

Minimal, responsive, single-file frontend

**Setup Instructions**

1.Clone repo:

git clone repo-url

cd project-folder

2.Install dependencies:

npm install

3.Run server:

node server.js

5.Open frontend: http://localhost:3000

**API Usage**

**Weather**

GET /api/weather?city=<city_name>

**Response:**

{
  "temperature": 25.3,
  
  "feels_like": 26.1,
  
  "description": "clear sky",
  
  "coordinates": { "lon": 71.43, "lat": 51.13 },
  
  "wind_speed": 3.5,
  
  "country": "KZ",
  
  "rain_3h": 0
}

**News**

GET /api/news?country=<country_code>

**Response:**

Top 5 articles with title and URL:

[
  { "title": "News 1", "url": "https://..." }
]

**Frontend**

1.Enter city → Get Weather → shows weather info

2.Get News from KZ → shows top 5 news independently

3.Responsive, single HTML file, clean UI

**Design Decisions**

1.Independent buttons: clear separation of functionality

2.Error handling: server logs errors, frontend shows alerts

3.Minimal frontend: assignment-focused, responsive

**Testing**

1.Direct API test:

http://localhost:3000/api/weather?city=Astana

http://localhost:3000/api/news?country=kz


2.Frontend: enter city, click buttons, verify output
