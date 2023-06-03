import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaSignInAlt } from "react-icons/fa";
import Logo from "../../images/Logo.png";
import Avatar from "../Main/img/avatar.png";
import { useState, useEffect } from "react";
import { actionNew } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";
import Dropdown from "../Dropdown/Dropdown";
import { useAuthValue } from "../Context/AuthProvider";
import { TfiAlignLeft } from "react-icons/tfi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser } = useAuthValue();

  const [isOpen, setIsOpen] = useState(false);

  const [sum, setSum] = useState(0);
  const [flag, setFlag] = useState(1);

  // Cartshow
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  const showCart = () => {
    dispatch({
      type: actionNew.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  // Qty in cart
  useEffect(() => {
    let sumQty = cartItems.reduce(function (sum, item) {
      return sum + item.qty;
    }, 0);
    setSum(sumQty);
  }, [sum, flag, cartItems]);

  return (
    <header className="tw-shadow-sm">
      <div className="navbar">
        {/* Navigation logo */}
        <Link to="/" className="header-logo">
          <img src={Logo} alt="" />
          <div className="logo">Bentilzone</div>
        </Link>

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
              <div className="button" onClick={showCart}>
                <HiOutlineShoppingBag />
                {cartItems && sum > 0 && (
                  <div className="cart-number">{sum}</div>
                )}
              </div>
            </li>
          </ul>
        </nav>
        {/* Login */}
        {currentUser ? (
          <div
            className={`group tw-flex tw-items-center tw-gap-3 tw-px-3 tw-py-1 tw-rounded-lg`}
          >
            <div className=" tw-flex tw-items-center tw-justify-center">
              <img
                src={currentUser.photoURL || Avatar}
                className="tw-w-10 tw-min-w-[40px] tw-h-10 tw-min-h-[40px] tw-drop-shadow-2xl tw-rounded-full tw-cursor-pointer "
                alt="profile"
              />
              <Dropdown />
            </div>
          </div>
        ) : (
          <div className="nav-login">
            <NavLink to="/login">
              <button>
                <FaSignInAlt /> Login
              </button>
            </NavLink>
          </div>
        )}
      </div>

      {isOpen ? (
        <div className="mobile-overlay tw-backdrop-blur-md">
          <div className="mobile-nav-overlay">
            <div className="bag-logo">
              <div className="button" onClick={showCart}>
                <HiOutlineShoppingBag />
                {cartItems && sum > 0 && (
                  <div className="cart-number">{sum}</div>
                )}
              </div>
            </div>
            <button
              className="close-overlay"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MdOutlineRestaurantMenu />
            </button>
          </div>
          <div className="mobile-nav-list">
            <ul>
              <li className="nav-item">
                <NavLink onClick={() => setIsOpen(!isOpen)} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={() => setIsOpen(!isOpen)} to="/menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={() => setIsOpen(!isOpen)} to="/service">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={() => setIsOpen(!isOpen)} to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={() => setIsOpen(!isOpen)} to="/contact">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-logo tw-justify-center tw-pt-16">
            <img className="tw-scale-150" src={Logo} alt="" />
            <div className="tw-text-white tw-text-3xl tw-font-medium md:tw-text-5xl">
              Bentilzone
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-nav">
          <button onClick={() => setIsOpen(!isOpen)}>
            <TfiAlignLeft />
          </button>
          {/* Navigation logo */}
          <Link to="/" className="header-logo">
            <img src={Logo} alt="" />
            <div className="logo">Bentilzone</div>
          </Link>
          {/* Login */}
          {currentUser ? (
            <div
              className={`group tw-flex tw-items-center tw-gap-3  tw-py-1 tw-rounded-lg`}
            >
              <div className=" tw-flex tw-items-center tw-justify-center">
                <img
                  src={currentUser.photoURL || Avatar}
                  className="tw-w-10 tw-min-w-[40px] tw-h-10 tw-min-h-[40px] tw-drop-shadow-2xl tw-rounded-full tw-cursor-pointer tw-object-contain"
                  alt="profile"
                />
                <Dropdown />
              </div>
            </div>
          ) : (
            <div className="nav-login">
              <NavLink to="/login">
                <button>
                  <FaSignInAlt />
                  <div className="mobile-login">Login</div>
                </button>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
