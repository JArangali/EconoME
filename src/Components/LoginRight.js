import React, { useState } from "react";

function LoginRight() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log(`Username: ${username}, Password: ${password}`);
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
              onChange={(event) => setUsername(event.target.value)}
              style={{ paddingLeft: "35px" }}
            />
          </div>
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
              onChange={(event) => setPassword(event.target.value)}
              style={{ paddingLeft: "35px" }}
            />
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-warning">
          Login
        </button>
      </form>
      <br />
      <p>
        Don't have an account? <a href="/create-account">Create an account</a>
      </p>
    </div>
  );
}

export default LoginRight;
