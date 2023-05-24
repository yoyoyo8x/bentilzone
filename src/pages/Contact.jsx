import React from "react";
import "../css/Contact.css";
import Bike from "../images/delivery-bike.png";
import Phone from "../images/phone-img.svg";
import Mail from "../images/mail-img.svg";
import CartContainer from "../components/Header/CartContainer";
import { useEffect, useState } from "react";
import { useStateValue } from "../components/Context/StateProvider";

const Contact = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [emailError, setEmailError] = useState("");
  const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const store = async (e) => {
    e.preventDefault();

    const info = {
      firstName: first,
      lastName: last,
      email: email,
      message: message,
    };

    if (first === "") {
      setFirstError("Please enter your first name");
    } else {
      setFirstError("");
    }

    if (last === "") {
      setLastError("Please enter your last name");
    } else {
      setLastError("");
    }

    if (email === "") {
      setEmailError("Please enter your email");
    }
    if (email !== "" && validEmail.test(email) === false) {
      setEmailError("Invalid email");
    }
    if (email !== "" && validEmail.test(email) === true) {
      setEmailError("");
    }

    if (
      first === "" ||
      last === "" ||
      email === "" ||
      validEmail.test(email) === false
    ) {
      return false;
    }

    localStorage.setItem("userInfo", JSON.stringify(info));
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);
  };

  return (
    <>
      {cartShow && <CartContainer />}
      <div className="contact-container">
        <div className="contact-content">
          <h3 className="contact-title">Contact Us</h3>
          <p>
            We are open to your feedback and your opinion about our services. If
            you have any questions, suggestions or commercial offers, please
            feel free to contact us any suitable way. Every guest can have
            feedback or ask any question – our representatives will reply and
            provide you will all necessary information.
          </p>
          <p>
            We are looking forward hearing from you and seeing you as our
            customer!
          </p>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <img src={Bike} alt="parking" className="contact-img" id="bike" />
            <h3>Fast Delivery</h3>
            <p>
              We always deliver our products on time!
              <br />
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
              We are happy to answer your questions or give you directions via
              phone.
              <br />
              <a href="callto:+1 800 889 9898">+1 800 889 9898 </a>
            </p>
          </div>
          <div className="info-item">
            <img src={Mail} alt="mail" className="contact-img" />
            <h3>Email</h3>
            <p>
              if you are on the go and still want to ask a question, simply drop
              us an e-mail.
              <br />
              <a href="mailto:mail@demolink.org">mail@demolink.org </a>
            </p>
          </div>
        </div>

        <div className="contact-title">Contact Form</div>
        <form className="tw-pb-10 my-form" onSubmit={store}>
          <div className="submit-content">
            <div className="submit-info">
              <input
                type="text"
                placeholder="First Name*"
                onChange={(e) => setFirst(e.target.value)}
              />
              <div className="required">{firstError}</div>
              <input
                type="text"
                placeholder="Last Name*"
                id="second-n"
                onChange={(e) => setLast(e.target.value)}
              />
              <div className="required">{lastError}</div>
              <input
                type="email"
                placeholder="Email Address*"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="required">{emailError}</div>
            </div>
            <div className="submit-box">
              <textarea
                placeholder="Your Message"
                className="submit-message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="button-submit">
            <button className="tw-btn tw-bg-[#2d3034] tw-text-white tw-text-[20px] tw-p-2 tw-uppercase tw-font-medium">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
