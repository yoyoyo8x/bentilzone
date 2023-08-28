import React from "react";
import './Main.css'
import Delivery from "./img/delivery.png"
import heroBg from "./img/heroBg.png"
import { heroData } from "./utils/data";
import { useNavigate } from "react-router";

function HomeContainer(){
    const navigate=useNavigate();

    return(
        <section id="Home" className="tw-bg-primary tw-grid-cols-1 md:tw-grid-cols-2">
            <div className="homeContainerL">
                <div className="homeElement tw-bg-orange-100 tw-rounded-full">
                    <p className="homeTitle tw-text-orange-500 ">Bike Delivery</p>
                    <div className="homeLogo tw-rounded-full tw-drop-shadow-xl">
                        <img src={Delivery} alt="Delivery" className=" tw-object-contain" />
                    </div>
                </div>
                <p className="homeElement2  tw-text-headingColor
                tw-text-[2.5rem] md:tw-text-[3rem] lg:tw-text-[3.5rem] xl:tw-text-[5rem]">
                    The Fastest Delivery in <span className="tw-text-orange-600
                tw-text-[3rem] md:tw-text-[3.5rem] lg:tw-text-[4rem] xl:tw-text-[5rem] ">
                    Your City</span> </p>
                <p className="homeElement3 tw-text-textColor 
                md:tw-text-left md:tw-w-[80%]">
                    Food delivery is a courier service in which my restaurants to consumers on demand. These days, orders are executed through mobile apps, websites or via telephone. It is our honor to deliver food to our customers, order now, have a good meal
                </p>
                <button 
                type="button" 
                className="homeElement4 tw-bg-gradient-to-t tw-from-orange-400 tw-to-orange-500 tw-rounded-lg hover:tw-shadow-lg" onClick={()=>navigate("/menu")}
                >Order now
                </button>
            </div>  
            <div className="homeContainerR tw-mt-12 md:tw-mt-0 ">
                <img src={heroBg} className="homeContainerRbg sm:tw-h-420 md:tw-w-full md:tw-h-420 lg:tw-h-650 tw-h-full " alt="heroBg" />
                <div className="homeElementR 2xl:tw-py-4 2xl:tw-px-32 xl:tw-px-20 xxs:tw-gap-4 md:tw-gap-4 tw-gap-2">
                    {heroData && heroData.map(n=>(
                        <div key={n.id}
                        className="homeItem tw-bg-cardOverlay tw-backdrop-blur-md tw-drop-shadow-lg 
                        2xl:tw-w-[190px] 2xl:tw-h-[210px] 
                        xl:tw-w-[185px] xl:tw-h-[210px]
                        lg:tw-w-[160px] lg:tw-h-[190px] 
                        md:tw-w-[145px] md:tw-h-[180px]
                        sm:tw-w-[150px] sm:tw-h-[180px]
                        tw-w-[130px] tw-h-[150px]
                        md:tw-my-0 tw-my-6
                        
                        ">
                    
                        <img src={n.imageSrc} className='md:tw-w-32 tw-w-24' alt={n.imageSrc} />
                        <p className="homeItemName md:tw-text-sm tw-text-textColor 
                        md:tw-mt-2 
                        2xl:tw-text-xl 
                        xl:tw-text-lg 
                        lg:tw-text-xs
                        tw-text-[12px]
                        ">
                            {n.name}</p>
                        <p className="homeItemDes tw-text-lighttextGray md:tw-my-1 tw-text-xs tw-text-center  md:tw-text-[13px] md:tw-text-center lg:tw-text-xs xl:tw-text-sm">
                            {n.desp}</p>
                        <p className="homeItemP tw-text-headingColor tw-text-xs lg:tw-text-sm">
                            <span className="tw-text-xs lg:tw-text-sm tw-text-red-600">$</span> {n.price}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
export default HomeContainer;