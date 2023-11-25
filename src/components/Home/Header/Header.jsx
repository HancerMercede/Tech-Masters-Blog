import { Link, Navigate } from "react-router-dom";
import { PiNotePencilThin } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import axios from "axios";
import { MdOutlineLogin } from "react-icons/md";
import { UserContext } from "../../UserContext/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/profile", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setUserInfo(response.data.user);
      });
  }, [setUserInfo]);

  const logout = () => {
    axios
      .post("http://localhost:3000/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        cancelToken: source.token,
      })
      .then(
        setUserInfo(null),
        localStorage.removeItem("userinfo"),
        setRedirect(true)
      );
  };

  if (redirect) {
    <Navigate to="/" />;
  }

  const username = userInfo?.email;
  return (
    <>
      <header className={styles.header_menu}>
        <div className={styles.Logo}>
          <Link to={"/"}>TECH-MASTERS 🤖</Link>
        </div>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_elements}>
            {username && (
              <>
                <li>{username}</li>
                <li className={styles.Link_NewPost}>
                  <Link to="/NewPost">
                    <PiNotePencilThin size={20} />
                    Write!
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
                {" "}
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
