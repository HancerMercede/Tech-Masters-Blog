import BlogItem from "./BlogItem";
import PropTypes from "prop-types";
import "./styles.css";

const BlogList = ({ blogs, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.any,
};

export default BlogList;
