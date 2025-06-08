import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherData from "../../services/weatherData";

export const fetchWeatherByCountry = createAsyncThunk(
  "weather/fetchWeatherByCountry",
  async (countryName, thunkAPI) => {
    try {
      const response = await weatherData.get("/data/2.5/weather", {
        params: {
          q: countryName,
        },
      })
      return { country: countryName, data: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        country: countryName,
      })
    }
  }
)