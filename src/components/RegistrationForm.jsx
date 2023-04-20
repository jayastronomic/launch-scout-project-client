import React from "react";
import { useLocation } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const RegistrationForm = () => {
  const location = useLocation();
  if (location.pathname === "/signup") {
    return <SignUpForm />;
  }
  if (location.pathname === "/login") {
    return <LoginForm />;
  }
};

export default RegistrationForm;
