import { Link, Navigate } from "react-router-dom";
import { PiNotePencilThin } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import axios from "axios";
import { MdOutlineLogin } from "react-icons/md";
import { UserContext } from "../../UserContext/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Store } from "react-notifications-component";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/profile", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setUserInfo(response.data.user);
      })
      .catch((err) =>
        Store.addNotification({
          title: "Information",
          type: "info",
          message: "The session has expired: " + err.message,
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated animate__fadeIn"],
          animationOut: ["animate__animated animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        })
      );
  }, [setUserInfo]);

  const logout = () => {
    axios
      .post("http://localhost:3000/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setUserInfo(null),
          localStorage.setItem(
            "userinfo",
            JSON.stringify({ id: "", email: "" })
          ),
          localStorage.setItem("token", JSON.stringify(response.data.token));
        setRedirect(true);
      });
  };

  if (redirect) {
    <Navigate to={"/"} />;
  }

  const username = userInfo?.name;
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
