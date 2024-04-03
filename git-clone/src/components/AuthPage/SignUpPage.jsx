import React from "react";
import { useState, useEffect } from "react";
import { PageHeader } from "@primer/react/drafts";
import logo from "./github-mark-white.svg";
import "./loginPage.css";
import { Box, Button } from "@primer/react";
import axios from "axios";
import { useAuth } from "../../authContext";



function SignUpPage() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // Added state for email
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { currentUser, setCurrentUser } = useAuth();



  const handleSignUp = async (e) => {
    // Renamed from handleLogin to handleSignUp
    e.preventDefault();
    try {
      setLoader(true);

      const res = await axios.post("https://backendgit-1.onrender.com/signup", {
        username,
        email,
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
      alert(err.message);
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
                <PageHeader.Title>Sign Up</PageHeader.Title>
              </PageHeader.TitleArea>
            </PageHeader>
          </Box>
        </div>
        <div className="login-box">
          <div>
            <label className="label">Email</label>
            <input
              autoComplete="off"
              name="username"
              id="username"
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">Username</label>
            <input
              autoComplete="off"
              name="email"
              id="email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="div">
            <label className="label">Password</label>
            <input
              autoComplete="off"
              name="password"
              id="password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="signup-button"
            variant="primary"
            // sx={{ width: 250 }}
            onClick={handleSignUp}
            disabled={loader}
          >
            {loader ? "Loading..." : "Sign Up"}
          </Button>
        </div>
        <div className="pass-box">
          <p>
            <a href="/signin">Already have an account? Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
