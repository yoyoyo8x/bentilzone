import React from "react";
import "../css/Contact.css";
import Bike from "../images/delivery-bike.png";
import Phone from "../images/phone-img.svg";
import Mail from "../images/mail-img.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h3 className="contact-title">Contact Us</h3>
        <p>
        We are open to your feedback and your opinion about our services. If you have any questions, suggestions or commercial offers, please feel free to contact us any suitable way. Every guest can have feedback or ask any question – our representatives will reply and provide you will all necessary information.
        </p>
        <p>
        We are looking forward hearing from you and seeing you as our customer!
        </p>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <img src={Bike} alt="parking" className="contact-img" id="bike"/>
          <h3>Fast Delivery</h3>
          <p>
            We always deliver our products on time!<br/> 
            Order now and be ready for your food!
          </p>
        </div>
        <div className="info-item">
          <img
            src={Phone}
            alt="tele"
            className="contact-img"
            id="telephone"
          />
          <h3>Telephone</h3>
          <p>
          We are happy to answer your questions or give you directions via phone.
            <br />
            <a href="callto:+1 800 889 9898">+1 800 889 9898 </a>
          </p>
        </div>
        <div className="info-item">
          <img src={Mail} alt="mail" className="contact-img" />
          <h3>Email</h3>
          <p>
          if you are on the go and still want to ask a question, simply drop us an e-mail.
            <br />
            <a href="mailto:mail@demolink.org">mail@demolink.org </a>
          </p>
        </div>
      </div>

      <div className="contact-title">Contact Form</div>
      <form className="tw-pb-10 my-form" name="myForm">
        <div className="submit-content">
          <div className="submit-info">
            <input type="text" placeholder="First Name*" id="first-n" />
            <div className="required" id="1st-required">
              Please fill out your first name
            </div>
            <input type="text" placeholder="Last Name*" id="second-n" />
            <div className="required" id="2nd-required">
              Please fill out your second name
            </div>
            <input type="email" placeholder="Email Address*" id="email" />
            <div className="required" id="email-required">
              Please fill out your email address
            </div>
            <div className="required" id="email-invalid">
              Invalid Email Address
            </div>
          </div>
          <div className="submit-box">
            <textarea
              placeholder="Your Message"
              className="submit-message"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="button-submit">
          <button
            className="tw-btn tw-bg-[#2d3034] tw-text-white tw-text-[20px] tw-p-2 tw-uppercase tw-font-medium"
            id="submit-btn"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
