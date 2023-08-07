import "./DarkMode.css";
import Sun from "./Sun.jsx";
import Moon from "./Moon.jsx";

const DarkMode = () => {
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

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dark-mode">
      <input
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        className="dark_mode_input"
        defaultChecked={SelectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default DarkMode;
