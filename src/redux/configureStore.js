import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    // reducer här
    counter: counterSlice,
  },
});

export default store;
