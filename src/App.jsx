import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { BlogRouter } from "./routers/blogRouter";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<BlogRouter />} />
          <Route path="/Register" Component={Register} />
          <Route path="/Login" Component={Login} />
        </Routes>
      </div>
    </>
  );
}

export default App;
