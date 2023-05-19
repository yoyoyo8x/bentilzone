import React from "react";
import HomeContainer from "./HomeContainer";
import "./Main.css"

function MainContainer(){
    return(
        <main id="Main" className="md:tw-px-16 tw-w-full">
            <div className="MainContainer">
            <HomeContainer/>
            </div>
        </main>
    )
}
export default MainContainer