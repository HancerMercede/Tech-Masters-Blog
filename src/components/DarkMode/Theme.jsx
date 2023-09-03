import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("SelectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("SelectedTheme", "light");
  };

  const SelectedTheme = localStorage.getItem("SelectedTheme");

  if (SelectedTheme === "dark") {
    setDarkMode();
  }

  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? setDarkMode() : setLightMode();

  const toogleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeContext.Provider
      value={[{ theme, isDark, SelectedTheme }, toogleTheme]}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
