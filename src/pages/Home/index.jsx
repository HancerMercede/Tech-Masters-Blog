import { useState } from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList } from "../../config/data";
import EmptyList from "../../components/common/EmptyList";
import DarkMode from "../../components/DarkMode/DarkMode";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchkey, setSearchKey] = useState("");

  // search Submit function
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResult();
  };

  // search for blogs by categy
  const handleSearchResult = () => {
    const allBlogs = blogList;

    const filteredBlogs = allBlogs.filter(
      (blog) =>
        blog.category.toLowerCase().includes(searchkey.toLowerCase().trim()) ||
        blog.title.toLowerCase().includes(searchkey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
    handleClearSearch();
  };

  return (
    <div>
      <DarkMode />
      <Header />
      <SearchBar
        value={searchkey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
