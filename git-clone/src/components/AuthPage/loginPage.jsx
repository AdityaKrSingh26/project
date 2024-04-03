import React from "react";
import { useState, useEffect } from "react";
import { PageHeader } from "@primer/react/drafts";
import logo from "./github-mark-white.svg";
import { Box, Button } from "@primer/react";
import axios from "axios";
import { useAuth } from "../../authContext";


import "./loginPage.css";


function LoginPage() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setCurrentUser(null);
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { currentUser, setCurrentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await axios.post("https://backendgit-1.onrender.com/login", {
        username,
        password,
      });
      const token = res.data.token;
      // Save the token and user ID in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", res.data.userId); // Store the user ID
      setLoader(false);
      setCurrentUser(res.data.userId);

      window.location.href = "/"; // Adjust the path as needed
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your username and password.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-logo-container">
        <img className="logo-login" src={logo} alt="" />
      </div>

      <div className="login-box-wrapper">
        <div className="login-heading">
          <Box
            sx={{
              padding: 1,
            }}
          >
            <PageHeader>
              <PageHeader.TitleArea variant="large">
                <PageHeader.Title>Sign In</PageHeader.Title>
              </PageHeader.TitleArea>
            </PageHeader>
          </Box>
        </div>
        <div className="login-box">
          <div>
            <label class="label">Email address</label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update the username state on change
            />
          </div>
          <div className="div">
            <label class="label">Password</label>
            <input
              autocomplete="off"
              name="Password"
              id="Password"
              class="input"
              type="password"
              value={password} // Bind the password state to the input value
              onChange={(e) => setPassword(e.target.value)} // Update the password state on change
            />
          </div>

          <Button
            className="signup-button"
            variant="primary"
            // sx={{ width: 250 }}
            onClick={handleLogin}
            disabled={loader}
          >
            {loader ? "Loading..." : "Sign In"}
          </Button>
        </div>
        <div className="pass-box">
          {/* <p>
            <a href="/signin">Sign in with a passkey</a>
          </p> */}
          <p>
            New to GitHub? <a href="/signup">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
