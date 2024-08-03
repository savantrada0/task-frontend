import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import "./style/style.css";
import Home from "./screens/Home";
import RegisterSuccess from "./screens/RegisterSuccess";
import VerifySuccess from "./screens/VerifySuccess";
import LoginSuccess from "./screens/LoginSuccess";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<Register />} />
      <Route path="/admin" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/login-success" element={<LoginSuccess />} />
      <Route path="/verify-email" element={<VerifySuccess />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
