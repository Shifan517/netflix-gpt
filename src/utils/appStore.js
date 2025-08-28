import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../utils/movieSlice";
import gptReducer from "../utils/gptSlice"
import configReducer from"../utils/configSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt:gptReducer,
    config:configReducer
  },
});

export default appStore;
