import React from "react";
import "../css/Login.css";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import Logo from "../images/Logo.png";
import { auth, google, github } from "../config/fire";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPass, setErrorConfirmPass] = useState("");

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setErrorName("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfirmPass("");

    e.preventDefault();
    try {
      const { data } = await signUp(formData);
      console.log(data);
      navigate("/login");
    } catch  (error) {
      // alert(error.response.data.message);
      console.error("Đã xảy ra lỗi khi đăng ký:", error);
      setError(error.response.data.message);

      // Email
      if (error.response.data.message == "Nguoi dung da duoc dang ky") {
        setErrorEmail("User already exist");
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

      // Name
      if (error.response.data.message == "name is required") {
        setErrorName("Name is required");
      } else {
        setErrorName("");
      }
      if (error.response.data.message == "name must be at least 3 characters") {
        setErrorName("Name must have at least 3 characters");
      } else {
        setErrorName("");
      }

      // Password
      if (error.response.data.message == "password is required") {
        setErrorPassword("Password is required");
      } else {
        setErrorPassword("");
      }
      if (
        error.response.data.message == "password must be at least 6 characters"
      ) {
        setErrorPassword("Password must have at least 6 characters");
      } else {
        setErrorPassword("");
      }

      // ConfirmPass
      if (
        error.response.data.message == "confirmpassword is required" ||
        error.response.data.message == "confirmpassword is not empty"
      ) {
        setErrorConfirmPass("Confirm password is required");
      } else {
        setErrorConfirmPass("");
      }
      if (error.response.data.message == "confirmpassword is not matching") {
        setErrorConfirmPass("Password is not match");
      } else {
        setErrorConfirmPass("");
      }
    }
    console.log(formData.userName, formData.email, formData.password);
  };

  useEffect(() => {
    handleSubmit();
  });
  // const validatePassword = () => {
  //   let isValid = true;
  //   if (password !== "" && confirmPass !== "") {
  //     if (password !== confirmPass) {
  //       isValid = false;
  //       setError("Passwords does not match");
  //     } else {
  //       isValid = true;
  //       setError("");
  //     }
  //   }
  //   return isValid;
  // };

  // const SignUp = async (e) => {
  //   e.preventDefault();

  //   if (validatePassword()) {
  //     await createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const { user } = userCredential;
  //         console.log(user);
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error.code);
  //         if (error.code === "auth/email-already-in-use") {
  //           setErrorEmail("Email address already in use.");
  //         } else {
  //           setErrorEmail("");
  //         }
  //         if (error.code == "auth/invalid-email") {
  //           setErrorEmail("Invaded email address.");
  //         } else {
  //           setErrorEmail("");
  //         }
  //         if (error.code === "auth/missing-password") {
  //           setErrorPassword("Please enter your password.");
  //         } else {
  //           setErrorPassword("");
  //         }
  //         if (error.code === "auth/weak-password") {
  //           setErrorPassword("Password must have at least 6 characters.");
  //         } else {
  //           setErrorPassword("");
  //         }
  //       });
  //   }
  // };

  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    console.log(result);
  };

  return (
    <div className="body">
      <div className="login-container">
        <div className="login-logo-container">
          <img src={Logo} alt="" className="login-logo" />
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
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="input-name">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="alert">{errorName}</div>
              </div>
              <div className="input-email">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="alert">{errorEmail}</div>
              </div>
              <div className="input-password">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="alert">{errorPassword}</div>
              </div>
              <div className="input-password">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />{" "}
                <div className="alert">{errorConfirmPass}</div>
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
            <div className="line" id="short-res"></div>
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
