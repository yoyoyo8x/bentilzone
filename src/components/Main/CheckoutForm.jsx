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

  const pay = async (e) => {
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

    if (info.city === "") {
      setCityError("Please choose your city");
      setIsPopup(false);
    } else {
      setCityError("");
      setIsPopup(true);
    }

    if (info.method === "") {
      setMethodError("Please choose your payment method");
      setIsPopup(false);
    } else {
      setMethodError("");
      setIsPopup(true);
    }

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
      info.address === ""
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
          <div className="tw-font-bold tw-text-[34px] tw-text-orange-500 tw-text-center tw-mr-[37px]">
            Your Bill
          </div>
          <div className="submit-content tw-w-[800px] tw-flex-col">
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
                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
              />
              <div className="required">{lastError}</div>

              <input
                type="number"
                placeholder="Phone Number*"
                id="third-n"
                onChange={(e) =>
                  setInfo({ ...info, phoneNumber: e.target.value })
                }
              />
              <div className="required">{phoneError}</div>

              <select
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
              <select
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
              {info.method === "Paybycard" && <PaybyCard />}
              {info.method === "PaybyQR" && <PaybyQR />}
            </div>
            <div className="submit-box">
              <textarea
                placeholder="Address details"
                className="submit-message"
                onChange={(e) => setInfo({ ...info, address: e.target.value })}
              ></textarea>
              <div className="required">{addressError}</div>
            </div>
            <div className="button-submit">
              <button className="tw-btn tw-bg-cartBg tw-text-orange-500 tw-text-[20px] tw-p-2 tw-uppercase tw-font-medium tw-w-[91%] tw-mr-[37px]">
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
