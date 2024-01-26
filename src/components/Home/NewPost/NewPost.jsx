import { Link, Navigate } from "react-router-dom";
import styles from "./NewPost.module.css";
import { useState } from "react";
import Editor from "../../Editor/Editor";
import Options from "../../../config/options";
import Swal from "sweetalert2";
import axios from "axios";
import { Store } from "react-notifications-component";

export const NewPost = () => {
  const token = localStorage.getItem("token");
  const authToken = JSON.parse(token);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState();
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handlerClear = () => {
    setTitle("");
    setCategory("");
    setFiles(null);
    setDate("");
    setAuthor("");
    setContent("");
  };
  const CreateNewPost = async (e) => {
    const data = new FormData();
    data.append("title", title);
    data.append("category", category);
    data.append("files", files[0]);
    data.append("date", date);
    data.append("author", author);
    data.append("content", content);

    e.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/posts", data, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((res) => {
        if (res) {
          Swal.fire(
            "Success!",
            "The post was successfully added",
            "success"
          ).then(() => {
            setRedirect(true);
            handlerClear();
          });
        }
      })
      .catch((err) =>
        Store.addNotification({
          title: "Error",
          type: "danger",
          message: err.message,
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
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerWrap}>
        <header>
          <h1>POSTS</h1>
          <p>Create new post.</p>
        </header>
      </div>
      <hr />
      <form onSubmit={CreateNewPost} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name="category"
          defaultValue={"Development"}
          className={styles.selectCategory}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <input
          className={styles.input}
          type="file"
          onChange={(e) => setFiles(e.target.files)}
        />
        <input
          className={styles.input}
          type="date"
          value={date}
          placeholder="created on.."
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Author.."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Editor value={content} onChange={setContent} />
        <input type="submit" className={styles.button} value="Send" /> |{" "}
        <Link to="/" className={styles.back_button}>
          Back
        </Link>
      </form>
    </div>
  );
};
