import React from "react";
import logo from "../../assets/fetch-logo.png";

const Header = () => {
  return (
    <header className="flex flex-col items-center w-full bg-white py-4">
      <h1 className="text-4xl fastup ">CoolPoints </h1>
      <div className="flex items-center space-x-2">
        <p>by</p>
        <div className="bg-[#300d38] self-center rounded-xl p-2 w-10 h-10">
          <img alt="Fetch Logo" src={logo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
