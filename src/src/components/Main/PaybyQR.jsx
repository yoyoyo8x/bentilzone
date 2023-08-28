import React from "react";
import {CheckoutList} from "./utils/data"
import { motion } from "framer-motion";

function PaybyQR(){
    return(
        <div className="tw-flex tw-flex-col">
            <div className="tw-flex tw-justify-center tw-font-sans tw-font-bold 
            sm:tw-text-[30px] tw-text-[20px] tw-text-orange-500 tw-my-2 tw-bg-cartBg tw-rounded-[2rem]">You Can Choose One Of Them</div>
            <div className="tw-flex md:tw-flex-row tw-flex-col tw-w-full">
            { CheckoutList && CheckoutList.map(List => (
                <div 
                    key={List.id}
                    className="tw-flex tw-flex-col tw-items-center
                    tw-flex-1 tw-gap-2 tw-my-5 tw-bg-cartBg 
                    tw-mx-2 tw-rounded-[2rem] tw-w-auto
                    "                
                >
                    <div className="tw-text-gray-50 tw-text-base tw-mt-2">{List.name}</div>
                    <div className="tw-text-gray-50 tw-text-base">{List.stk}</div>
                    <div className="xl:tw-w-[200px] xl:tw-h-[230px] tw-w-[150px]">
                    <img src={List.imgQR} className="tw-w-full tw-h-full" alt="" />
                    </div>
                    <div className="tw-text-gray-50 tw-text-base tw-mb-2">{List.Bank}</div>
                </div>
            ))
            }
            </div>
        </div>
    )
}
export default PaybyQR