import { Link} from "react-router-dom";
import styles from "./Header.module.css";
import DarkMode from "../../DarkMode/DarkMode.jsx";
import perfileImg from '../../../../../tech-masters/public/assets/images/profile.jpeg';
import {BiSearch} from "react-icons/bi";
import {useEffect} from "react";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header_menu = document.querySelector('.header_menu');
      if (window.scrollY > 0) {
        header_menu.classList.add('navbar-blurred');
      } else {
        header_menu.classList.remove('navbar-blurred');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header className={styles.header_menu}>
        <div className={styles.Logo}>
          <Link to={"/"}>
            <div className={styles.wraper}><img src={perfileImg} className={styles.profile}/> Hancer's Blog</div>
          </Link>
        </div>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_elements}>
            <>
              <li className={styles.nav_menu_elements}>
                <BiSearch />
              </li>
              <li>
                <Link to={"/"} className={styles.nav_menu_elements}>
                  Portfolio
                </Link>
              </li>
              <li>
                About
              </li>

            </>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
