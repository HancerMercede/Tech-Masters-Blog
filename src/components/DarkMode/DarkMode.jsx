import { useContext } from "react";
import { ThemeContext } from "./Theme";
// import { MoonIcon, SunIcon } from "../DarkMode/icons";
import "./Darkmode.css";

const DarkMode = () => {
  const [{ isDark }, toogleTheme] = useContext(ThemeContext);
  return (
    <div className="container">
      <button onClick={toogleTheme} className="button">
        {isDark ? <>🌓</> : <>☀️</>}
      </button>
    </div>
  );
};

export default DarkMode;
