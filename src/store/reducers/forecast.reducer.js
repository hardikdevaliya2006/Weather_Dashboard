import { createSlice } from "@reduxjs/toolkit";
import { fetchForecastByCoords } from "../Actions/getForecast.thunk";

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    forecastData: null,
    loading: false,
    error: null,
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(fetchForecastByCoords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForecastByCoords.fulfilled, (state, action) => {
        state.loading = false;
        state.forecastData = action.payload;
      })
      .addCase(fetchForecastByCoords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default forecastSlice.reducer;