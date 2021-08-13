import React from "react";
import "./Input.css";

const TextInput = ({ label, type, placeholder }) => {
  return (
    <>
      <label class="block text-gray-700 text-sm font-bold mb-2" for={label}>
        {label}
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        onChange={(e) => console.log(`${label} changed to ${e.target.value}`)}
      />
    </>
  );
};

export default TextInput;
