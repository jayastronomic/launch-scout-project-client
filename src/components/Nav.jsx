import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-around w-full bg-white py-2 px-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl fastup text-blue-400">CoolPoints </h1>
        <div className="flex items-center space-x-2"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <Link
            to={"/"}
            className="text-blue-400 px-4 py-2 font-bold hover:opacity-50"
          >
            Receipt Form
          </Link>
          <Link
            to={"/receipts"}
            className="text-blue-400 px-4 py-2 font-bold hover:opacity-50 -translate-x-1"
          >
            Processed Receipts
          </Link>
        </div>
        <div className="">
          {location.pathname === "/" ? (
            <div
              className={`border-b-2 border-blue-400 transition translate-x-0 w-[8rem]`}
            ></div>
          ) : (
            <div
              className={`border-b-2 border-blue-400 transition translate-x-36 w-[10rem]`}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
