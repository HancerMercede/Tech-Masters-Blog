import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/PostDetails";
import ThemeProvider from "./components/DarkMode/Theme";
import { NewPost } from "./components/Home/NewPost/NewPost";
function App() {
  return (
    <>
      <ThemeProvider>
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/blog/:id" Component={Blog} />
            <Route path="/NewPost" Component={NewPost} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
