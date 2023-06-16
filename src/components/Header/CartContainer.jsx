import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { useStateValue } from "../Context/StateProvider";
import { actionNew } from "../Context/reducer";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import EmptyCart from "./emptyCart.svg";
import CartItem from "./CartItem";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";

function CartContainer() {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  const [tot, setTot] = useState(0);
  const [flag, setFlag] = useState(1);
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const showCart = () => {
    dispatch({
      type: actionNew.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (sum, item) {
      return sum + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag, cartItems]);
  console.log(cartItems);

  const clearCart = () => {
    secureLocalStorage.setItem("cartItems", JSON.stringify([]));
    dispatch({
      type: actionNew.SET_CART_ITEMS,
      cartItems: [],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="CartDisplay tw-bg-white tw-drop-shadow-md tw-z-[101]"
    >
      <div className="CartHeader">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="tw-text-textColor tw-text-3x1" />
        </motion.div>
        <p className="tw-text-textColor">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="CartHeaderel tw-bg-gray-100 
                    hover:tw-shadow-md tw-text-textColor"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
          {""}
        </motion.p>
      </div>
      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="cartItemCon tw-bg-cartBg tw-rounded-t-[2rem]">
          {/* Cart item section */}
          <div className="cartItemSec md:tw-h-42 tw-overflow-y-scroll tw-scrollbar-none">
            {cartItems &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                  showCart={showCart}
                />
              ))}
          </div>
          {/* Cart total section */}

          <div className="CartTot tw-bg-cartTotal tw-rounded-[2rem]">
            <div className="CartTotEle">
              <p className="tw-text-gray-400">Sub Total</p>
              <p className="tw-text-gray-400">${tot}</p>
            </div>
            <div className="CartTotEle">
              <p className="tw-text-gray-400">Delivery</p>
              <p className="tw-text-gray-400">$2.5</p>
            </div>
            <div className="CartTotEle">
              <p className="tw-text-gray-400">Total</p>
              <p className="tw-text-gray-400">${tot + 2.5}</p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="tw-w-full tw-p-2 tw-rounded-full tw-bg-gradient-to-tr tw-from-orange-400 tw-to-orange-600 tw-text-gray-50 tw-text-lg tw-my-2 tw-hover:shadow-lg"
                onClick={() => navigate("/checkout")}
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="tw-w-full tw-p-2 tw-rounded-full tw-bg-gradient-to-tr tw-from-orange-400 tw-to-orange-600 tw-text-gray-50 tw-text-lg my-2 tw-hover:shadow-lg"
                onClick={() => navigate("/login")}
              >
                Login to Check Out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="cartIempty tw-h-full">
          <img src={EmptyCart} className="tw-w-300" alt="" />
          <p className="tw-text-textColor">Add some items to your cart</p>
        </div>
      )}
    </motion.div>
  );
}
export default CartContainer;
