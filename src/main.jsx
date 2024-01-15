import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ThemeProvider from "./components/DarkMode/Theme.jsx";
import { UserContextProvider } from "./components/UserContext/UserContext";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { CommentContextProvider } from "./components/CommentContext/CommentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactNotifications />
      <UserContextProvider>
        <ThemeProvider>
          <CommentContextProvider>
            <App />
          </CommentContextProvider>
        </ThemeProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
