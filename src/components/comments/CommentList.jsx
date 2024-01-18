/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useContext, useEffect, useState } from "react";
// import { DateFormatter } from "../../utils/DateFormatter";
import propTypes from "prop-types";
import { CiTrash } from "react-icons/ci";
import { PiNotePencilThin } from "react-icons/pi";
import "./Styles.css";
import { GetRequest } from "../../utils/httpRequest";
import { CommentContext } from "../CommentContext/CommentContext";

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const { commentList } = useContext(CommentContext);

  useEffect(() => {
    GetRequest(`/api/v1/posts/${postId}/comments`).then((response) => {
      setComments(response);
    });
  }, [postId]);

  useEffect(() => {
    setComments([...comments, commentList]);
  }, [commentList]);

  return (
    <div className="comment_section">
      <div className="comment_section_list">
        {comments?.length ? (
          comments.map((c, i) => (
            <Fragment key={i}>
              <div className="comment_wrapper">
                <li key={c.id} className="username">
                  {c.username}
                </li>
                <li className="date">{c.createdAt}</li>
                <li className="content">{c.content}</li>
              </div>
              {c.username ? (
                <div className="buttons_wrapper">
                  <button className="btn_edit">
                    <PiNotePencilThin size={15} />
                  </button>
                  <button className="btn_delete">
                    <CiTrash size={15} />
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </Fragment>
          ))
        ) : (
          <li className="no_comments comment_wrapper">
            No comments yet for this post: {postId}
          </li>
        )}
      </div>
    </div>
  );
};

CommentList.propTypes = {
  postId: propTypes.string.isRequired,
};
