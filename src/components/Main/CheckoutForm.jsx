import React from "react";
import { useState } from "react";
import Success from "../../images/icons8-order-completed-48.png";
import "../../css/Contact.css";
import { CityList } from "./utils/data";
import PaybyCard from "./PaybyCard";
import PaybyQR from "./PaybyQR";
import PayinCash from "./PayinCash";

function CheckoutForm() {
  const [isPopup, setIsPopup] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cityError, setCityError] = useState("");
  const [methodError, setMethodError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cardHolderError, setCardHolderError] = useState("");
  const [cardNumberError, setcardNumberError] = useState("");
  const [cardTypeError, setcardTypeError] = useState("");
  const [expiryError, setexpiryError] = useState("");
  const [cvvError, setcvvError] = useState("");

  const validPhone =
    /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    method: "",
    address: "",
    cardHolder: "",
    cardNumber: "",
    cardType: "",
    expiryCard: "",
    CVV: "",
  });

  const pay = async (e) => {
    e.preventDefault();

    setIsPopup(!isPopup);

    // cardHolder
    if (info.cardHolder === "") {
      setCardHolderError("Please enter your CardHolder Name");
      setIsPopup(false);
    } else {
      setCardHolderError("");
      setIsPopup(true);
    }

    // CardNumber
    if (info.cardNumber === "") {
      setcardNumberError("Please enter your Card Number");
      setIsPopup(false);
    }

    if (info.cardNumber !== "" && validPhone.test(info.cardNumber) === false) {
      setcardNumberError("Invalid Card Number");
      setIsPopup(false);
    }
    if (info.cardNumber !== "" && validPhone.test(info.cardNumber) === true) {
      setcardNumberError("");
      setIsPopup(true);
    }

    // cardType
    if (info.cardType === "") {
      setcardTypeError("Please choose your Card Type");
      setIsPopup(false);
    } else {
      setcardTypeError("");
      setIsPopup(true);
    }

    // expiryCard
    if (info.expiryCard === "") {
      setexpiryError("Please set your expiryCard");
      setIsPopup(false);
    } else {
      setexpiryError("");
      setIsPopup(true);
    }

    // CVV
    if (info.CVV === "") {
      setcvvError("Please enter your CVV");
      setIsPopup(false);
    } else {
      setcvvError("");
      setIsPopup(true);
    }

    //firstName

    if (info.firstName === "") {
      setFirstError("Please enter your first name");
      setIsPopup(false);
    } else {
      setFirstError("");
      setIsPopup(true);
    }

    //lastName

    if (info.lastName === "") {
      setLastError("Please enter your last name");
      setIsPopup(false);
    } else {
      setLastError("");
      setIsPopup(true);
    }

    // phone number
    if (info.phoneNumber === "") {
      setPhoneError("Please enter your phone number");
      setIsPopup(false);
    }
    if (
      info.phoneNumber !== "" &&
      validPhone.test(info.phoneNumber) === false
    ) {
      setPhoneError("Invalid phone number");
      setIsPopup(false);
    }
    if (info.phoneNumber !== "" && validPhone.test(info.phoneNumber) === true) {
      setPhoneError("");
      setIsPopup(true);
    }

    // city

    if (info.city === "") {
      setCityError("Please choose your city");
      setIsPopup(false);
    } else {
      setCityError("");
      setIsPopup(true);
    }

    // method
    if (info.method === "") {
      setMethodError("Please choose your payment method");
      setIsPopup(false);
    } else {
      setMethodError("");
      setIsPopup(true);
    }

    // address
    if (info.address === "") {
      setAddressError("Please enter your address");
      setIsPopup(false);
    } else {
      setAddressError("");
      setIsPopup(true);
    }

    if (
      info.firstName === "" ||
      info.lastName === "" ||
      info.phoneNumber === "" ||
      validPhone.test(info.phoneNumber) === false ||
      info.city === "" ||
      info.method === "" ||
      info.address === "" ||
      info.cardHolder === "" ||
      info.cardNumber === "" ||
      info.cardType === "" ||
      info.expiryCard === "" ||
      info.CVV === ""
    ) {
      return false;
    }

    localStorage.setItem("userCheckout", JSON.stringify(info));
    const userInfo = localStorage.getItem("userCheckout");

    const dataInfo = JSON.parse(localStorage.getItem("userCheckout"));
    const firstN = dataInfo.firstName;
    const lastN = dataInfo.lastName;
    const phoneN = dataInfo.phoneNumber;

    setFirst(firstN);
    setLast(lastN);
    setPhone(phoneN);
    setInfo({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      method: "",
      address: "",
      cardHolder: "",
      cardNumber: "",
      cardType: "",
      expiryCard: "",
      CVV: "",
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
              <div className="success">Succeed!</div>
              <p>
                Thank you for your choice, {first} {last}.
                <br />
                We will delivery your order right away.
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
        <form className="tw-pb-10 my-form" onSubmit={pay}>
          <div className="tw-font-bold tw-text-[30px] tw-text-orange-500 tw-text-center tw-rounded-[2rem] tw-bg-cartBg tw-w-[95%] tw-m-auto tw-mb-5">
            Your Bill
          </div>
          <div className="submit-content tw-w-[800px] tw-flex-col">
            <div className="submit-info">
              {/* ----------- */}
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="First Name*"
                onChange={(e) =>
                  setInfo({ ...info, firstName: e.target.value })
                }
              />
              <div className="required">{firstError}</div>
              {/* ----------- */}

              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Last Name*"
                id="second-n"
                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
              />
              <div className="required">{lastError}</div>
              {/* ----------- */}

              <input
                style={{ width: "100%" }}
                type="number"
                placeholder="Phone Number*"
                id="third-n"
                onChange={(e) =>
                  setInfo({ ...info, phoneNumber: e.target.value })
                }
              />
              <div className="required">{phoneError}</div>
              {/* ----------- */}

              <select
                style={{ width: "100%" }}
                name="city"
                id="city"
                className="empty"
                onChange={(e) => setInfo({ ...info, city: e.target.value })}
              >
                <option value="" disabled selected>
                  Choose Your City*
                </option>
                {CityList &&
                  CityList.map((c) => <option value={c.city}>{c.city}</option>)}
              </select>

              <div className="required">{cityError}</div>

              {/* ----------- */}

              <select
                style={{ width: "100%" }}
                name="method"
                id="method"
                onChange={(e) => setInfo({ ...info, method: e.target.value })}
              >
                <option value="" disabled selected>
                  Pay Method*
                </option>
                <option value="Payincash">Pay In Cash</option>
                <option value="Paybycard">Pay By Card</option>
                <option value="PaybyQR">Pay By QR</option>
              </select>
              <div className="required">{methodError}</div>
              {info.method === "Payincash" && <PayinCash />}
              {info.method === "Paybycard" && (
                <PaybyCard
                  info={info}
                  setInfo={setInfo}
                  pay={pay}
                  cardHolderError={cardHolderError}
                  cardNumberError={cardNumberError}
                  cardTypeError={cardTypeError}
                  expiryError={expiryError}
                  cvvError={cvvError}
                />
              )}

              {info.method === "PaybyQR" && <PaybyQR />}
            </div>

            {/* ----------- */}

            <div className="submit-box">
              <textarea
                style={{ width: "100%" }}
                placeholder="Address details"
                className="submit-message"
                onChange={(e) => setInfo({ ...info, address: e.target.value })}
              ></textarea>
              <div className="required">{addressError}</div>
            </div>
            <div className="button-submit">
              <button className="tw-btn tw-bg-cartBg tw-text-orange-500 tw-text-[20px] tw-p-2 tw-uppercase tw-font-medium tw-w-[30%]">
                Pay
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
export default CheckoutForm;
