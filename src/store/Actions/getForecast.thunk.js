import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherData from "../../services/weatherData";

export const fetchForecastByCoords = createAsyncThunk(
  "forecast/fetchForecastByCoords",
  async ({ lon, lat }, thunkAPI) => {
    try {
      const response = await weatherData.get("/data/2.5/forecast", {
        params: {
          lat: lat,
          lon: lon,
          cnt: 10,
          units: "metric",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.status);
    }
  }
);
