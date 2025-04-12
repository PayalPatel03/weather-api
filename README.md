# weather-api

This is a simple, visually enhanced web-based weather application that allows users to check the current weather of selected cities using the OpenWeatherMap API. The app is styled with Bootstrap 5 and custom CSS for a polished user interface.

 Live Demo: https://weather-api-alpha-tawny.vercel.app/


=> Features
Select from a predefined list of cities

Real-time weather data using OpenWeatherMap API

Smooth CSS animations and responsive design

Background image and hover effects

Mobile-friendly layout

=> HTML (index.html)
Key Components:
Dropdown Menu (<select id="cities">)
A list of cities populated dynamically via JavaScript.

Weather Display Box (<div id="weather">)
Shows current weather description and temperature.

Header (<h1 id="header">)
Animated page title.

=>  CSS (style.css)
Key Styling Highlights:
Full-screen background with image and backdrop-filter blur on weather box.

Animations:

glow animation for the header.

fadeIn for smooth content entrance.

Responsive design for mobile view using media queries.

Hover effects on weather box and dropdown.

=> API Used
OpenWeatherMap Current Weather Data
 Endpoint:
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

