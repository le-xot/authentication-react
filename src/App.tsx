import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/register";

export const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);
