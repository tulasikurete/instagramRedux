import { configureStore } from "@reduxjs/toolkit";
import Postadd from "./Postadd";

export const Store = configureStore({
  reducer: {
    instra: Postadd,
  },
});
