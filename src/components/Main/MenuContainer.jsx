import React from "react";
import "./Main.css";
import { motion } from "framer-motion";
import { Categories } from "./utils/data";
import { useState } from "react";
import RowContainer from "./RowContainer";
import { menuList } from "./utils/data";



function MenuContainer (){
    const[filter,setFilter] = useState("chicken");

    return(
        <section className="Middle">
            <div className="middleContainer tw-flex-col">
                    <p className="middleTitle tw-text-headingColor 
                    before:tw-absolute before:tw-rounded-lg before:tw-w-16 before:tw-h-1 before:-tw-bottom-2 before:tw-left-0 
                    before:tw-bg-gradient-to-tr tw-from-orange-400 tw-to-orange-600">
                        Our Hot Dishes</p>
                    <div className="middleCat tw-scrollbar-none">
                        {Categories && Categories.map(category=>(
                           <motion.div whileTap={{scale:0.75}}
                           key={category.id}
                           className={`categoryFilter
                           ${filter === category ? ' tw-bg-cartNumBg':' tw-bg-card'} tw-drop-shadow-xl hover:tw-bg-cartNumBg`}
                           >
                            
                           </motion.div>
                        ))}
                    </div>
                    <div className=" tw-w-full">
                        <RowContainer
                        flag={false} 
                        data ={menuList?.filter(n=>n.category==filter)}/>
                    </div>
            </div>
        </section>
    )
}
export default MenuContainer