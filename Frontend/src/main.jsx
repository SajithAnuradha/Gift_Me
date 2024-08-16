import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Router from "./Router/Router.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={Router}  />
    </StoreContextProvider>
  </React.StrictMode>
  
);
