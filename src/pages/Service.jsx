import React from "react";
import { useStateValue } from "../components/Context/StateProvider";
import { useState } from "react";
import { useEffect } from "react";
import CartContainer from "../components/Header/CartContainer";

const Service = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="body">
      <main id="Main" className="md:tw-px-16 tw-w-full">
        <div className="MainContainer">{cartShow && <CartContainer />}</div>
      </main>
    </div>
  );
};

export default Service;
