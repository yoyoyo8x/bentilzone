import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillRedditCircle } from "react-icons/ai";
import Logo from "../../images/Logo.png";

const Footer = () => {
  return (
    <footer className=" tw-bg-primary tw-shadow-sm">
      {/* Footer logo */}
      <div className="footer-contact">
        <div className="footer-logo">
          <div className="footer-logo-container">
            <img src={Logo} alt="" />
            <div className="banner">Bentilzone</div>
          </div>
        </div>
        <div className="address">
          <div className="footer-title">Address</div>
          <p>
            Quince Saigon, 37bis Ky Con Street, <br /> 
            Nguyen Thai Binh Ward,<br />
            District 1, Ho Chi Minh City
          </p>
        </div>
        <div className="contactUs">
          <div className="footer-title">Contact Us</div>
          <a href="callto:+1 800 889 9898">+1 800 889 9898 </a>
          <a href="mailto:mail@demolink.org">mail@demolink.org </a>
        </div>
      </div>

      {/* Footer list */}
      <div className="footer-container">
        <div className="copyright">
          © 2022 Bentilzone™. All Rights Reserved.
        </div>
        <ul>
          <li className="footer-item">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.reddit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillRedditCircle />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
