import React from "react";
import CartLogo from "../../icons/CartLogo";
import Logo from "../../assets/CART.png";
import RegistrationForm from "../../components/RegistrationForm";

const SignUp = () => {
  return (
    <main className="flex flex-col items-center p-4 h-screen bg-zinc-200 lg:flex-row lg:items-center lg:justify-center lg:space-x-20">
      <div className="">
        <div className="flex justify-center items-center">
          <img className="w-56" alt="Cart Logo" src={Logo} />
        </div>
        <p className="text-2xl text-gray-700 text-center py-4 w-72 items-center border-4">
          Show us your receipts and earn points with Cart!
        </p>
      </div>
      <div className="flex flex-col mt-12 items-center">
        <RegistrationForm />
      </div>
    </main>
  );
};

export default SignUp;
