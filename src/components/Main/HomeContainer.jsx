import React from "react";
import './Main.css'
import Delivery from "./img/delivery.png"
import heroBg from "./img/heroBg.png"
import { heroData } from "./utils/data";


function HomeContainer(){
    return(
        <section id="Home" className="tw-grid-cols-1 md:tw-grid-cols-2">
            <div className="homeContainerL">
                <div className="homeElement tw-bg-orange-100 tw-rounded-full">
                    <p className="homeTitle tw-text-orange-500 ">Bike Delivery</p>
                    <div className="homeLogo tw-rounded-full tw-drop-shadow-xl">
                        <img src={Delivery} alt="Delivery" className=" tw-object-contain" />
                    </div>
                </div>
                <p className="homeElement2 tw-text-[2.5rem] lg:tw-text-[4.5rem] tw-text-headingColor">
                    The Fastest Delivery in <span className="tw-text-[3rem] lg:tw-text-[5rem] tw-text-orange-600">Your City</span> </p>
                <p className="homeElement3 tw-text-textColor md:tw-text-left md:tw-w-[80%]">
                    Food delivery is a courier service in which my restaurants to consumers on demand. These days, orders are executed through mobile apps, websites or via telephone. It is our honor to deliver food to our customers, order now, have a good meal
                </p>
                <button 
                type="button" 
                className="homeElement4 tw-bg-gradient-to-t tw-from-orange-400 tw-to-orange-500 tw-rounded-lg hover:tw-shadow-lg"
                >Order now
                </button>
            </div>  
            <div className="homeContainerR">
                <img src={heroBg} className="homeContainerRbg md:tw-w-full md:tw-h-420" alt="heroBg" />
                <div className="homeElementR">
                    {heroData && heroData.map(n=>(
                        <div key={n.id}
                        className="homeItem tw-bg-cardOverlay tw-backdrop-blur-md tw-drop-shadow-lg tw-rounded-3xl">
                        <img src={n.imageSrc} className='md:tw-w-20 md:tw-mt-10' alt={n.imageSrc} />
                        <p className="homeItemName md:tw-text-base tw-text-textColor md:tw-mt-2">
                            {n.name}</p>
                        <p className="homeItemDes md:tw-text-[12px] tw-text-lighttextGray md:tw-my-1">
                            {n.desp}</p>
                        <p className="homeItemP tw-text-headingColor">
                            <span className="tw-text-sm tw-text-red-600">$</span> {n.price}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
export default HomeContainer;