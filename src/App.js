import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Receipts from "./pages/Receipts/Receipts";
import Layout from "./components/Layout";
import Registrations from "./pages/Registrations/Registrations";
import { loggedInStatus } from "./network /User";

const App = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState({ logged_in: false });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await loggedInStatus().catch(console.error);
      if (!user.logged_in) {
        navigate("/login");
      } else {
        setAuthUser(user);
        navigate("/");
      }
    };
    fetchUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home authUser={authUser} />} />
        <Route path="/receipts" element={<Receipts />} />
      </Route>
      <Route
        path="/signup"
        element={<Registrations setAuthUser={setAuthUser} />}
      />
      <Route
        path="/login"
        element={<Registrations setAuthUser={setAuthUser} />}
      />
    </Routes>
  );
};

export default App;
