import { useEffect, useState } from "react";
import styles from "./EditPost.module.css";
import Options from "../../config/options";
import Editor from "../Editor/Editor";
import { Link, Navigate, useParams } from "react-router-dom";
import { GetRequest } from "../../utils/httpRequest";
import Swal from "sweetalert2";
import axios from "axios";
import { Store } from "react-notifications-component";

export const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState();
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();
  const token = localStorage.getItem("token");
  const authToken = JSON.parse(token);

  const handlerClear = () => {
    setTitle("");
    setCategory("");
    setFiles(null);
    setDate("");
    setAuthor("");
    setContent("");
  };

  useEffect(() => {
    GetRequest(`/api/v1/posts/${id}`)
      .then((data) => {
        setTitle(data.title);
        setCategory(data.category);
        setFiles(data.cover);
        setDate(data.createdAt);
        setAuthor(data.username);
        setContent(data.content);
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
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("category", category);
    data.append("files", files?.[0]);
    data.append("date", date);
    data.append("author", author);
    data.append("content", content);

    axios
      .put(`http://localhost:3000/api/v1/posts/${id}`, data, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        if (res) {
          Swal.fire(
            "Success!",
            "The post was successfully updated",
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
          <h1>{title}</h1>
        </header>
      </div>
      <form onSubmit={handleUpdate}>
        <input
          className={styles.input}
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name="category"
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
