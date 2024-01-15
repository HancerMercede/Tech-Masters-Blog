import { useContext, useState } from "react";
import styles from "./Comment.module.css";
import axios from "axios";
import propTypes from "prop-types";
import { CommentContext } from "../CommentContext/CommentContext";
const token = localStorage.getItem("token");
const authToken = JSON.parse(token);
const path = "http://localhost:3000";

export const Comment = ({ idPost, username }) => {
  const [comment, setComment] = useState("");
  const { setCommentList } = useContext(CommentContext);

  const data = new FormData();
  data.append("idPost", idPost);
  data.append("content", comment);
  data.append("username", username);

  const handleClear = () => {
    setComment("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (comment.length <= 0) {
      return;
    }

    await axios
      .post(`${path}/api/v1/posts/:id/comments`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setCommentList(response.data);
      })
      .catch((err) => {
        Store.addNotification({
          title: "Warning!",
          type: "info",
          message: "The session has expired: " + err.message,
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated animate__fadeIn"],
          animationOut: ["animate__animated animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      });
    handleClear();
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <p>Comment and tell us what do you think.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className={styles.text_area}
            type="text"
            value={comment}
            placeholder=" Your comment here..."
            maxLength={500}
            onChange={(e) => setComment(e.target.value)}
          />
          <input type="submit" value="Send" className={styles.button} />
        </form>
      </div>
    </>
  );
};

Comment.propTypes = {
  idPost: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
};
