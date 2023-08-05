import Chip from "../../../common/Chip";
import "./styles.css";
import { Link } from "react-router-dom";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => (
  <div className="blogItem-wrap">
    <Link className="blogItem-link" to={`/blog/${id}`}>
      <img src={cover} alt="cover" className="blogItem-cover" />
    </Link>
    <Chip label={category} />
    <h3>{title}</h3>
    <p className="blogItem-desc">{description}</p>

    <footer>
      <div className="blogItem-author">
        <img src={authorAvatar} alt="avatar" />
        <div>
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        ➡️
      </Link>
    </footer>
  </div>
);
export default BlogItem;
