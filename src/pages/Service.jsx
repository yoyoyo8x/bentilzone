import React from "react";
import { useStateValue } from "../components/Context/StateProvider";
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/Service/Sidebar";
import Main from "../components/Service/Main";
import CartContainer from "../components/Header/CartContainer";

const Service = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="body">
      <main className="tw-w-full tw-flex">
        <Sidebar />
        <Main />
      </main>
    </div>
  );
};

export default Service;
