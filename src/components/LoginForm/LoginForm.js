import React from "react";
import "./LoginForm.css";
import { useState } from "react";

const LoginForm = ({ forgotText, formBtn, handleClick }) => {
  const [user, setUser] = useState(null);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <form className="login-form" onSubmit={handleClick}>
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
          <div className="forgot">{forgotText}</div>
        </div>
        <button type="submit" className="submit-btn">
          {formBtn}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
