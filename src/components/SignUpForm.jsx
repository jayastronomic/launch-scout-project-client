import React from "react";

const SignUpForm = () => {
  return (
    <form className="flex flex-col rounded drop-shadow-sm shadow-xl p-8 space-y-4 bg-white w-[28rem]">
      <div className="flex flex-col">
        <input
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:border-blue-500"
          placeholder="Email"
        ></input>
      </div>
      <div className="flex flex-col">
        <input
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:border-blue-500"
          placeholder="Password"
        ></input>
      </div>
      <div className="flex flex-col">
        <input
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:border-blue-500"
          placeholder="Confirm Password"
        ></input>
      </div>
      <button
        className="bg-blue-600 rounded text-white p-4 text-lg font-semibold"
        type="submit"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
