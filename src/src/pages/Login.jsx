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
import { signIn } from "../services/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const hangdleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signIn(formData);
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.accessToken);
      if (data.user.role === "admin") {
        navigate("/profile/accounts");
      } else {
        navigate("/profile/accounts");
      }
    } catch (error) {
      console.error(
        "Đã xảy ra lỗi khi đăng nhập:",
        error.response.data.message
      );

      // Email
      if (error.response.data.message == "Khong tim thay nguoi dung") {
        setErrorEmail("User does not exist");
      } else {
        setErrorEmail("");
      }
      if (error.response.data.message == "email is required") {
        setErrorEmail("Email is required");
      } else {
        setErrorEmail("");
      }
      if (error.response.data.message == "email is invalid") {
        setErrorEmail("Email is invalid");
      } else {
        setErrorEmail("");
      }

       // Password
       if (error.response.data.message == "password is required") {
        setErrorPassword("Password is required");
      } else {
        setErrorPassword("");
      }
      if (  
        error.response.data.message == "Mat khau khong dung"
      ) {
        setErrorPassword("Wrong Password");
      } else {
        setErrorPassword("");
      }

    }
  };

  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    console.log(result);
    navigate("/");
  };

  return (
    <div className="body">
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
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={hangdleChange}
                  required
                />
                {/* <div className="alert">{errorEmail}</div> */}
              </div>
              <div className="input-password">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={hangdleChange}
                  required
                />
                {/* <div className="alert">{errorPassword}</div> */}
              </div>
              <div className="forgot">Forgot Password?</div>
            </div>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
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
