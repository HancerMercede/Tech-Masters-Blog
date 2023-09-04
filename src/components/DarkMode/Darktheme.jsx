import { useContext } from "react";
import { ThemeContext } from "./Theme";
import { MoonIcon, SunIcon } from "../DarkMode/icons";
const Darktheme = () => {
  const [{ isDark }, toogleTheme] = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toogleTheme}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default Darktheme;
