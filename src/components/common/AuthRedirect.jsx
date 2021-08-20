import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const AuthRedirect = () => {
  const { userRole } = useContext(AuthContext);
  let to = "";
  switch (userRole) {
    case "ADMIN":
      to = "/admin/dashboard";
      break;
    case "FUNDRAISER":
      to = "/fundraiser/dashboard";
      break;
    case "DONOR":
      to = "/donor/dashboard";
      break;
    default:
      to = "/login";
      break;
  }

  return <Redirect from="*" to={to} />;
};

export default AuthRedirect;
