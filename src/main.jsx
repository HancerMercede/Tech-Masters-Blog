import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ThemeProvider from "./components/DarkMode/Theme.jsx";
import { UserContextProvider } from "./components/UserContext/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
