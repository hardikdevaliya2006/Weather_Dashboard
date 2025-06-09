import axios from "axios";

const BASE_URL = `https://api.openweathermap.org`;

const weatherData = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: import.meta.env.VITE_ACCESS_KEY,
  },
});

export default weatherData
