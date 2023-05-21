import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaSignInAlt } from "react-icons/fa";
import Logo from "../../images/Logo.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { actionNew } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider"



const Header = () => {
  const auth = getAuth();
  const [users, setUsers] = useState(null);
  console.log(users);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
        console.log(users);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);


  const [{cartShow},dispatch] = useStateValue()
  const showCartcontainer = ()=>{
    dispatch({
      type: actionNew.SET_CART_SHOW,
      cartShow : !cartShow
    })
  }
  

  return (
    <header className="tw-shadow-sm">
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
              <button type="button" onClick={showCartcontainer}>
                <HiOutlineShoppingBag />
                <div className="cart-number">3</div>
              </button>
            </li>
          </ul>
        </nav>
        {/* Login */}
        {users ? (
          <div className={`group flex items-center gap-3 px-3 py-1 rounded-lg`}>
            <div className=" flex items-center justify-center">
              <img
                src={users.photoURL}
                className="tw-w-10 tw-min-w-[40px] tw-h-10 tw-min-h-[40px] tw-drop-shadow-2xl tw-rounded-full tw-cursor-pointer tw-object-contain"
                alt="profile"
              />
              <p className="text-headingColor cursor-pointer flex items-center justify-center gap-2"></p>
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
    </header>
  );
};

export default Header;
