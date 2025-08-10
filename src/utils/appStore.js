import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../utils/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
