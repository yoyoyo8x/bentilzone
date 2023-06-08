import React from "react";
import { useStateValue } from "../components/Context/StateProvider";
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/Service/Sidebar";
import Main from "../components/Service/Main";
import CartContainer from "../components/Header/CartContainer";
import ListingService from "../components/Service/ListingService";
import CustomizeFood from "../components/Service/CustomizeFood";
import Schedule from "../components/Service/Schedule";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  const [{ cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="body">
      <main className=" tw-w-full">
        <div className="MainContainer">{cartShow && <CartContainer />}</div>
        <div className="tw-flex tw-gap-x-10">
          <Sidebar />
          <div className="tw-flex tw-flex-col tw-w-full tw-mt-5">
            <ListingService />
            <div className="tw-flex md:tw-justify-center">
              <div className="services-block | tw-flex tw-flex-row tw-justify-between tw-mt-7">
                <CustomizeFood />
                <Schedule />
              </div>
            </div>
            <div className="tw-flex tw-justify-center lg:tw-w-full md:tw-w-full tw-w-[90%]">
              <button
                className="services-try-btn | tw-text-center tw-mt-5"
                onClick={() => navigate("/menu")}
              >
                TRY OUR SERVICE NOW!
              </button>
            </div>
            <div className="tw-flex md:tw-justify-center tw-mt-5">
              <div className="coming-soon-container | tw-flex tw-flex-col tw-flex-between tw-drop-shadow-xl">
                <div className="group-title-container tw-flex tw-items-center tw-justify-between">
                  <span className="tw-block tw-text-slate-400 tw-font-semibold tw-tracking-wider">
                    Coming soon
                  </span>
                  <ul className="group-title tw-flex tw-gap-16 tw-text-xl tw-font-semibold tw-tracking-wider">
                    <li>
                      <NavLink to="/service/grouporder">Group Order</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service/sharebill">Share Bill</NavLink>
                    </li>
                  </ul>
                  <span className="services-line tw-block"></span>
                </div>
                <div className="md:tw-mt-10">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Main />
      </main>
    </div>
  );
};

export default Service;
