import React from "react";
import { useState } from "react";
import Success from "../../images/icons8-order-completed-48.png";
import "../../css/Contact.css"
import {CityList} from "./utils/data"


function CheckoutForm() {

    const [isPopup, setIsPopup] = useState(false);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [phoneError, setPhoneError] = useState("");



    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        
    })
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
        } else {
            setPhoneError("");
            setIsPopup(true);
        }

        
        

        if (
            info.firstName === "" ||
            info.lastName === "" ||
            info.phoneNumber === "" ||
            info.city === "--Choose your City--"
        ) {
            return false;
        }

        localStorage.setItem("userCheckout", JSON.stringify(info));
        const userInfo = localStorage.getItem("userCheckout");
        console.log(userInfo);

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
            phoneNumber:"",
        });
    };

    return (
        <>
            <div className="tw-font-bold tw-text-[34px] tw-text-orange-500" >Your Bill</div>
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
                      onChange={(e) =>
                        setInfo({ ...info, lastName: e.target.value })
                      }
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

                    <select name="city" id="city">
                        <option value="" disabled selected>Choose Your City*</option>
                        {CityList && CityList.map(c=>
                        <option value="{c.city}">{c.city}</option>
                        )}
                    </select>
                            
                    <select name="method" id="method">
                        <option value="" disabled selected>Pay Method*</option>
                        <option value="Pay in cash">Pay In Cash</option>
                        <option value="Pay buy cash">Pay Buy Cash</option>
                    </select>

                    
                  </div>
                  <div className="submit-box">
                    <textarea
                      placeholder="Address details"
                      className="submit-message"
                      onChange={(e) =>
                        setInfo({ ...info, message: e.target.value })
                      }
                    ></textarea>
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
    )
}
export default CheckoutForm