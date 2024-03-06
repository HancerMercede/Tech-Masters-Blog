import { useContext, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Store } from "react-notifications-component";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", username);
    data.append("password", password);

    axios
      .post("http://localhost:3000/Auth/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        if (response) {
          const user = response.data;
          setUserInfo(user);
          localStorage.setItem("token", JSON.stringify(user.token));
          localStorage.setItem("userinfo", JSON.stringify(response.data));

          setRedirect(true);
          Store.addNotification({
            title: "Welcome again!",
            type: "info",
            message: "Welcome: " + username,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated animate__fadeIn"],
            animationOut: ["animate__animated animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className={styles.title_image_wrapper}>
        <div className={styles.title}>
          <h1>Login</h1>
        </div>
        <div>
          <img
            className={styles.image_logo}
            src="./assets/images/login_register_image.jpg"
            alt="imagen"
          />
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.section_wrapper}>
          <button className={styles.btn_primary}>Login</button>
          <Link to="/Register" className={styles.link}>
            Register
          </Link>
        </div>
      </form>
    </>
  );
};
