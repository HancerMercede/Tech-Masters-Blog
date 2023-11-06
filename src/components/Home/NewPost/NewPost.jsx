import { Link, Navigate } from "react-router-dom";
import styles from "./NewPost.module.css";
import { useState } from "react";
import Editor from "../../Editor/Editor";
import Options from "../../../config/options";
import Swal from "sweetalert2";

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handlerClear = () => {
    setTitle("");
    setCategory("");
    setFiles("");
    setDate("");
    setAuthor("");
    setContent("");
  };

  const handleSubmit = async (e) => {
    const data = {
      title: title,
      category: category,
      files: files,
      date: Date.parse(date),
      content: content,
      author: author,
    };

    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.status === 201) {
      Swal.fire("Success!", "The post was successfully", "success").then(() => {
        setRedirect(true);
        handlerClear();
      });
    }
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
      <form onSubmit={handleSubmit}>
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
          placeholder="select a file"
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
