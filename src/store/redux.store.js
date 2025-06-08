import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/theme.reducer";
import searchSlice from "./reducers/search.reducer";
import forecastSlice from "./reducers/forecast.reducer";
import otherCountriesWeatherSlice from "./reducers/otherCountries.reducer";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    search: searchSlice,
    otherCountriesWeather: otherCountriesWeatherSlice,
    forecast: forecastSlice,
  },
});

export default store;
