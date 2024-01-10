import { useState } from "react";
import styles from "./Comment.module.css";

export const Comment = ({ idPost, username }) => {
  const [comment, setComment] = useState("");

  const data = new FormData();
  data.append("idPost", idPost);
  data.append("comment", comment);
  data.append("username", username);

  data.forEach((item) => {
    console.log(item);
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("saving the comment");
  };
  return (
    <>
      <div className={styles.container}>
        <div>
          <p>Please write a comment and tell us what do you think.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className={styles.text_area}
            type="text"
            placeholder="write a comment here..."
            onChange={(e) => setComment(e.target.value)}
          />
          <input type="submit" value="Send" className={styles.button} />
        </form>
      </div>
    </>
  );
};
