import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "virtual:uno.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "generouted/react-router";
import { Provider } from "react-redux";

import store from "./redux/configureStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Provider>
  </React.StrictMode>
);
