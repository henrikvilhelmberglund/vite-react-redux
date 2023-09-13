import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "virtual:uno.css";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "generouted/react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Provider>
  </React.StrictMode>
);
