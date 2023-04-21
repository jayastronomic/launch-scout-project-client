import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../network /User";

const LoginForm = ({ setAuthUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.target.name == "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      user: {
        email: email,
        password: password,
      },
    };

    await loginUser(credentials).then((authUser) => {
      if (authUser.logged_in) {
        console.log(authUser);
        setAuthUser(authUser);
        navigate("/");
      }
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded drop-shadow-sm shadow-xl p-8 space-y-4 bg-white w-[28rem]"
    >
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
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
        ></input>
      </div>

      <button
        className="bg-blue-600 rounded text-white p-4 text-lg font-semibold"
        type="submit"
      >
        Log In
      </button>
      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
