import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    name: "",
    todos: [
      {
        title: "Official Redux Toolkit Documentation",
        description:
          "The official Redux Toolkit documentation is the best place to start when learning Redux Toolkit. It provides comprehensive information, examples, and usage guidelines for building efficient Redux-based applications.",
      },
      {
        title: "Redux Toolkit GitHub Repository",
        description:
          "Visit the Redux Toolkit GitHub repository to access the source code, issues, and community discussions. It's a valuable resource for understanding how Redux Toolkit works under the hood.",
      },
      {
        title: "Getting Started with Redux Toolkit Tutorial",
        description:
          "This tutorial walks you through the process of getting started with Redux Toolkit. It covers the basics, such as setting up Redux Toolkit in your project, creating slices, and using the Redux DevTools extension for debugging.",
      },
      {
        title: "Redux Toolkit Essentials Course on Redux.js.org",
        description:
          "Redux.js.org offers a free course called 'Redux Toolkit Essentials' that provides in-depth guidance on using Redux Toolkit effectively. It includes interactive exercises and quizzes to reinforce your learning.",
      },
      {
        title: "Modern React with Redux Toolkit on Udemy",
        description:
          "This Udemy course focuses on building modern React applications with Redux Toolkit. It covers topics like creating Redux stores, writing reducers, and using Redux Toolkit to simplify state management.",
      },
    ],
    darkMode: false,
  },
  reducers: {
    setName: (state, action) => {
      // console.log(`incrementing by ${action.payload}`);
      state.name = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo, i) => i !== action.payload);
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    editTodo: (state, action) => {
      state.todos[action.payload[0]] = action.payload[1];
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode === true) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
  },
});

export const { setName, deleteTodo, addTodo, toggleDarkMode, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
