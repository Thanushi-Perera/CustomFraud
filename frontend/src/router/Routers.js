import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//import Pages

import Login from "./../pages/Login";
import Register from "./../pages/Register";
// import Director General from "./../pages/Director General";
// import Port Authority from "./../pages/Port Authority";
// import Shipping Line Agent from "./../pages/Shipping Line Agent";
// import Custom Officer from "./../pages/Custom Officer";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/Director General" element={<DirectorGeneral />} />
      <Route path="/Port Authority" element={<PortAuthority />} />
      <Route path="/Shipping Line Agent" element={<ShippingLineAgent />} /> */}
    </Routes>
  );
};
export default Routers;
