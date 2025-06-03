import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({     
  name: "themeReducer",
  initialState: {
    mode: localStorage.getItem("mode") || "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode   === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
    },
  },
});

export default themeSlice.reducer
export const { toggleTheme } = themeSlice.actions