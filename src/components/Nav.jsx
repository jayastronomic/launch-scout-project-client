import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/fetch-logo.png";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-around w-full bg-white py-2 px-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl fastup ">FetchPoints </h1>
        <div className="flex items-center space-x-2">
          <p>by</p>
          <div className="bg-[#300d38] self-center rounded-xl p-2 w-10 h-10">
            <img alt="Fetch Logo" src={logo} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <Link
            to={"/"}
            className="text-[#300d38] px-4 py-2 font-bold hover:opacity-50"
          >
            Receipt Form
          </Link>
          <Link
            to={"/receipts"}
            className="text-[#300d38] px-4 py-2 font-bold hover:opacity-50 -translate-x-1"
          >
            Processed Receipts
          </Link>
        </div>
        <div className="">
          {location.pathname === "/" ? (
            <div
              className={`border-b-2 border-[#300d38] transition translate-x-0 w-[8rem]`}
            ></div>
          ) : (
            <div
              className={`border-b-2 border-[#300d38] transition translate-x-36 w-[10rem]`}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
