import React from "react";
import "../css/Login.css";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const users = [{ username: "admin", password: "1234" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };
  return (
    <div>
      <div className="login-container">
        <img src="./bentilzone/images/Logo.png" alt="" className="login-logo" />
        <div className="form-container">
          <div className="social-login">
            <button className="github">
              <div className="social-icon">
                <AiFillGithub />
              </div>
              <span>Gihub</span>
            </button>
            <button className="gmail">
              <div className="social-icon">
                <FcGoogle />
              </div>
              <span>Google</span>
            </button>
          </div>
          <div class="or_container">
            <div class="line"></div>
            <span>OR</span>
            <div class="line"></div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-content">
              <div>Username: </div>
              <input
                type="text"
                name="Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <div>Password: </div>
              <input
                type="password"
                name="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
