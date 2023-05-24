import React from "react";
import CartContainer from "../components/Header/CartContainer";
import { useState } from "react";
import { useStateValue } from "../components/Context/StateProvider";
import { useEffect } from "react";

const About = () => {
  const[{cartShow}, dispatch] = useStateValue()
  const[scrollValue, setScrollValue] = useState(0)
  useEffect(() =>{},[scrollValue,cartShow])
  return (
    <div>
      <main id="Main" className="md:tw-px-16 tw-w-full">
      <div className="MainContainer">
      {cartShow && <CartContainer/>}
      </div>
    </main>
    </div>
  );
};

export default About;
