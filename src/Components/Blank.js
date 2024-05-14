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
      <div className="welcomediv">
        <div>
          <img className="welcomeimg" src="/halfbody.png" />
        </div>
        <div className="titlecontainer">
          <h2 className="welcometext">Welcome to</h2>
          <h1 className="welcomesubtext">EconoMe!</h1>
          <button className="loginbtnintro btn btn-info">
            <a className="awel" href="/login">
              Login
            </a>
          </button>
          <button
            className="loginbtnintro btn btn-info"
            style={{ marginLeft: "10px" }}
          >
            <a className="awel" href="/register">
              Register
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
