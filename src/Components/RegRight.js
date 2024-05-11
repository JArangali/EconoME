import React, { useState } from "react";

function RegRight() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here
    console.log(
      `Username: ${username}, Email: ${email}, Phone Number: ${phoneNumber}, Password: ${password}, Confirm Password: ${confirmPassword}`
    );
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="username">
            <img
              className="usernameimg"
              alt="Username icon"
              src="/Assests/Username.png"
            />
            <input
              type="text"
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
          <div className="email">
            <img
              className="emailimg"
              alt="Email icon"
              src="/Assests/Email.png"
            />
            <input
              type="email"
              className="form-control email-input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ paddingLeft: "35px" }}
            />
          </div>
        </div>
        <br />
        <div>
          <div className="number">
            <img
              className="numberimg"
              alt="Phone number icon"
              src="/Assests/Number.png"
            />
            <input
              type="tel"
              className="form-control phone-number-input"
              placeholder="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              style={{ paddingLeft: "35px" }}
            />
          </div>
        </div>
        <br />
        <div>
          <div className="password">
            <img
              className="passwordimg"
              alt="Password icon"
              src="/Assests/Password.png"
            />
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
        <div>
          <div className="confirmpassword">
            <img
              className="confirmpasswordimg"
              alt="Confirm password icon"
              src="/Assests/ConfirmPassword.png"
            />
            <input
              type="password"
              className="form-control confirm-password-input"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              style={{ paddingLeft: "35px" }}
            />
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-warning">
          Register
        </button>
      </form>
      <br />
      <p>
        Already have an account? <a href="/login">Login here!</a>
      </p>
    </div>
  );
}

export default RegRight;
