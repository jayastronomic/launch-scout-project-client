import React from "react";
import { useLocation } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const RegistrationForm = ({ setAuthUser }) => {
  const location = useLocation();
  if (location.pathname === "/signup") {
    return <SignUpForm setAuthUser={setAuthUser} />;
  }
  if (location.pathname === "/login") {
    return <LoginForm setAuthUser={setAuthUser} />;
  }
};

export default RegistrationForm;
