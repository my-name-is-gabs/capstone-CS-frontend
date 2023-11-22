import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import React from "react";
import { SuccessProvider } from "./context/SuccessContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SuccessProvider>
          <App />
        </SuccessProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
