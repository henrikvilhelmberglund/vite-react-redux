import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import postSlice from "./postSlice";
import boredSlice from "./boredSlice";

const store = configureStore({
  reducer: {
    // reducer här
    counter: counterSlice,
    todo: todoSlice,
    posts: postSlice,
    bored: boredSlice,
  },
});

export default store;
