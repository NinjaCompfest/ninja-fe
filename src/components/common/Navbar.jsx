import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/auth.service";
import "../../styles/Navbar.css";

const Navbar = () => {
  const { userRole, setUserRole, userToken, setUserToken } =
    useContext(AuthContext);

  const handleLogoutClick = () => {
    logout();
    setUserRole("");
    setUserToken("");
  };

  const renderButton = () => {
    if (userRole && userToken) {
      return (
        <button
          className="py-1 px-7 border border-gray-400 rounded hover:bg-black hover:text-white transition duration-300"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      );
    }
    return (
      <Link
        to={"/login"}
        className="py-1 px-7 border border-gray-400 rounded hover:bg-black hover:text-white transition duration-300"
      >
        Login
      </Link>
    );
  };

  return (
    <div className="bg-white bar">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div>
            <Link
              to={"/"}
              className="logo flex items-center py-3 px-3 text-red-600"
            >
              NINJA
            </Link>
          </div>

          <div className="flex items-center space-x-1">{renderButton()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
