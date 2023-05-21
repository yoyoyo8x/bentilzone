import React from "react";
import { motion } from "framer-motion";
import "./Header.css"
import { useStateValue } from "../Context/StateProvider";
import { actionNew } from "../Context/reducer";
import {MdOutlineKeyboardBackspace} from "react-icons/md";
import {RiRefreshFill} from "react-icons/ri";
import EmptyCart from "./emptyCart.svg"

function CartContainer(){
    const [{cartShow,cartItems }, dispatch] = useStateValue();
    const showCart = ()=> {
        dispatch({
            type: actionNew.SET_CART_SHOW,
            cartShow: !cartShow
        });
    }
    // const clearCart = ()=> {
    //     dispatch({
    //         type: actionNew.SET_CART_ITEMS,
    //         cartItems: [],
    //     })
    // }

    return(
        <motion.div
        initial={{opacity: 0, x:200}}
        animate={{opacity: 1, x:0}}
        exit={{opacity: 0, x:200}}
        className="CartDisplay tw-bg-white tw-drop-shadow-md tw-z-[101]">
            <div className="CartHeader">
                    <motion.div whileTap={{scale: 0.75}} onClick={showCart}>
                        <MdOutlineKeyboardBackspace className="tw-text-textColor tw-text-3x1"/>
                    </motion.div>  
                    <p className="tw-text-textColor">Cart</p>
                        
                    <motion.p whileTap={{scale: 0.75}} 
                    className="CartHeaderel tw-bg-gray-100 
                    hover:tw-shadow-md tw-text-textColor"
                    >
                        Clear <RiRefreshFill/>{""}
                    </motion.p>
            </div>
            {/* bottom section */}
            {cartItems && cartItems > 0 ? (
                <div className="cartItemCon tw-bg-cartBg tw-rounded-t-[2rem]">
                    {/* Cart item section */}
                    <div className="cartItemSec md:tw-h-42 tw-overflow-y-scroll tw-scrollbar-none">

                    </div>



                </div>
            ) : (
                <div className="cartIempty">
                <img src={EmptyCart} className="tw-w-300" alt="" />
                <p className="tw-text-textColor">Add some items to your cart</p>
                </div>
            )}


        </motion.div>
    )
}
export default CartContainer