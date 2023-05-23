import React from "react";
import "../css/Login.css";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Logo from "../images/Logo.png";
import { auth, google, github } from "../config/fire";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPass !== "") {
      if (password !== confirmPass) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const SignUp = async (e) => {
    e.preventDefault();

    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
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
          <form className="login-form" onSubmit={SignUp}>
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
                  required
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="alert">{errorPassword}</div>
              </div>
              <div className="input-password">
                <input
                  required
                  type="password"
                  name="Password"
                  placeholder="Confirm Password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />{" "}
                <div className="alert">{error}</div>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              SIGN UP
            </button>
          </form>
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
