import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NewPost } from "./components/Home/NewPost/NewPost";
import PostDetails from "./pages/Blog/PostDetails";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { LandingPage } from "./pages/LandingPage";
import Header from "./components/Home/Header/Header";
import { EditPost } from "./components/EditPost/EditPost";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact Component={LandingPage} />
          <Route path="/blog/:id" Component={PostDetails} />
          <Route path="/NewPost" Component={NewPost} />
          <Route path="/Edit/:id" Component={EditPost} />
          <Route path="/Register" Component={Register} />
          <Route path="/Login" Component={Login} />
        </Routes>
      </div>
    </>
  );
}

export default App;
