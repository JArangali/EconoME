import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

function Blank() {
  const location = useLocation();
  const [hideDiv, setHideDiv] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/home" ||
      location.pathname === "/register"
    ) {
      setHideDiv(true);
    } else {
      setHideDiv(false);
    }
  }, [location]);

  return (
    <div className={`Home ${hideDiv ? "hidden" : ""}`}>
      <h1>Welcome to EconoMe! Click here to Login!</h1>
      <button>
        <a href="/login">Login</a>
      </button>
    </div>
  );
}

export default App;
