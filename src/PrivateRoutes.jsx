import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const tokens = sessionStorage.getItem("access-Token");

  return tokens ? children : <Navigate to={"/"} />;
};

export default PrivateRoutes;
