import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherByCountry } from "../Actions/otherCountriesWeather.thunk";

const otherCountriesWeatherSlice = createSlice({
  name: "otherCountriesWeather",
  initialState: {
    otherCountriesWeatherData: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeatherByCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.otherCountriesWeatherData[action.payload.country] =
          action.payload.data;
      })
      .addCase(fetchWeatherByCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = `Error fetching weather for ${action.payload.country}: ${action.payload.error}`;
      });
  },
});

export default otherCountriesWeatherSlice.reducer;