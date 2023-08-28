import React from "react";
import Loading from "../../images/Ajax.svg";
import "../../App.css"

const Ajax = () => {
  return (
    <div className="tw-w-full tw-h-full tw-flex tw-place-content-center tw-items-center">
      <img src={Loading} alt="" className="tw-h-40 tw-w-40" />
    </div>
  );
};

export default Ajax;
