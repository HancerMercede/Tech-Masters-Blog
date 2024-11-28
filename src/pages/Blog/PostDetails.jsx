import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { GetRequest} from "../../utils/httpRequest";
import { Loader } from "../../utils/Loader";
import Markdown from 'react-markdown'
import "highlight.js/styles/github.css";
import { Fragment } from "react";
import "animate.css";

// Mocking the author picture.
const authorAvatar = "/assets/images/author.jpg";

// Mocking the subcategory.
const subCategory = [
  { id: 1, Name: "Development" },
  { id: 2, Name: "Front-End" },
  { id: 3, Name: "Back-End" },
];

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const searchUrlbyId = `/api/posts/?filters[id][$eq]=${id}&populate=*`;
    setLoading(true);
    GetRequest(searchUrlbyId)
        .then((data) => {
          const post = data.data[0];
          setPost(post);
          setLoading(false);
        })
        .catch((err) => console.log(err));
  }, [id]);



  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="post_container">
        {post ? (
          <div className="blog-wrap animate__animated animate__fadeIn">
            <header className="animate__animated animate__fadeInDownBig">
              <p className="blog-date">Published {post.Date}</p>
              <h1 className="blog-title ">{post.title}</h1>
              <div className="blog-subCategory">
                {subCategory.map((category) => (
                  <Fragment key={category.id}>
                    <div>
                      <Chip label={category.Name} />
                    </div>
                  </Fragment>
                ))}
              </div>
            </header>
            <img src={`http://localhost:1337/${post.cover.url}`} alt="cover" />

              <Markdown className="blog-desc">{post.content}</Markdown>
              <div className="blog-author">
                  <img src={authorAvatar} alt="avatar"/>
                  <div>
                      <h6>{post.username}</h6>
                <p>{post.Date}</p>
              </div>
            </div>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
      {/*{userInfo?.email && <Comment idPost={id} />}*/}
      {/*<CommentList key={id} postId={id} />*/}
    </>
  );
};

export default PostDetails;
