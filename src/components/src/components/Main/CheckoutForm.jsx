import React from "react";
import { useState } from "react";
import Success from "../../images/icons8-order-completed-48.png";
import "../../css/Contact.css";
import { CityList } from "./utils/data";
import PaybyCard from "./PaybyCard";
import PaybyQR from "./PaybyQR";
import PayinCash from "./PayinCash";
import secureLocalStorage from "react-secure-storage";

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
  });

  const [cardInfo, setCardInfo] = useState({
    cardHolder: "",
    cardNumber: "",
    cardType: "",
    expiryCard: "",
    CVV: "",
  });

  console.log(info);
  console.log(cardInfo);

  const pay = async (e) => {
    e.preventDefault();

    setIsPopup(!isPopup);

    // cardHolder
    if (cardInfo.cardHolder === "") {
      setCardHolderError("Please enter your CardHolder Name");
      setIsPopup(false);
    } else {
      setCardHolderError("");
      setIsPopup(true);
    }

    // CardNumber
    if (cardInfo.cardNumber === "") {
      setcardNumberError("Please enter your Card Number");
      setIsPopup(false);
    } else {
      setcardNumberError("");
      setIsPopup(true);
    }

    // cardType
    if (cardInfo.cardType === "") {
      setcardTypeError("Please choose your Card Type");
      setIsPopup(false);
    } else {
      setcardTypeError("");
      setIsPopup(true);
    }

    // expiryCard
    if (cardInfo.expiryCard === "") {
      setexpiryError("Please enter your Card Expiration Date");
      setIsPopup(false);
    } else {
      setexpiryError("");
      setIsPopup(true);
    }

    // CVV
    if (cardInfo.CVV === "") {
      setcvvError("Please enter your Card CVV");
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
      (info.method === "Paybycard" && cardInfo.cardHolder === "") ||
      (info.method === "Paybycard" && cardInfo.cardNumber === "") ||
      (info.method === "Paybycard" && cardInfo.cardType === "") ||
      (info.method === "Paybycard" && cardInfo.expiryCard === "") ||
      (info.method === "Paybycard" && cardInfo.CVV === "")
    ) {
      return false;
    }

    localStorage.setItem("userCheckout", JSON.stringify(info));
    secureLocalStorage.setItem("userCard", JSON.stringify(cardInfo));

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
    });
    setCardInfo({
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
        <form className="tw-pb-10 my-form tw-w-full" onSubmit={pay}>
          <div className="tw-font-bold tw-text-[30px] tw-text-orange-500 tw-text-center tw-rounded-[2rem] tw-bg-cartBg tw-w-[95%] tw-m-auto tw-mb-5">
            Your Bill
          </div>
          <div className="submit-content xl:tw-w-[800px] lg:tw-w-[600px] tw-w-full tw-flex-col">
            <div className="submit-info xl:tw-w-[800px] lg:tw-w-[600px] tw-w-full">
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
                onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
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
                  info={cardInfo}
                  setInfo={setCardInfo}
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
              <button className="tw-btn tw-bg-cartBg tw-text-orange-500 tw-text-[20px] tw-p-2 tw-uppercase tw-font-medium tw-w-[30%] tw-rounded-xl">
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
