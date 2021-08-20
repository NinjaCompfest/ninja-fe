import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
const NavbarLogout = () => {
  return (
    <div className="bg-white bar">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <Link
              to={"/"}
              className="logo flex items-center py-3 px-3 text-red-600"
            >
              NINJA
            </Link>
          </div>

          {/* secondary nav */}
          <div className="flex items-center space-x-1">
            <Link
              to={"/login"}
              className="py-1 px-7 border border-gray-400 rounded hover:bg-black hover:text-white transition duration-300"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogout;
