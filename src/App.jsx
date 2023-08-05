import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/blog/:id" Component={Blog} />
        </Routes>
      </div>
    </>
  );
}

export default App;
