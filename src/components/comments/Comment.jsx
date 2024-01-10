import { useState } from "react";
import styles from "./Comment.module.css";
import axios from "axios";

const token = localStorage.getItem("token");
const authToken = JSON.parse(token);
const path = "http://localhost:3000";

export const Comment = ({ idPost, username }) => {
  const [comment, setComment] = useState("");

  const data = new FormData();
  data.append("idPost", idPost);
  data.append("content", comment);
  data.append("username", username);

  const handleClear = () => {
    setComment("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${path}/api/v1/posts/:id/comments`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      });
    handleClear();
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
            value={comment}
            placeholder="write a comment here..."
            onChange={(e) => setComment(e.target.value)}
          />
          <input type="submit" value="Send" className={styles.button} />
        </form>
      </div>
    </>
  );
};
