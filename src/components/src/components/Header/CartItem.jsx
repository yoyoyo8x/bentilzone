import React from "react";
import "./Header.css";
import { useStateValue } from "../Context/StateProvider";
import { useState } from "react";
import { actionNew } from "../Context/reducer";
import { useEffect } from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import secureLocalStorage from "react-secure-storage";
import PopupDelete from "./Popupdelete";

function CartItem({ item, setFlag, flag }) {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);
  const [items, setItems] = useState([]);
  const [dialog, setDialog] = useState({
    isLoading: false,
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

      secureLocalStorage.setItem("cartItems", JSON.stringify(UpdateCart));
      dispatch({
        type: actionNew.SET_CART_ITEMS,
        cartItems: UpdateCart,
      });
    } else if (action == "remove") {
      let UpdateCart = cartItems
        .map((cartItem) => {
          if (cartItem.id == item.id && cartItem.qty > 1) {
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
          if (cartItem.id == item.id && cartItem.qty <= 1) {
            Swal.fire({
              title: `Do you want to detele this item: ${cartItem.title}?`,
              showDenyButton: true,
              confirmButtonText: "Yes",
              denyButtonText: `No`,
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Deleted!", "", "success");
                console.log(cartItem.qty);
                console.log({ ...cartItem, qty: cartItem.qty - 1 });
                return { ...cartItem, qty: cartItem.qty - 1 };
              }
            });
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.qty !== 0);
      setFlag(flag + 1);

      secureLocalStorage.setItem("cartItems", JSON.stringify(UpdateCart));
      dispatch({
        type: actionNew.SET_CART_ITEMS,
        cartItems: UpdateCart,
      });
    }
  };
  useEffect(() => {
    setItems(cartItems);
  }, [qty]);

  // const cartDispatch = ()=>{
  //     secureLocalStorage.setItem("cartItems", JSON.stringify(items));
  //     dispatch({
  //         type: actionNew.SET_CART_ITEMS,
  //         cartItems: items,
  //     })
  // }

  // const removeCart = () => {
  //     cartItems.map((cartItem)=>{
  //         if (cartItem.id == item.id) {
  //             const remove = cartItems.filter((item1)=>item1.id !== item.id);
  //             const items = remove
  //             setFlag(flag+1)
  //             secureLocalStorage.setItem("cartItems", JSON.stringify(items));
  //             dispatch({
  //                 type:actionNew.SET_CART_ITEMS,
  //                 cartItems:items
  //             })

  //         }})

  //     }
  // // Đoan này hàm +- đang bị bug :(
  // const updateQty = (action,id)=>{
  //     if(action === "add"){
  //         setQty(qty+1)
  //             cartItems.map(item => {
  //                 if(item.id === id){
  //                     item.qty +=1;
  //                     setFlag(flag+1);
  //                 }
  //             })
  //         cartDispatch();
  //     }else{
  //         if(qty <= 1 ){
  //             removeCart()
  //         }
  //             else {
  //         setQty(qty-1)
  //             cartItems.map(item => {
  //                 if(item.id === id){
  //                     item.qty -=1;
  //                     setFlag(flag+1);
  //                 }
  //             })
  //         cartDispatch();
  //     }}
  // }
  // useEffect(()=>{
  //    setItems(cartItems)
  // },[qty,items])

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

      {/* {dialog.isLoading && <PopupDelete />} */}
    </div>
  );
}
export default CartItem;
