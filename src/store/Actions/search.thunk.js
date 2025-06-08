import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherData from "../../services/weatherData";

export const fetchWeatherByLocation = createAsyncThunk(
  "searchReducer/fetchWeatherByLocation",
  async (location, thunkAPI) => {
    try {
      const cleanLocation = encodeURIComponent(
        location.replace(/^\//, "").split(" ")[0]
      );

      const response = await weatherData.get("/data/2.5/weather", {
        params: {
          q: cleanLocation,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.status);
    }
  }
);
