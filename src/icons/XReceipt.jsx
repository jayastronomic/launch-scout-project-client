import React from "react";

const XReceipt = ({ className }) => {
  return (
    <div className={className}>
      <svg
        fill="#000000"
        width="3rem"
        height="3rem"
        viewBox="0 0 24 24"
        id="receipt-clese"
        data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-line"
      >
        <path
          id="secondary"
          d="M21,4V18.5a2.5,2.5,0,0,1-5,0V16H5V4A1,1,0,0,1,6,3H20A1,1,0,0,1,21,4Z"
          style={{ fill: "rgb(44, 169, 188)", strokeWidth: 2 }}
        ></path>
        <line
          id="primary"
          x1="15"
          y1="7"
          x2="11"
          y2="12"
          style={{
            fill: "none",
            stroke: "rgb(0, 0, 0)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        ></line>
        <line
          id="primary-2"
          data-name="primary"
          x1="11"
          y1="7"
          x2="15"
          y2="12"
          style={{
            fill: "none",
            stroke: "rgb(0, 0, 0)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        ></line>
        <path
          id="primary-3"
          data-name="primary"
          d="M21,4V18.5a2.5,2.5,0,0,1-5,0V16H5V4A1,1,0,0,1,6,3H20A1,1,0,0,1,21,4ZM16,18.5V16H3v2.5A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,1,16,18.5Z"
          style={{
            fill: "none",
            stroke: "rgb(0, 0, 0)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        ></path>
      </svg>
    </div>
  );
};

export default XReceipt;
