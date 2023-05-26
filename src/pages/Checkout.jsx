import React from "react";
import { useStateValue } from "../components/Context/StateProvider";
import { useState } from "react";
import { useEffect } from "react";
import CartContainer from "../components/Header/CartContainer";
import {CheckoutList} from "../components/Main/utils/data"
import CartItem from "../components/Header/CartItem";
import EmptyCart from "../components/Main/img/emptyCart.svg";
import "../components/Header/Header.css"
import {TiShoppingCart} from "react-icons/ti"


const Checkout = () => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const [tot, setTot] = useState(0);
  const [flag, setFlag] = useState(1);

  useEffect(() => {}, [scrollValue, cartShow]);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (sum, item) {
      return sum + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag, cartItems]);
  console.log(cartItems)

  return (
    <div className="body">
      <main id="Main" className="md:tw-px-16 tw-w-full">
        <div className="MainContainer">
          <div className=" tw-flex tw-justify-around tw-w-full">
            <div className="tw-flex">
              <h3>Your total bill: ${tot + 2.5}</h3>

              {/* Đang suy nghĩ chưa biết thiết kế sao */}
            </div>






            <div className="tw-flex tw-items-center tw-flex-col tw-justify-center tw-bg-cartBg tw-rounded-[2rem]">
              <div className=" tw-font-bold tw-text-[34px] tw-text-orange-500 tw-flex tw-items-center tw-gap-2 tw-mt-2">Your cart <TiShoppingCart/></div>
              {cartItems && cartItems.length > 0 ? (
                <div className="cartItemCon">
                  {/* Cart item section */}
                  <div className="cartItemSec md:tw-h-42 tw-overflow-y-scroll tw-scrollbar-none">
                    {cartItems &&
                      cartItems.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          setFlag={setFlag}
                          flag={flag}
                        />
                      ))}
                  </div>
                  {/* Cart total section */}

                <div className="CartTot tw-bg-cartTotal tw-rounded-[2rem]">
                  <div className="CartTotEle">
                    <p className="tw-text-gray-400">Sub Total</p>
                    <p className="tw-text-gray-400">${tot}</p>
                  </div>
                  <div className="CartTotEle">
                    <p className="tw-text-gray-400">Delivery</p>
                    <p className="tw-text-gray-400">$2.5</p>
                  </div>
                  <div className="CartTotEle">
                    <p className="tw-text-gray-400">Total</p>
                    <p className="tw-text-gray-400">${tot + 2.5}</p>
                  </div>
                </div>
                </div>
                ) : (
                <div className="cartIempty tw-h-screen">
                  <img src={EmptyCart} className="tw-w-300" alt="" />
                  <p className="tw-text-textColor">Add some items to your cart</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
