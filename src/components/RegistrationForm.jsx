import React from "react";
import { useLocation } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const RegistrationForm = () => {
  const location = useLocation();
  if (location.pathname === "/signup") {
    return <SignUpForm />;
  }
  if (location.pathname === "/login") {
    return <p>Login Form</p>;
  }
};

export default RegistrationForm;
