import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherData from "../../services/weatherData";

export const fetchWeatherByLocation = createAsyncThunk(
  "searchReducer/fetchWeatherByLocation",
  async (location, thunkAPI) => {
    try {
      const rawLocation = location?.replace(/^\//, "").split(" ")[0] || "";
      const capitalized =
        rawLocation.charAt(0).toUpperCase() + rawLocation.slice(1);
      const cleanLocation = encodeURIComponent(
        capitalized.match(/^[A-Z][a-z]+/)?.[0] || capitalized
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
