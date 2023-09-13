import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    // reducer här
    todo: todoSlice,
  },
});

export default store;
