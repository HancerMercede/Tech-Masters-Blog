import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ThemeProvider from "./components/DarkMode/Theme";
function App() {
  return (
    <>
      <ThemeProvider>
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/blog/:id" Component={Blog} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
