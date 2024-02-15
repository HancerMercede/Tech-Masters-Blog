import { Link, Navigate } from "react-router-dom";
import { PiNotePencilThin } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import axios from "axios";
import { MdOutlineLogin } from "react-icons/md";
import { useEffect, useState } from "react";

const Header = () => {
  const [redirect, setRedirect] = useState(false);
  const user = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {}, []);

  const logout = () => {
    axios
      .post("http://localhost:3000/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        setRedirect(true);
        localStorage.removeItem("userinfo"), setRedirect(true);
        localStorage.removeItem("token");
      });
  };

  if (redirect) {
    <Navigate to={"/"} />;
  }

  const username = user?.name;
  return (
    <>
      <header className={styles.header_menu}>
        <div className={styles.Logo}>
          <Link to={"/"}>
            <span>🤖</span> TECH-MASTERS
          </Link>
        </div>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_elements}>
            {username && (
              <>
                <div className={styles.user_profile_section}>
                  <img
                    src="/assets/images/Avatar.png"
                    alt="Author"
                    className="profile-photo"
                  />
                  <li>{username}</li>
                </div>
                <li className={styles.Link_NewPost}>
                  <Link to="/NewPost">
                    <PiNotePencilThin size={20} />
                    Write
                  </Link>
                </li>
                <li>
                  <button className={styles.Logout_btn} onClick={logout}>
                    <IoLogOutOutline size={15} /> Logout
                  </button>
                </li>
              </>
            )}
            {!username && (
              <>
                <li className={styles.Link_Login}>
                  <Link to="/Login">
                    <MdOutlineLogin size={15} />
                    Login
                  </Link>
                </li>
                <li className={styles.Link_NewPost}>
                  <Link to="/Register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
