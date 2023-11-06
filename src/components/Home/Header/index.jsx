import { Link } from "react-router-dom";
import Darktheme from "../../DarkMode/Darktheme.jsx";
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
      <div className="home-header-newpost">
        <Link to="/NewPost" className="primary-button ">
          Create Post
        </Link>
      </div>
    </>
  );
};

export default Header;
