import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      {/* Navigation logo */}
      <div className="header-logo">
        <img src="./images/Logo.png" alt="" />
        <div className="logo">Bentilzone</div>
      </div>

      {/* Navigation list */}
      <nav>
        <ul>
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/service">Service</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li className="nav-item bag-logo">
            <NavLink to="/cart">
              {" "}
              <HiOutlineShoppingBag />{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-login">
        <NavLink to="/login">
          <button>
            <FaSignInAlt /> Log in
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
