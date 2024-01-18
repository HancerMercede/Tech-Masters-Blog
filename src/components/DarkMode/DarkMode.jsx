import { useContext } from "react";
import { ThemeContext } from "./Theme";

import styles from "./Darkmode.module.css";

const DarkMode = () => {
  const [{ isDark }, toogleTheme] = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <button onClick={toogleTheme} className={styles.button}>
        {isDark ? <>🌓</> : <>☀️</>}
      </button>
    </div>
  );
};

export default DarkMode;
