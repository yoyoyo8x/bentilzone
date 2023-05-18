import React from "react";
import './Main.css'

function HomeContainer(){
    return(
        <section id="Home" className="tw-grid-cols-1 tw-md:grid-cols-2 tw-bg-orange-500">
            <div className="homeContainer">
                <div className="homeElement tw-bg-orange-100 tw-rounded-full">
                    <p>Bike Delivery</p>
                </div>
            </div>
        </section>
    )
}
export default HomeContainer;