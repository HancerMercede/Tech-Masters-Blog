/* eslint-disable react/prop-types */
import Chip from "../../../common/Chip/index";
import "./styles.css";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";


const authorAvatar = "/assets/images/author.jpg";

export const PostItem = ({ post }) => {
    return (
    <div id="#blog" className="blogItem-wrap ">
      <Link className="blogItem-link" to={`/blog/${post.id}`}>
        <img
            src={`http://localhost:1337/${post.cover.url}`}
            alt="cover"
            className="blogItem-cover"
        />
      </Link>
      <div className="post-section">
        <Chip label={post.category}/>
        <h3>{post.title}</h3>
        <Markdown className="blogItem-desc">
         {post.content}
       </Markdown>
      </div>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{post.username}</h6>
            <p>{post.Date}</p>
          </div>

        </div>
        <Link className="blogItem-link-btn" to={`/blog/${post.id}`}>
          More ▶
        </Link>
      </footer>
    </div>
  );
};
