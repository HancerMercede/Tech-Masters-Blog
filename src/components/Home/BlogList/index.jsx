/* eslint-disable react/prop-types */
import BlogItem from "./BlogItem";
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

export default BlogList;
