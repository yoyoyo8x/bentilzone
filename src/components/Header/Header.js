import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaSignInAlt } from "react-icons/fa";
import Logo from "../../images/Logo.png";

const Header = () => {
  return (
    <header className="tw-bg-lightGray tw-shadow-sm">
      <div className="navbar">
        {/* Navigation logo */}
        <div className="header-logo">
          <img src={Logo} alt="" />
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
              <button>
                <HiOutlineShoppingBag />
                <div className="cart-number">3</div>
              </button>
            </li>
          </ul>
        </nav>
        {/* Login */}
          <div className="nav-login">
          <NavLink to="/login">
            <button>
              <FaSignInAlt /> Login
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;