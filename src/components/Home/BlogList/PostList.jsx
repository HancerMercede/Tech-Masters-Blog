import PropTypes from "prop-types";
import { PostItem } from "./BlogItem/PostItem.jsx";
import "./styles.css";
import "animate.css";

const PostList = ({ posts }) => {
  return (
    <div className="blogList-wrap animate__animated animate__fadeIn">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.any,
};

export default PostList;
