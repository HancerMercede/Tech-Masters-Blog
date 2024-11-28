import { Link, Navigate } from "react-router-dom";
import styles from "./Header.module.css";
import DarkMode from "../../DarkMode/DarkMode.jsx";

const Header = () => {
  return (
    <>
      <header className={styles.header_menu}>
        <div className={styles.Logo}>
          <Link to={"/"}>
            <span>🤖</span> HM Development <span><p className="hero-title">Web Development and much more..</p></span>
          </Link>
        </div>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_elements}>
            <>

              <li>
               Blog
              </li>
              <li>
                About
              </li>
              <li>
                <DarkMode/>
              </li>
            </>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
