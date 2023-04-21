import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../network /User";

const SignUpForm = ({ setAuthUser }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "passwordConfirmation":
        setPasswordConfirmation(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    };
    const createdUser = await createAccount(newUser);
    console.log(createdUser);
    setAuthUser(createdUser);
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded drop-shadow-sm shadow-xl p-8 space-y-4 bg-white w-[28rem]"
    >
      <div className="flex">
        <input
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:border-blue-500"
          placeholder="First Name"
          value={firstName}
          name="firstName"
          onChange={handleChange}
        ></input>
        <input
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:border-blue-500"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex flex-col">
        <input
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:border-blue-500"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex flex-col">
        <input
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:border-blue-500"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex flex-col">
        <input
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:border-blue-500"
          placeholder="Confirm Password"
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={handleChange}
        ></input>
      </div>
      <button
        className="bg-blue-600 rounded text-white p-4 text-lg font-semibold"
        type="submit"
      >
        Create Account
      </button>
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
