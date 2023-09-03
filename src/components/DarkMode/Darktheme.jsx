import { useContext } from "react";
import { ThemeContext } from "./Theme";
import { MoonIcon, SunIcon } from "../DarkMode/icons";
const Darktheme = () => {
  const [{ theme, isDark }, toogleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <button onClick={toogleTheme}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default Darktheme;
