import React from "react";
import "./Select.css";

const TextInput = ({ label, placeholder, options, onChange }) => {
  const RenderedOptions = options.map((option) => (
    <option value={option.value}>{option.name}</option>
  ));

  return (
    <>
      <label className="block text-gray-700 text-sm font-bold mb-2" for="type">
        {label}
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      >
        {RenderedOptions}
      </select>
    </>
  );
};

export default TextInput;
