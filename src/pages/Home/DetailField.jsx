import React from "react";

const DetailField = ({ detail, handleChange, index }) => {
  if (detail.name === "total") {
    return (
      <div className="relative flex flex-col">
        <input
          id={detail.id}
          className="peer placeholder-transparent border-b-2 cursor-not-allowed focus:outline-none focus:border-b-[#300d38] bg-transparent z-[1] text-gray-400"
          name={detail.name}
          placeholder={detail.placeholder}
          value={parseFloat(detail.value).toFixed(2)}
          type={detail.type}
          disabled
        />
        <label className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all cursor-not-allowed">
          {detail.label}
        </label>
      </div>
    );
  } else {
    return (
      <div className="relative flex flex-col">
        <input
          id={detail.id}
          className="peer placeholder-transparent border-b-2 cursor-pointer focus:outline-none focus:border-b-[#300d38] bg-transparent z-[1]"
          name={detail.name}
          placeholder={detail.placeholder}
          value={detail.value}
          onChange={(e) => handleChange(e, index)}
          type={detail.type}
        />
        <label className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all">
          {detail.label}
        </label>
      </div>
    );
  }
};

export default DetailField;
