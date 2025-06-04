import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherByLocation } from "../Actions/search.thunk";

const searchSlice = createSlice({
  name: "searchReducer",
  initialState: {
    query: "",
    locationRawData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.locationRawData = action.payload;
      })
      .addCase(fetchWeatherByLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.locationRawData = state.error;
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
