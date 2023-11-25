import { useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Register.module.css";
import Swal from "sweetalert2";
import axios from "axios";

export const Register = () => {
  const [firstName, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleClear = () => {
    setFirstname("");
    setLastname("");
    setAddress("");
    setUsername("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("firstname", firstName);
    data.append("lastname", lastname);
    data.append("address", address);
    data.append("username", username);
    data.append("password", password);

    axios
      .post("http://localhost:3000/Auth/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res) {
          Swal.fire("Success!", "User successfully registered", "success").then(
            () => {
              setRedirect(true);
              handleClear();
            }
          );
        }
      })
      .catch((err) => console.log(err.message));
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className={styles.title}>
        <h1>Register</h1>
      </div>
      <div>
        <img
          className={styles.image_logo}
          src="./assets/images/login_register_image.jpg"
          alt="imagen"
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="firstname"
          className={styles.input}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          name="LastName"
          placeholder="Lastname"
          className={styles.input}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          name="Address"
          placeholder="Address"
          className={styles.input}
          onChange={(e) => setAddress(e.target.value)}
        />
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
        <button className={styles.btn_primary}>Register</button>
      </form>
    </>
  );
};
