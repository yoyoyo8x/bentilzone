import React from "react";
import "../css/About.css";
import CartContainer from "../components/Header/CartContainer";
import { useState } from "react";
import { useStateValue } from "../components/Context/StateProvider";
import { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

const About = () => {
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
      subtitle: "12,000 users",
    },
    {
      title: "Rating",
      subtitle: "4.5/5",
    },
  ];

  const membersDt = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/id/79/300/250",
      name: "Phạm Đức Tài",
      position: "Member",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/id/79/300/250",
      name: "Nguyễn Đức Trung",
      position: "Team Leader",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/id/79/300/250",
      name: "Lê Hoàng Anh Thư",
      position: "Member",
    },
  ];

  const activeItem = (params) => {
    return params.isActive ? "active-introduction-link" : "introduction-link";
  };

  return (
    <main id="Main" className="about-main-container | md:tw-px-16  tw-w-full">
      <div className="introduction-container">
        <div className="introduction-link-container tw-flex tw-justify-center">
          <ul className="tw-flex tw-justify-around tw-w-5/12 gap-x-3">
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
          <div className="tw-w-7/12 tw-mt-16 tw-drop-shadow-xl">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="achivement-container tw-flex tw-justify-center tw-gap-x-16 tw-mt-16 tw-leading-10">
        {achivementDt.map((item) => (
          <div className="achivement-item | tw-flex tw-flex-col tw-items-center tw-drop-shadow-xl">
            <h3 className="achivement-title | tw-tracking-wider tw-font-medium tw-text-slate-400 tw-text-lg tw-leading-10">
              {item.title}
            </h3>
            <span className="achivement-subtitle | tw-tracking-wider sm:tw-text-3xl tw-text-xl tw-font-bold tw-text-center">
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>
      <div className="members-container">
        <h1 className="tw-text-3xl tw-text-center tw-text-slate-400 tw-font-medium">
          Passionate people behind your favorite app
        </h1>
        <div className="tw-flex tw-justify-center tw-gap-x-16 tw-mt-16">
          {membersDt.map((item) => (
            <div className="member-item tw-flex tw-flex-col tw-items-center tw-text-center  tw-drop-shadow-xl">
              <img src={item.imgUrl} alt="" />
              <div className="member-info | tw-mt-5">
                <h2 className="member-name | tw-text-xl">{item.name}</h2>
                <span className="member-position">{item.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tw-flex tw-justify-center tw-mt-16">
        <button>TRY OUR SERVICE NOW</button>
      </div>
    </main>
  );
};

export default About;
