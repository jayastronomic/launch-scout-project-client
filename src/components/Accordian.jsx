import React, { useState } from "react";
import Chevron from "../icons/Chevron";
import Receipt from "../pages/Receipts/Receipt";
import { Breakdown } from "./Breakdown";

const Accordian = ({ receipt, index }) => {
  const [rotate, setRotate] = useState("-rotate-90");
  const [change, setChange] = useState("");

  const toggleShow = () => {
    if (change === "animate-grow") {
      setChange("animate-shrink");
      setRotate("-rotate-90");
    } else {
      setChange("animate-grow");
      setRotate("");
    }
  };
  return (
    <div className="w-full border-b overflow-auto">
      <button
        onClick={() => toggleShow()}
        className="flex justify-between w-full px-4 py-4 hover:bg-gray-100 transition"
      >
        <span>{receipt.retailer}</span>
        <span
          className={`transition flex items-center justify-center rounded-full ${rotate} hover:bg-gray-200 h-8 w-8`}
        >
          <Chevron />
        </span>
      </button>

      <div
        className={`transition flex justify-between border bg-gray-400 h-0 overflow-hidden ${change} w-full hidescrollbar border-4`}
      >
        <Receipt {...receipt} index={index} />
        <Breakdown {...receipt} index={index} />
      </div>
    </div>
  );
};

export default Accordian;
