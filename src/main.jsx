import React from "react";
import ReactDOM from "react-dom/client";

import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider from "./context/context";
import { useNavigate, useSearchParams } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ContextProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      // rtl={false}
    />
    <App />
  </ContextProvider>
  // </React.StrictMode>
);
