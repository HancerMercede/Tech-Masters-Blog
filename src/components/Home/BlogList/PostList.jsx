import PropTypes from "prop-types";
import { PostItem } from "./BlogItem/PostItem.jsx";
import "./styles.css";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="blogList-wrap">
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
