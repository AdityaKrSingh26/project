import React from "react";
import { PageHeader } from "@primer/react/drafts";
import logo from "./github-mark-white.svg";
import "./loginPage.css";
import { Box, Button } from "@primer/react";
import axios from "axios";
import { useState } from "react";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/signUp", {
        username,
        password,
      });
      const token = res.data.token;
      // Save the token in local storage or cookies
      localStorage.setItem("token", token);
      // Redirect the user or update the UI
      // For example, redirect to a dashboard or home page
      window.location.href = "/dashboard"; // Adjust the path as needed
    } catch (err) {
      console.error(err);
      // Handle errors, e.g., show an error message to the user
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
            />
          </div>
          <div className="div">
            <label class="label">Password</label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="password"
            />
          </div>

          <Button variant="primary" sx={{ width: 250 }} onClick={handleLogin}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
