import axios from "axios";

const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast`;

const weatherData = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

export default weatherData
