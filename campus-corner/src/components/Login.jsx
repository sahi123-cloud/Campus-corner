import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = { username, password };
      const response = await axios.post("http://localhost:5000/login", user);

      if (response.status === 200) {
        console.log("Login successful!");
        window.location.href = "/home";
      } else {
        setErrorMessage("Invalid username or password. Please try again");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="login-container">
      {/* <h2>Login</h2> */}
      <form onSubmit={handleLogin}>
        <div className="used-box">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="used-box">
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
            Login
            <span></span>
          </button>
        </center>
      </form>
      <center>
        <p>
          No account ? <Link to="/signup">Signup</Link>
        </p>
      </center>
    </div>
  );
}

export default Login;
