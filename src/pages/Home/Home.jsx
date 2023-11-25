import { useEffect, useState } from "react";
import PostList from "../../components/Home/BlogList/PostList";
import EmptyList from "../../components/common/EmptyList";
import { GetRequest } from "../../utils/httpRequest";
import { Loader } from "../../utils/Loader";
import Proptypes from "prop-types";

const Home = ({ search }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(search);

  useEffect(() => {
    setLoading(true);
    const searchUrl = search
      ? `/api/v1/posts?search=${search}`
      : "/api/v1/posts";
    GetRequest(searchUrl)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [search]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div>{!posts.length ? <EmptyList /> : <PostList posts={posts} />}</div>
    </>
  );
};

Home.propTypes = {
  search: Proptypes.string,
};

export default Home;
