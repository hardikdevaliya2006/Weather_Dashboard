import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/theme.reducer"; 

const store = configureStore({
  reducer: {
    theme: themeSlice, 
  },
});

export default store
