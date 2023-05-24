import React from "react";
import "../css/Login.css";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Logo from "../images/Logo.png";
import { auth, google, github } from "../config/fire";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code == "auth/invalid-email") {
          setErrorEmail("Invaded email address.");
        } else {
          setErrorEmail("");
        }
        if (error.code == "auth/user-not-found") {
          setErrorEmail("Account does not exist.");
        } else {
          setErrorEmail("");
        }
        if (error.code === "auth/missing-password") {
          setErrorPassword("Please enter your password.");
        } else {
          setErrorPassword("");
        }
        if (error.code === "auth/wrong-password") {
          setErrorPassword("Wrong password.");
        } else {
          setErrorPassword("");
        }
      });
  };

  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    console.log(result);
    navigate("/");
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-logo-container">
          <img src={Logo} alt="logo" className="login-logo" />
        </div>
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
            <div className="line"></div>
          </div>
          {/* Login Form */}
          <form className="login-form">
            <div className="form-content">
              <div className="input-email">
                <input
                  type="text"
                  name="Email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="alert">{errorEmail}</div>
              </div>
              <div className="input-password">
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="alert">{errorPassword}</div>
              </div>
              <div className="forgot">Forgot Password?</div>
            </div>
            <button type="submit" className="submit-btn" onClick={Login}>
              Sign in
            </button>
          </form>
          {/* Switch Page */}
          <div className="line-container">
            <div className="line" id="short"></div>
            <span>Don't have an account?</span>
            <div className="line" id="short"></div>
          </div>
          <button
            className="submit-btn"
            id="signup"
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
