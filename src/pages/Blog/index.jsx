import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <div>
        <Link to="/" className="blog-goBack">
          <span>Go Back</span>
        </Link>

        {blog ? (
          <div className="blog-wrap">
            <header>
              <p className="blog-date">Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className="blog-subCategory">
                {blog.subCategory.map((category, index) => (
                  <div>
                    <Chip key={index} label={category} />
                  </div>
                ))}
              </div>
            </header>
            <img src={blog.cover} alt="cover" />
            <p className="blog-desc">{blog.description}</p>
            <div className="blog-author">
              <img src={blog.authorAvatar} alt="avatar" />
              <div>
                <h6>{blog.authorName}</h6>
              </div>
            </div>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  );
};

export default Blog;
