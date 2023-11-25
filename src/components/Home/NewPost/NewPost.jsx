import { Link, Navigate } from "react-router-dom";
import styles from "./NewPost.module.css";
import { useState } from "react";
import Editor from "../../Editor/Editor";
import Options from "../../../config/options";
import Swal from "sweetalert2";
import axios from "axios";

export const NewPost = () => {
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

    console.log(data);

    e.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/posts", data)
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
      .catch((err) => console.log(err.message));
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerWrap}>
        <header>
          <h1>Create a new post</h1>
          <h3>Show it to all.</h3>
        </header>
      </div>
      <form onSubmit={CreateNewPost}>
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
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
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
