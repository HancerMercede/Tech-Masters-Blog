import { Link, Navigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { GetRequest, DeleteRequest } from "../../utils/httpRequest";
import { Loader } from "../../utils/Loader";
import { CiTrash } from "react-icons/ci";
import { PiNotePencilThin } from "react-icons/pi";
import "highlight.js/styles/github.css";
import { Fragment } from "react";
import { UserContext } from "../../components/UserContext/UserContext";
import { Comment } from "../../components/comments/Comment";
import { CommentList } from "../../components/comments/CommentList";
import axios from "axios";
import { Store } from "react-notifications-component";
import "animate.css";
import Swal from "sweetalert2";

// Mocking the author picture.
const authorAvatar = "/assets/images/author.jpg";

// Setting the token
const token = localStorage.getItem("token");
const authToken = JSON.parse(token);
const path = "http://localhost:3000";

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
  const [redirect, setRedirect] = useState(false);
  const [redirectIfTokenHasExpired, setRedirectIfTokenHasExpired] =
    useState(false);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);

    GetRequest(`/api/v1/posts/${id}`)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // This function verifies the token.
  const verifyToken = (authToken) => {
    axios
      .get(`${path}/auth`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      })
      .catch((err) => {
        console.log(err.message);
        setRedirectIfTokenHasExpired(true);
        Store.addNotification({
          title: "Warning!",
          type: "info",
          message: "The session has expired: " + err.message,
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated animate__fadeIn"],
          animationOut: ["animate__animated animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      });
  };

  const handleDelete = (ev) => {
    ev.preventDefault();

    // verifyToken(authToken);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteRequest(`/api/v1/posts/${id}`);
        setRedirect(true);
      }
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (redirectIfTokenHasExpired) {
    return <Navigate to="/Login" />;
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div>
        {post ? (
          <div className="blog-wrap animate__animated animate__fadeIn">
            <header className="animate__animated animate__fadeInDownBig">
              <p className="blog-date">Published {post.postdate}</p>
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
            <img src={`http://localhost:3000/${post.cover}`} alt="cover" />
            <div className="Edit_section">
              {userInfo?.email ? (
                <>
                  <Link className="Edit_button" to={`/Edit/${post.id}`}>
                    <PiNotePencilThin size={14} title="Edit Post" /> Edit
                  </Link>
                  <button className="Delete_button" onClick={handleDelete}>
                    <CiTrash size={14} title="Delete Post" />
                    Delete
                  </button>
                </>
              ) : null}
            </div>
            <p
              className="blog-desc"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
            <div className="blog-author">
              <img src={authorAvatar} alt="avatar" />
              <div>
                <h6>{post.username}</h6>
                <p>{post.postdate}</p>
              </div>
            </div>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
      {userInfo?.email && <Comment idPost={id} />}
      <CommentList key={id} postId={id} />
    </>
  );
};

export default PostDetails;
