import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./user/userSlice.js";
import themeReducer from "./theme/themeSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme:themeReducer,
  },
})
