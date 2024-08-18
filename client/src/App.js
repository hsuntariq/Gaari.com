import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-phone-input-2/lib/style.css";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
const App = () => {
  return (
    <>
      <Router>
        <Toaster />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
