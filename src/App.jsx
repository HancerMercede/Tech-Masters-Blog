import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import ThemeProvider from "./components/DarkMode/Theme";
import { NewPost } from "./components/Home/NewPost/NewPost";
import PostDetails from "./pages/Blog/PostDetails";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="container">
          <Routes>
            <Route path="/" exact Component={LandingPage} />
            <Route path="/blog/:id" Component={PostDetails} />
            <Route path="/NewPost" Component={NewPost} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
