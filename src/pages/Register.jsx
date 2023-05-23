import React from "react";
import "../css/Login.css";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Logo from "../images/Logo.png";
import { auth, google, github } from "../config/fire";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const users = [{ username: "admin", password: "1234" }];

  const Singup = (e) => {
    e.preventDefault();
    console.log(users);
    const account = users.find((user) => user.username === username);
    console.log(account);
    if (account && account.password === password) {
      alert("Login failed");
    } else {
      alert("Login successful");
    }
  };

  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    console.log(result);
  };

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
          <LoginForm formBtn="Sign up" handleClick={Singup} />
          {/* Switch Page */}
          <div className="line-container">
            <div className="line" id="short-res"></div>
            <span>Already have an account?</span>
            <div class="line" id="short-res"></div>
          </div>
          <button
            className="submit-btn"
            id="signup"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
