import React from "react";
import member from "./../images/member.jpg";
import "../css/About.css";
import Carousel from "../components/About/Carousel";
import CartContainer from "../components/Header/CartContainer";
import { useState } from "react";
import { useStateValue } from "../components/Context/StateProvider";
import { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const [{ cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);

  const achivementDt = [
    {
      title: "Establish from",
      subtitle: "2010",
    },
    {
      title: "Has over",
      subtitle: "12K users",
    },
    {
      title: "Rating",
      subtitle: "4.5/5",
    },
  ];

  const membersDt = [
    {
      id: 1,
      imgUrl: "https://avatars.githubusercontent.com/u/116778505?v=4",
      name: "Phạm Đức Tài",
      position: "Member",
    },
    {
      id: 2,
      imgUrl: "https://avatars.githubusercontent.com/u/109934250?v=4",
      name: "Nguyễn Đức Trung",
      position: "Team Leader",
    },
    {
      id: 3,
      imgUrl: "https://avatars.githubusercontent.com/u/124450882?v=4",
      name: "Lê Hoàng Anh Thư",
      position: "Member",
    },
  ];

  const activeItem = (params) => {
    return params.isActive ? "active-introduction-link" : "introduction-link";
  };

  return (
    <div>
      <div className="MainContainer">{cartShow && <CartContainer />}</div>
      <Carousel />
      <main id="Main" className="about-main-container | md:tw-px-16  tw-w-full">
        <div className="introduction-container">
          <div className="introduction-link-container tw-flex tw-justify-center">
            <ul className="tw-flex tw-justify-around tw-flex-wrap tw-gap-[10px] lg:tw-w-5/12 md:tw-w-7/12 tw-w-9/12 tw-gap-x-3">
              <li>
                <NavLink to="/about/aboutus" className={activeItem}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/about/whychooseus" className={activeItem}>
                  Why Choose Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/about/commitment" className={activeItem}>
                  Commitment
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="introduction-content-container tw-flex tw-justify-center">
            <div className="lg:tw-w-8/12 md:tw-w-9/12 tw-mt-16 tw-drop-shadow-xl">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="achivement-container tw-flex tw-justify-center tw-gap-4 lg:tw-gap-16 tw-mt-16 tw-leading-10 md:tw-flex-row tw-flex-col tw-items-center">
          {achivementDt.map((item) => (
            <div className="achivement-item | tw-flex tw-flex-col tw-items-center tw-justify-center tw-drop-shadow-xl tw-p-10">
              <h3 className="achivement-title | tw-tracking-wider tw-font-medium tw-text-slate-400 xl:tw-text-lg lg:tw-text-base md:tw-text-sm tw-text-xs lg:tw-leading-10 tw-leading-normal tw-text-center">
                {item.title}
              </h3>
              <span className="achivement-subtitle | tw-tracking-wider lg:tw-text-3xl md:tw-text-xl tw-text-xl tw-font-bold tw-text-center">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
        <div className="members-container">
          <h1 className="member-motto | tw-text-3xl tw-text-center tw-text-slate-400 tw-font-medium">
            Passionate people behind your favorite app
          </h1>
          <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-justify-center tw-gap-16 tw-mt-16 tw-grow-0">
            {membersDt.map((item) => (
              <div className="member-item tw-flex tw-flex-col tw-items-center tw-text-center  tw-drop-shadow-xl">
                <img className="members-img" src={item.imgUrl} alt="" />
                <div className="member-info | tw-mt-5 tw-leading-8 tw-px-5">
                  <h2 className="member-name | lg:tw-text-xl md:tw-text-sm tw-font-medium">
                    {item.name}
                  </h2>
                  <span className="member-position | tw-text-slate-400 md:tw-text-xs">
                    {item.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-mt-16">
          <button
            className="about-btn | tw-font-medium hover:tw-drop-shadow-xl"
            onClick={() => navigate("/menu")}
          >
            TRY OUR SERVICE NOW
          </button>
        </div>
      </main>
    </div>
  );
};

export default About;
