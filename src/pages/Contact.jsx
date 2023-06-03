import React from "react";
import "../css/Contact.css";
import Bike from "../images/delivery-bike.png";
import Phone from "../images/phone-img.svg";
import Mail from "../images/mail-img.svg";
import Success from "../images/icons8-order-completed-48.png";
import CartContainer from "../components/Header/CartContainer";
import { useEffect, useState } from "react";
import { useStateValue } from "../components/Context/StateProvider";

const Contact = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);

  const [isPopup, setIsPopup] = useState(false);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [emailError, setEmailError] = useState("");
  const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const store = async (e) => {
    e.preventDefault();

    setIsPopup(!isPopup);

    if (info.firstName === "") {
      setFirstError("Please enter your first name");
      setIsPopup(false);
    } else {
      setFirstError("");
      setIsPopup(true);
    }

    if (info.lastName === "") {
      setLastError("Please enter your last name");
      setIsPopup(false);
    } else {
      setLastError("");
      setIsPopup(true);
    }

    if (info.email === "") {
      setEmailError("Please enter your email");
      setIsPopup(false);
    }
    if (info.email !== "" && validEmail.test(info.email) === false) {
      setEmailError("Invalid email");
      setIsPopup(false);
    }
    if (info.email !== "" && validEmail.test(info.email) === true) {
      setEmailError("");
      setIsPopup(true);
    }

    if (
      info.firstName === "" ||
      info.lastName === "" ||
      info.email === "" ||
      validEmail.test(info.email) === false
    ) {
      return false;
    }

    localStorage.setItem("userInfo", JSON.stringify(info));
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);

    const dataInfo = JSON.parse(localStorage.getItem("userInfo"));
    const firstN = dataInfo.firstName;
    const lastN = dataInfo.lastName;
    setFirst(firstN);
    setLast(lastN);
    setInfo({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {isPopup ? (
        <div className="popup-overlay tw-backdrop-blur-md">
          <div className="popup-container">
            <div className="success-icon">
              <img src={Success} alt="" />
            </div>
            <div className="popup-content">
              <div className="success">Awesome!</div>
              <p>
                Thank you for your feedback, {first} {last}.
                <br />
                We have recived your contact successful.
              </p>
            </div>
            <button
              className="tw-btn tw-bg-[#64a1f1] tw-text-white tw-text-[22px] tw-px-7 tw-py-2 tw-uppercase tw-font-medium tw-rounded-lg tw-shadow-lg"
              onClick={() => setIsPopup(!isPopup)}
            >
              Ok
            </button>
          </div>
        </div>
      ) : (
        <div className="body">
          {cartShow && <CartContainer />}
          <div className="contact-container">
            <div className="contact-content">
              <h3 className="contact-title">Contact Us</h3>
              <p>
                We are open to your feedback and your opinion about our
                services. If you have any questions, suggestions or commercial
                offers, please feel free to contact us any suitable way. Every
                guest can have feedback or ask any question – our
                representatives will reply and provide you will all necessary
                information.
              </p>
              <p>
                We are looking forward hearing from you and seeing you as our
                customer!
              </p>
            </div>
            <div className="contact-info">
              <div className="info-item">
                <img
                  src={Bike}
                  alt="parking"
                  className="contact-img"
                  id="bike"
                />
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
                  We are happy to answer your questions or give you directions
                  via phone.
                  <br />
                  <a href="callto:+1 800 889 9898">+1 800 889 9898 </a>
                </p>
              </div>
              <div className="info-item">
                <img src={Mail} alt="mail" className="contact-img" />
                <h3>Email</h3>
                <p>
                  if you are on the go and still want to ask a question, simply
                  drop us an e-mail.
                  <br />
                  <a href="mailto:mail@demolink.org">mail@demolink.org </a>
                </p>
              </div>
            </div>
          </div>
          <div id="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.588035353429!2d106.69702801458897!3d10.76619899232849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f15485e6187%3A0xd0c74ec498b1209!2sQuince%20Saigon!5e0!3m2!1sen!2s!4v1670342110107!5m2!1sen!2s"
              title="GoogleMap"
              width="100%"
              height="400px"
              style={{ border: 0, marginBottom: "30px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <div className="contact-title">Contact Form</div>
            <form className="tw-pb-10 my-form" onSubmit={store}>
              <div className="submit-content contact-form">
                <div className="submit-info">
                  <input
                    type="text"
                    placeholder="First Name*"
                    onChange={(e) =>
                      setInfo({ ...info, firstName: e.target.value })
                    }
                  />
                  <div className="required">{firstError}</div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    id="second-n"
                    onChange={(e) =>
                      setInfo({ ...info, lastName: e.target.value })
                    }
                  />
                  <div className="required">{lastError}</div>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
                  />
                  <div className="required">{emailError}</div>
                </div>
                <div className="submit-box">
                  <textarea
                    placeholder="Your Message"
                    className="submit-message"
                    onChange={(e) =>
                      setInfo({ ...info, message: e.target.value })
                    }
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
        </div>
      )}
    </>
  );
};

export default Contact;
