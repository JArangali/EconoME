import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginRight() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // Set the user in local storage
      localStorage.setItem("currentUser", JSON.stringify(user));
      // Redirect to home page
      window.location.href = "/";
    } else {
      setUsernameError("Invalid username.");
      setPasswordError("Invalid password.");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="username">
            <img className="usernameimg" src="/Assests/Username.png" />
            <input
              type="username"
              className="form-control username-input"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              style={{ paddingLeft: "35px" }}
            />
          </div>
          {usernameError && (
            <div className="error-message">{usernameError}</div>
          )}
        </div>
        <br />
        <div>
          <div className="password">
            <img className="passwordimg" src="/Assests/Password.png" />
            <input
              type="password"
              className="form-control password-input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ paddingLeft: "35px" }}
            />
          </div>
          {passwordError && (
            <div className="error-message">{passwordError}</div>
          )}
        </div>
        <br />
        <button type="submit" className="btn btn-warning">
          Login
        </button>
      </form>
      <br />
      <p>
        Don't have an account? <a href="/Register">Create an account.</a>
      </p>
    </div>
  );
}

export default LoginRight;
