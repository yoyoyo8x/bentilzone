import { IoIosArrowForward } from "react-icons/io";
import "../../css/Service.css";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [parent, enable] = useAutoAnimate({ duration: 1000 });

  const openMenu = () => setIsOpen(!isOpen);
  return (
    <div
      className={
        isOpen
          ? "sidebar | tw-w-3/12 tw-px-7 tw-drop-shadow-xl tw-h-full"
          : "hide-sidebar tw-drop-shadow-xl tw-h-full"
      }
    >
      <div className={isOpen ? "open-icon" : "close-icon"}>
        <IoIosArrowForward onClick={openMenu} />
      </div>
      <div
        ref={parent}
        className="content-sidebar"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <span className="tw-text-xs tw-text-slate-400">
          One of the best ordering app in Asia
        </span>
        <h1 className="tw-text-3xl tw-font-bold tw-tracking-wider tw-mt-9">
          Bentilzone, Inc.
        </h1>
        <span className=" tw-block tw-text-sm tw-font-bold tw-mt-2 tw-text-slate-400">
          Shipping your food with passion
        </span>
        <h5 className="custm-review-title | tw-text-md tw-font-medium tw-mt-16 tw-text-slate-400">
          Customer's review
        </h5>
        <div className="custm-review | tw-mt-5">
          <span className="tw-text-3xl tw-font-bold">4.5</span>{" "}
          <span className="tw-text-sm tw-font-bold tw-text-slate-400">
            out of 5
          </span>
        </div>
        <div className="text-review tw-mt-12">
          <span className="tw-text-sm tw-text-slate-700">
            "I love ordering food from this app service. It’s fast, easy and
            convenient. The app has a great selection of restaurants and
            cuisines to choose from, and the delivery is always on time and
            courteous. The food is always fresh and delicious, and the portions
            are generous. The app also has a loyalty program that rewards me
            with discounts and freebies. I highly recommend this app service to
            anyone who wants to enjoy a hassle-free meal at home or at work."
          </span>
        </div>
      </div>
    </div>
  );
}
