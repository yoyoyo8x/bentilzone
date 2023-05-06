import React from "react";
import Header from "../components/Header/Header";
import "../css/Login.css";
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
      <Header />
      <form onSubmit={handleSubmit}>
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
  );
};

export default Login;
