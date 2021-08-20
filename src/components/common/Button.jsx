import React from "react";
import "../../styles/Button.css";

const Button = ({ text }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white 
    font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
