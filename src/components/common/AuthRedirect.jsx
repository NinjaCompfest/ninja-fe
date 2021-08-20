import React from "react";
import { Redirect } from "react-router-dom";

const AuthRedirect = ({ role }) => {
  let to = "";
  switch (role) {
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
