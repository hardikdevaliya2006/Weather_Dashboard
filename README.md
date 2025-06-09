# 🌤️ Weather Dashboard

A sleek, responsive weather dashboard built with modern React technologies, offering real-time weather updates for your current location and any city worldwide.

With a clean aesthetic, smooth animations, and a mobile-first design, this app not only fetches and displays the current weather but also gives you a 5-day forecast, wind status, humidity, temperature feels-like, and more.

Users can either search for a city or allow location access to automatically display local conditions. Built using tools like Redux Toolkit, React Router, Axios, Framer Motion, and Tailwind CSS, this project demonstrates efficient state management, API handling, and UI performance—all wrapped in an intuitive user interface.


## 📸 Screenshot

<img src="https://github.com/hardikdevaliya2006/Weather_Dashboard/blob/main/public/Screen/previwe.png" alt="img" />


## 🚀 Live Demo

Check it out live:  
🔗 https://weatherforecastdashboard.vercel.app/


## 🧩 Table of Contents

- [About](#about)  
- [Tech Stack](#tech-stack)  
- [Folder Structure](#folder-structure)  
- [Features](#features)  
- [Installation & Setup](#installation--setup)  
- [API Reference](#api-reference)  
- [Author](#author)  
- [Tags](#tags)


## 📘 About

This **Weather Dashboard** lets users:

- 🔍 Search by city name, or use device geolocation to display current weather and forecast.  
- 🌍 View weather data across multiple countries.  
- 🌬️ See key highlights like wind speed, humidity, feels-like temp, etc.

Built with a focus on minimalist design and seamless UX.


## 💻 Tech Stack

- **React v19**  
- **React Router**  
- **Redux Toolkit** (including `createAsyncThunk`)  
- **React Icons**  
- **Framer Motion**  
- **Tailwind CSS**  
- **Axios**  


## 🗂️ Folder Structure

```
├── public/
│ ├── font/
│ ├── svg/
│ └── img/
├── src/
│ ├── components/ # Reusable UI elements like cards, buttons, etc.
│ ├── helper/ # Utility functions or reusable logic
│ ├── Pages/ # Main route-based components (Home, NotFound, etc.)
│ ├── router/ # All routing logic using React Router v6
│ ├── services/ # Axios instances and API handlers
├── store/
│ ├── Actions/ # Redux actions and thunks (createAsyncThunk)
│ ├── reducers/ # Reducers for managing state slices
│ └── redux.store.js # Configured Redux store
├── App.jsx # Main component
├── main.jsx # App entry point
├── App.css / index.css # Styling
├── .env # Environment variables (e.g., OpenWeather API key)
├── .gitignore # Git ignored files
├── eslint.config.js # Linting rules
├── index.html # Vite HTML template
├── package.json # Project meta & dependencies
├── package-lock.json
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
├── vercel.json # Vercel deployment configuration
└── README.md # Project documentation
```


## 🌟 Features

- City search & device geolocation detection  
- Current weather + multi-day forecast  
- Global weather data support  
- UI animations + visual weather highlights  
- Fully responsive & mobile-first design


## 🛠️ Installation & Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/hardikdevaliya2006/Weather_Dashboard.git
   cd Weather_Dashboard
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Add your API key:  
   Create a `.env` in the project root and add:  
   ```
   VITE_WEATHER_API_KEY=your_openweather_api_key
   ```

4. Run the app locally:  
   ```bash
   npm run dev
   ```

5. Open in browser:  
   Navigate to `http://localhost:3000` (or the port Vite specifies).


## 📡 API Reference

- **OpenWeatherMap API** – Used for fetching current conditions and forecasts.


## 👨‍💻 Author

**Hardik Devaliya**  
Built with ❤️ by Hardik.


## 🏷️ Tags

`react` `redux-toolkit` `tailwindcss` `framer-motion` `axios` `react-router` `weather-app`


> **Note:** Ensure you’ve added your **geolocation permissions** when testing locally to enable auto-detect weather.
