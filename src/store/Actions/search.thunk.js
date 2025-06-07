import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherDataByLocation from "../../services/weatherDataByLocation";

export const fetchWeatherByLocation = createAsyncThunk(
  "searchReducer/fetchWeatherByLocation",
  async (location, thunkAPI) => {
    try {
      const cleanLocation = encodeURIComponent(
        location.replace(/^\//, "").split(" ")[0]
      );

      const response = await weatherDataByLocation.get("", {
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
