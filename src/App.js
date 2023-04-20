import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Receipts from "./pages/Receipts/Receipts";
import Layout from "./components/Layout";
import Registrations from "./pages/Registrations/Registrations";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/receipts" element={<Receipts />} />
      </Route>
      <Route path="/signup" element={<Registrations />} />
      <Route path="/login" element={<Registrations />} />
    </Routes>
  );
};

export default App;
