import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { GetRequest } from "../../utils/httpRequest";
import { Loader } from "../../utils/Loader";

// Mocking the cover and the author picture.
const authorAvatar = "/assets/images/author.jpg";
const cover = "/assets/images/React-post.jpg";

// Mocking the subcategory.
const subCategory = [
  { id: 1, Name: "Development" },
  { id: 2, Name: "Front-End" },
  { id: 3, Name: "Back-End" },
];

const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    GetRequest(`/v1/posts/${id}`).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div>
        <Link to="/" className="blog-goBack">
          <span>Go Back</span>
        </Link>

        {post ? (
          <div className="blog-wrap">
            <header>
              <p className="blog-date">Published {post.postdate}</p>
              <h1>{post.title}</h1>
              <div className="blog-subCategory">
                {subCategory.map((category) => (
                  <>
                    <div>
                      <Chip key={category.id} label={category.Name} />
                    </div>
                  </>
                ))}
              </div>
            </header>
            <img src={cover} alt="cover" />
            <p
              className="blog-desc"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="blog-author">
              <img src={authorAvatar} alt="avatar" />
              <div>
                <h6>{post.username}</h6>
                <p>{post.PostDate}</p>
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
