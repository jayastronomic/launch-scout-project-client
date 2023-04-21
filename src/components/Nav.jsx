import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../network /User";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    logoutUser().then((authUser) => {
      if (!authUser.logged_in) {
        navigate("/login");
      }
    });
  };

  return (
    <nav className="flex items-center justify-around w-full bg-white py-2 px-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl fastup text-[#004AAD]">Cart</h1>
        <div className="flex items-center space-x-2"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex text-sm md:text-base">
          <Link
            to={"/"}
            className="text-[#004AAD] px-4 py-2 font-bold hover:opacity-50"
          >
            Receipt Form
          </Link>
          <Link
            to={"/receipts"}
            className="text-[#004AAD] px-4 py-2 font-bold hover:opacity-50 -translate-x-1"
          >
            Processed Receipts
          </Link>
          <button
            onClick={logout}
            className="hidden md:block text-white bg-blue-500 px-4 text-sm rounded-lg"
          >
            Log out
          </button>
        </div>
        <div className="">
          {location.pathname === "/" ? (
            <div
              className={`border-b-2 border-[#004AAD] transition translate-x-0 w-[8rem]`}
            ></div>
          ) : (
            <div
              className={`border-b-2 border-[#004AAD] transition translate-x-36 w-[10rem]`}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
