import React from "react";
import "./Main.css";
import { motion } from "framer-motion";
import { Categories } from "./utils/data";
import { useState } from "react";
import RowContainer from "./RowContainer";
import { menuList } from "./utils/data";
import {IoFastFood} from "react-icons/io5";



function MenuContainer ({flag}){
    const[filter,setFilter] = useState("chicken");

    return(
        <section className="Middle">
            <div className="middleContainer tw-flex-col">
                    <p className="middleTitle tw-text-headingColor 
                    before:tw-absolute before:tw-rounded-lg before:tw-w-16 before:tw-h-1 before:-tw-bottom-2 before:tw-left-0 
                    before:tw-bg-gradient-to-tr tw-from-orange-400 tw-to-orange-600">
                        Our Hot Dishes</p>
                    <div className={`middleCat ${flag ? 
                        'tw-overflow-x-scroll tw-scrollbar-none':
                        'tw-overflow-x-hidden tw-flex-wrap tw-justify-center'} xl:tw-justify-center lg:tw-justify-start`}>
                        {Categories && Categories.map(category=>(
                            <motion.div whileTap={{scale:0.75}}
                            key={category.id}
                            className={`tw-group cateFilter
                            ${filter === category.urlParamName ? ' tw-bg-cartNumBg':' tw-bg-card'} tw-drop-shadow-xl hover:tw-bg-cartNumBg`}
                            onClick={()=>setFilter(category.urlParamName)}
                            >
                            <div className={`cateIcon tw-shadow-lg
                            ${filter === category.urlParamName? 'tw-bg-white':'tw-bg-cartNumBg'} group-hover:tw-bg-white`}>
                                <IoFastFood className={`${filter === category.urlParamName? 'tw-text-textColor':'tw-text-white'} tw-text-lg group-hover:tw-text-textColor`}/>
                            </div>
                            <p className={`tw-text-sm 
                            ${filter === category.urlParamName? 'tw-text-white':'tw-text-textColor'}                       
                            group-hover:tw-text-white`}>
                            {category.name}
                            </p>
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