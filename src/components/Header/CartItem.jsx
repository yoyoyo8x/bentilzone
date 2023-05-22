import React from "react";
import "./Header.css"
import { useStateValue } from "../Context/StateProvider";
import { useState } from "react";
import { actionNew } from "../Context/reducer";
import { useEffect } from "react";
import {BiMinus} from "react-icons/bi"
import {BiPlus} from "react-icons/bi"
import { motion } from "framer-motion";

function CartItem({item, setFlag, flag}){
    const [{cartItems}, dispatch] = useStateValue();
    const [qty, setQty] = useState(item.qty)
    const [items, setItems] = useState([])

    const cartDispatch = ()=>{
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionNew.SET_CART_ITEMS,
            cartItems: items,
        })
    }
    console.log(cartItems)

    const removeCart = () => {
        cartItems.map((cartItem)=>{
            if (cartItem.id == item.id) {
                const remove = cartItems.filter((item1)=>item1.id !== item.id);
                const items = remove
                setFlag(flag+1)
                localStorage.setItem("cartItems", JSON.stringify(items));
                dispatch({
                    type:actionNew.SET_CART_ITEMS,
                    cartItems:items
                })

            }})

        }
    const updateQty = (action,id)=>{
        if(action === "add"){
            setQty(qty+1)
                cartItems.map(item => {
                    if(item.id === id){
                        item.qty +=1;
                        setFlag(flag+1);
                    }
                    console.log(cartItems)
                })
            cartDispatch();
        }else{
            if(qty <=1 ){
                removeCart()
            }
                else {
            setQty(qty-1)
                cartItems.map(item => {
                    if(item.id === id){
                        item.qty -=1;
                        setFlag(flag+1);
                    }
                })
            cartDispatch();
        }}
    }

    useEffect(()=>{
        setItems(cartItems)
     },[qty,items])


    return(
        <div className="CartItem tw-bg-cartItem ">
            <img src={item.imageURL} alt="" className="tw-object-contain"/>
            {/* Name */}
            <div className="CartItemEle">
                        <p className="tw-text-base tw-text-gray-50">{item?.title}</p>
                        <p className="tw-text-sm tw-block tw-text-gray-300 tw-font-semibold">
                            $ {parseFloat(item?.price) * qty}</p>
            </div>
            {/* Button */}
            <div className="CartItemEle2 tw-group">
                <motion.div 
                        whileTap={{scale:0.75}}
                        onClick={()=>updateQty("remove", item?.id)}
                        >
                            <BiMinus className="tw-text-gray-50" />
                </motion.div>
                        <p className="tw-bg-cartBg tw-text-gray-50">
                            {item.qty}</p>
                <motion.div 
                        whileTap={{scale:0.75}}
                        onClick={()=>updateQty("add", item?.id)}
                        >
                            <BiPlus className="tw-text-gray-50"/>
                </motion.div>
            </div>

        </div>
    )
}
export default CartItem;