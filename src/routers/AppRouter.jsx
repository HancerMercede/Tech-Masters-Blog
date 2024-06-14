import { Route, Routes } from "react-router-dom";
import { Register } from "../components/Register/Register.jsx";
import { Login } from "../components/Login/Login.jsx";
import { BlogRouter } from "../routers/BlogRouter";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<BlogRouter />} />
        <Route path="/Register" Component={Register} />
        <Route path="/Login" Component={Login} />
      </Routes>
    </>
  );
};
