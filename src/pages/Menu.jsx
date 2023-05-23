import React from "react";
import MenuContainer from "../components/Main/MenuContainer"
import CartContainer from "../components/Header/CartContainer";
import { useStateValue } from "../components/Context/StateProvider";
import { useEffect } from "react";
import { useState } from "react";


const Shop = () => {
  const[{cartShow}, dispatch] = useStateValue()
  const[scrollValue, setScrollValue] = useState(0)
  useEffect(() =>{},[scrollValue,cartShow])

  return (
    <main id="Main" className="md:tw-px-16 tw-w-full">
      <div className="MainContainer">
      <MenuContainer/>
      {cartShow && <CartContainer/>}
      </div>
    </main>
  );
};

export default Shop;
