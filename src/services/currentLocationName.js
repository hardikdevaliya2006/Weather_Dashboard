import axios from "axios";

const BASE_URL = `https://api.openweathermap.org/geo/1.0/reverse`;

const currentLocationName = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

export default currentLocationName;