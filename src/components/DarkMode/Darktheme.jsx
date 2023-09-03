import { useContext } from "react";
import { ThemeContext } from "./Theme";
import { MoonIcon, SunIcon } from "../DarkMode/icons";
const Darktheme = () => {
  const [{ isDark, SelectedTheme }, toogleTheme] = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toogleTheme} defaultValue={SelectedTheme === "dark"}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

export default Darktheme;
