import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import PostDetails from "../pages/Blog/PostDetails";
import { NewPost } from "../components/Home/NewPost/NewPost";
import { EditPost } from "../components/EditPost/EditPost";
import Header from "../components/Home/Header/Header";

export const BlogRouter = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact Component={LandingPage} />
          <Route path="/blog/:id" Component={PostDetails} />
          <Route path="/NewPost" Component={NewPost} />
          <Route path="/Edit/:id" Component={EditPost} />
        </Routes>
      </div>
    </>
  );
};
