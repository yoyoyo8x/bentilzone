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
        <div className="introduction-link-container">
          <ul>
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
        <div className="introduction-content-container">
          <Outlet />
        </div>
      </div>
      <div className="achivement-container">
        {achivementDt.map((item) => (
          <div className="achivement-item">
            <h3 className="achivement-title">{item.title}</h3>
            <span className="achievement-subtitle">{item.subtitle}</span>
          </div>
        ))}
      </div>
      <div className="members-container">
        <h1>Passionate people behind your favorrite app</h1>
        {membersDt.map((item) => (
          <div className="member-item">
            <img src={item.imgUrl} alt="" />
            <div className="member-info">
              <h2 className="member-name">{item.name}</h2>
              <span className="member-position">{item.position}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
