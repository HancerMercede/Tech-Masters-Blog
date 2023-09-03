import Darktheme from "../../DarkMode/darktheme";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header className="home-header">
        <div>
          <h2>Tech-Master</h2>
          <h1>
            <span role="img" aria-label="wave">
              Blog
            </span>
          </h1>
          <p>The site that`s going to help you in your tech journey.</p>
        </div>
        <Darktheme />
      </header>
    </>
  );
};

export default Header;
