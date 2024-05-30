import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegRight() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !validateUsername(username) ||
      !validateEmail(email) ||
      !validatePhoneNumber(phoneNumber) ||
      !validatePassword(password) ||
      !validateConfirmPassword(confirmPassword)
    ) {
      return;
    }
    // Add your registration logic here
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
      username,
      email,
      phoneNumber,
      password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    // Set the user in local storage
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    // Redirect to home page
    window.location.href = "/login";
  };
  const validateUsername = (username) => {
    if (!username.trim()) {
      setUsernameError("Username is required");
      return false;
    } else if (username.length < 3 || username.length > 20) {
      setUsernameError("Username must be between 3 and 20 characters");
      return false;
    } else {
      setUsernameError("");
      return true;
    }
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setEmailError("Email is invalid");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber.trim()) {
      setPhoneNumberError("Phone number is required");
      return false;
    } else if (!/^\d{11}$/.test(phoneNumber)) {
      setPhoneNumberError("Phone number must be 11 digits");
      return false;
    } else {
      setPhoneNumberError("");
      return true;
    }
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      setPasswordError("Password is required");
      return false;
    } else if (password.length < 8 || password.length > 20) {
      setPasswordError("Password must be between 8 and 20 characters");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm password is required");
      return false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Confirm password must match password");
      return false;
    } else {
      setConfirmPasswordError("");
      return true;
    }
  };

  const handleUsernameChange = (event) => {
    const username = event.target.value;
    setUsername(username);
    validateUsername(username);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    validateEmail(email);
  };

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    setPhoneNumber(phoneNumber);
    validatePhoneNumber(phoneNumber);
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    validatePassword(password);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    validateConfirmPassword(confirmPassword);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="username-container">
          <div className="username">
            <img
              className="usernameimg"
              alt="Username icon"
              src="/Assests/Username.png"
            />
            <input
              type="text"
              className={`form-control ${usernameError ? "error" : ""}`}
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
              style={{ paddingLeft: "35px" }}
            />
          </div>
          {usernameError && <p className="error-message">{usernameError}</p>}
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
              className={`form-control ${emailError ? "error" : ""}`}
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{ paddingLeft: "35px" }}
            />
          </div>
          {emailError && <p className="error-message">{emailError}</p>}
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
              className={`form-control ${phoneNumberError ? "error" : ""}`}
              placeholder="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              style={{ paddingLeft: "35px" }}
            />
          </div>
          {phoneNumberError && (
            <p className="error-message">{phoneNumberError}</p>
          )}
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
              className={`form-control ${passwordError ? "error" : ""}`}
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{ paddingLeft: "35px" }}
            />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <br />
        <div>
          <div className="confirmpassword">
            <img
              className="confirmpasswordimg"
              alt="Confirm password icon"
              src="/Assests/Password.png"
            />
            <input
              type="password"
              className={`form-control ${confirmPasswordError ? "error" : ""}`}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              style={{ paddingLeft: "35px" }}
            />
          </div>
          {confirmPasswordError && (
            <p className="error-message">{confirmPasswordError}</p>
          )}
        </div>
        <br />
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <br />
      <p>
        Already have an account? <Link to="/login">Login here!</Link>
      </p>
    </div>
  );
}

export default RegRight;
