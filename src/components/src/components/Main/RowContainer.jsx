import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {MdAddShoppingCart} from "react-icons/md"
import NotFound from "./img/NotFound.svg"
import { useStateValue } from "../Context/StateProvider";
import { actionNew } from "../Context/reducer";
import { useState } from "react";
import {fetchCart} from "../Main/utils/fetchLocalStorageData";
import  secureLocalStorage  from  "react-secure-storage";

function RowContainer({flag, data, scrollValue}){
    console.log(data)
    const rowContainer = useRef()
    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue;
        console.log(rowContainer.current.scrollLeft)
    },[scrollValue]);
    
    const cartInfo = fetchCart() 
    const[items, setItems]=useState(cartInfo)

    const [{cartItems}, dispatch] = useStateValue()
    
    
    const addtoCart = (products) => {
        dispatch({
            type: actionNew.SET_CART_ITEMS,
            cartItems: products,
        })
        secureLocalStorage.setItem("cartItems", JSON.stringify(items));
    }

    
    const addItemtoCart = (pro) => {
        const list = [...cartItems]
        const r = list.findIndex(i => i.id == pro.id)
        if(r < 0){
            const neuItem = {...pro, qty:1}
            list.push(neuItem)
            setItems(list)
            addtoCart(list)
        }else{
            list[r].qty = ++list[r].qty
            setItems(list)
            addtoCart(list)
        }
    }
    useEffect(()=>{
        addtoCart(items)
    },[items])



    return(
        <div ref={rowContainer} 
            className={`middleRow ${flag ? 
            'tw-overflow-x-scroll tw-scrollbar-none':
            'tw-overflow-x-hidden tw-flex-wrap tw-justify-center'}`}>
            {data && data.length >0 ? (
                data.map((item)=>(
                    <div key={item.id} className="middleRContainer
                    md:tw-w-[300px] md:tw-min-w-[300px] 
                    tw-w-[275px] tw-h-[175px] tw-bg-cardOverlay tw-rounded-lg  
                    tw-backdrop-blur-lg hover:tw-drop-shadow-lg">
                        <div className="middleRElement">
                            <motion.div
                            whileHover={{scale: 1.2}}
                            className="middleImg 
                            md:tw-w-[160px] md:tw-h-[110px]
                            tw-w-[130px] tw-h-[90px]
                            tw-drop-shadow-2xl"
                            >
                            <img src={item?.image[0].secure_url} alt=""/>      
                            </motion.div>
                            <motion.div
                            whileTap={{scale:0.75}}
                            className="middleAddtoCart -tw-mt-8 hover:tw-shadow-md tw-bg-red-600"
                            onClick={()=>addItemtoCart(item)}
                            >
                            <MdAddShoppingCart className="tw-text-white"/>
                            </motion.div>
                        </div>
                        <div className="middleRElement2">
                            <p className="tittle tw-text-textColor">{item?.title}</p>
                            <p className="calories tw-text-gray-500">{item?.calories} calories</p>
                            <div className="price tw-text-headingColor">
                                <p className="title">
                                    <span className="tw-text-red-500">$</span>
                                    {item?.price}
                                </p>    
                            </div>     
                        </div>
                    </div>
                ))) 
            : <div className="emptyItem">
                <img src={NotFound} alt="notfound" />
                <p className=" tw-text-headingColor ">Items Not Available</p>
            </div> 
            }
        </div>

    )
}
export default RowContainer