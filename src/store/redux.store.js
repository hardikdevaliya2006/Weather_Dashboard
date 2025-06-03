import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/theme.reducer"; 
import searchSlice from "./reducers/search.reducer"

const store = configureStore({
  reducer: {
    theme: themeSlice, 
    search: searchSlice
  },
});

export default store
