import { useEffect, useState } from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import PostList from "../../components/Home/BlogList/PostList";
import EmptyList from "../../components/common/EmptyList";
import { GetRequest } from "../../utils/httpRequest";
import { Loader } from "../../utils/Loader";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchkey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    GetRequest("/v1/posts").then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, [searchkey]);

  // search Submit function
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResult();
  };

  // search for blogs by categy
  const handleSearchResult = () => {
    const allPosts = posts;

    const filteredBlogs = allPosts.filter((post) =>
      // post.category.toLowerCase().includes(searchkey.toLowerCase().trim()) ||
      post.title.toLowerCase().includes(searchkey.toLowerCase().trim())
    );

    setPosts(filteredBlogs);
  };

  const handleClearSearch = () => {
    setPosts(posts);
    setSearchKey("");
    handleClearSearch();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <SearchBar
        value={searchkey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!posts.length ? <EmptyList /> : <PostList posts={posts} />}
    </div>
  );
};

export default Home;
