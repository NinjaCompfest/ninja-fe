import React from "react";
import "./Button.css";

const Button = ({ text, backgroundColor, hoverColor, textColor }) => {
  return (
    <button
      className={`bg-${backgroundColor} hover:bg-${hoverColor} text-${textColor} font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
