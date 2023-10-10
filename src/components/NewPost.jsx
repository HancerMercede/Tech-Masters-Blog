import { Link } from "react-router-dom";
import styles from "./NewPost.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ script: "sub" }, { script: "super" }],
    [{ direction: "rtl" }],
    // [{ size: ["small", false, "large", "huge"] }],
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["link", "image"],
    ["clean"], // remove formatting button
  ],
};

const handleSubmit = (e) => {
  e.preventDefault();
};
export const NewPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrap}>
        <header>
          <h1>Create a new post</h1>
          <h3>Show it to all.</h3>
        </header>
      </div>
      <form onSubmit={handleSubmit}>
        <input className={styles.input} type="title" placeholder="Title.." />
        <select name="category" className={styles.selectCategory}>
          <option value="Development">Development</option>
          <option value="Development">Front-End</option>
          <option value="Development">Data bases</option>
        </select>
        <input
          className={styles.input}
          type="file"
          placeholder="select a file"
        />
        <input
          className={styles.input}
          type="date"
          placeholder="created on.."
        />
        <input className={styles.input} type="text" placeholder="Author.." />
        <ReactQuill modules={modules} />
        <input type="submit" className={styles.button} value="Send" /> |{" "}
        <Link to="/" className={styles.back_button}>
          Back
        </Link>
      </form>
    </div>
  );
};
