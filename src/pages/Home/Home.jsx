import { useEffect, useState } from "react";
import PostList from "../../components/Home/BlogList/PostList";
import EmptyList from "../../components/common/EmptyList";
import { GetRequest } from "../../utils/httpRequest";
import { Loader } from "../../utils/Loader";
import Proptypes from "prop-types";


const Home = ({ search }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);
    setLoading(false);
    const searchUrl = search
      ? `/api/posts/?filters[title][$contains]=${search}&populate=*`
      : "/api/posts/?populate=*";

    GetRequest(searchUrl)
      .then((data) => {
          console.log(data);
        setPosts(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [search, setPosts]);

  if (loading) {
    return <Loader />;
  }

  return (
      <>

        <div>{!posts.length ? <EmptyList/> : <PostList posts={posts}/>}</div>
      </>
  );
};

Home.propTypes = {
  search: Proptypes.string,
};

export default Home;
