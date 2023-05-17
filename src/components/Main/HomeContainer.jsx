import React from "react";
import './Main.css'

function HomeContainer(){
    return(
        <section id="Home" className="grid-cols-1 md:grid-cols-2 bg-orange-500">
            <div className="homeContainer">
                <div className="homeElement bg-orange-100 rounded-full">
                    <p>Bike Delivery</p>
                </div>
            </div>
        </section>
    )
}
export default HomeContainer