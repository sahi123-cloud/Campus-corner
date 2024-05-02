import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const newUser = { username, email, password };
      await axios.post("http://localhost:5000/signup", newUser);
      console.log("User registered successfully!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error registering user:", error.response.data.error);
      setAlertMessage(error.response.data.error);
    }
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const newUser = { username, email, password };
  //     await axios.post('http://localhost:5000/signup', newUser);
  //     console.log('User registered successfully!');
  //     window.location.href = '/login';
  //   } catch (error) {
  //     console.error('Error registering user:', error);
  //   }
  // };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <div className="user-box">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="user-box">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="user-box">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <center>
          <button type="submit">
            Sign Up
            <span></span>
          </button>
        </center>
      </form>
      <center>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </center>
    </div>
  );
}

export default Signup;
