import React from "react";
import "../css/Login.css";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Logo from "../images/Logo.png";
import {auth, google, github} from '../config/fire'
import {signInWithPopup, signOut} from 'firebase/auth' 

const Login = () => {
  const [username, setusername] = useState("");
  const [user, setUser] = useState(null)
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
  
  const login = async(provider) => {
    const result = await signInWithPopup(auth, provider) 
    setUser(result.user)
    console.log(result)
  }

  const logout = async() => {
    const result = await signOut(auth)
    setUser(null)
    console.log(result)
  }

  return (
    <div>
      <div className="login-container">
        <img src={Logo} alt="" className="login-logo" />
        <div className="form-container">
          {/* Social Login */}
          <div className="social-login">
            <button className="github" onClick={() => login(github)}>
              <div className="social-icon">
                <AiFillGithub />
              </div>
              <span>Gihub</span>
            </button>
            <button className="google" onClick={() => login(google)}>
              <div className="social-icon">
                <FcGoogle />
              </div>
              <span>Google</span>
            </button>
          </div>
          {/* Break Line */}
          <div className="line-container">
            <div className="line"></div>
            <span>OR</span>
            <div class="line"></div>
          </div>
          {/* Login Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="input-email">
                <input
                  type="text"
                  name="Email"
                  placeholder="Email Address"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
                <div className="alert">Please enter your email address</div>
                <div className="invalid">Invalid Email</div>
              </div>
              <div className="input-password">
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div className="alert">Please enter your password</div>
                <div className="invalid">Wrong password</div>
              </div>
              <div className="forgot">Forgot Password?</div>
            </div>
            <button type="submit" className="submit-btn">
              Sign in
            </button>
          </form>
          <div className="line-container">
            <div className="line" id="short"></div>
            <span>Don't have an account?</span>
            <div class="line" id="short"></div>
          </div>
          <button className="submit-btn" id="signup">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
