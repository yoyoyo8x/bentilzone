import React from "react";
import "./Header.css";
import { useStateValue } from "../Context/StateProvider";
import { useState } from "react";
import { actionNew } from "../Context/reducer";
import { useEffect } from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import PopupDelete from "./Popupdelete";

function CartItem({ item, setFlag, flag }) {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);
  const [items, setItems] = useState([]);
  const [dialog,setDialog] = useState({
    isLoading: false
  });

  const UppdateItem = (action) => {
    if (action == "add") {
      let UpdateCart = cartItems.map((cartItem) => {
        if (cartItem.id == item.id) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      setFlag(flag + 1);

      localStorage.setItem("cartItems", JSON.stringify(UpdateCart));
      dispatch({
        type: actionNew.SET_CART_ITEMS,
        cartItems: UpdateCart,
      });

    } else if (action == "remove") {
      let UpdateCart = cartItems
        .map((cartItem) => {
          if (cartItem.id == item.id) {
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
          if (cartItem.qty <= 1) {  
            setDialog({
              isLoading: true
            })
          }
          return cartItem;
        })
        // .filter((cartItem) => cartItem.qty !== 0);
        setFlag(flag + 1);

        localStorage.setItem("cartItems", JSON.stringify(UpdateCart));
        dispatch({
          type: actionNew.SET_CART_ITEMS,
          cartItems: UpdateCart,
        });
        
    }
  };
  useEffect(() => {
    setItems(cartItems);
  }, [qty]);

  return (
    <div className="CartItem tw-bg-cartItem ">
      <img src={item.imageURL} alt="" className="tw-object-contain" />
      {/* Name */}
      <div className="CartItemEle">
        <p className="tw-text-base tw-text-gray-50">{item?.title}</p>
        <p className="tw-text-sm tw-block tw-text-gray-300 tw-font-semibold">
          $ {item?.price * item.qty}
        </p>
      </div>
      {/* Button */}
      <div className="CartItemEle2 tw-group">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => UppdateItem("remove", item?.id)}
        >
          <BiMinus className="tw-text-gray-50" />
        </motion.div>
        <p className="tw-bg-cartBg tw-text-gray-50">{item.qty}</p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => UppdateItem("add", item?.id)}
        >
          <BiPlus className="tw-text-gray-50" />
        </motion.div>
      </div>

      {dialog.isLoading &&  <PopupDelete/>}

    </div>
  );
}
export default CartItem;
