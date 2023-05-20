import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {MdAddShoppingCart} from "react-icons/md"
import NotFound from "./img/NotFound.svg"

function RowContainer({flag,data,scrollValue}){
    const rowContainer = useRef()
    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue;
    },[scrollValue]);

    return(
        <div ref={rowContainer} 
            className={`middleRow ${flag ? 
            'tw-overflow-x-scroll tw-scrollbar-none':
            'tw-overflow-x-hidden tw-flex-wrap tw-justify-center'}`}>
            {data && data.length >0 ? (
                data.map((item)=>(
                    <div key={item.id} className="middleRContainer
                    md:tw-w-300 md:tw-min-w-[300px]  tw-bg-cardOverlay tw-rounded-lg  
                    tw-backdrop-blur-lg hover:tw-drop-shadow-lg">
                        <div className="middleRElement">
                            <motion.div
                            whileHover={{scale: 1.2}}
                            className="middleImg tw-drop-shadow-2xl"
                            >
                            <img src={item?.imageURL} alt=""/>      
                            </motion.div>
                            <motion.div
                            whileTap={{scale:0.75}}
                            className="middleAddtoCart -tw-mt-8 hover:tw-shadow-md tw-bg-red-600"
                            >
                            <MdAddShoppingCart className="tw-text-white"/>
                            </motion.div>
                        </div>
                        <div className="middleRElement2">
                            <p className="tittle tw-text-textColor">{item?.title}</p>
                            <p className="calories tw-text-gray-500">{item?.calories}</p>
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