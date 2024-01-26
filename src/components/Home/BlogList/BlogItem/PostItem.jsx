/* eslint-disable react/prop-types */
import Chip from "../../../common/Chip/index";
import "./styles.css";
import { Link } from "react-router-dom";

const authorAvatar = "/assets/images/author.jpg";

export const PostItem = ({ post }) => {
  return (
    <div className="blogItem-wrap ">
      <Link className="blogItem-link" to={`/blog/${post.id}`}>
        <img
          src={`http://localhost:3000/${post.cover}`}
          alt="cover"
          className="blogItem-cover"
        />
      </Link>
      <Chip label={post.category} />
      <h3>{post.title}</h3>
      {/* <p
        className="blogItem-desc"
        // dangerouslySetInnerHTML={{ __html: post.content }}
      /> */}
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{post.username}</h6>
            <p>{post.postdate}</p>
          </div>
        </div>
        <Link className="blogItem-link-btn" to={`/blog/${post.id}`}>
          ▶️
        </Link>
      </footer>
    </div>
  );
};
