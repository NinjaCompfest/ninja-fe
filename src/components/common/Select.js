import React from "react";
import "./Select.css";

const TextInput = ({ label, placeholder, options }) => {
  const RenderedOptions = options.map((option) => (
    <option value={option.value}>{option.name}</option>
  ));

  return (
    <>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
        {label}
      </label>
      <select
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      >
        {RenderedOptions}
      </select>
    </>
  );
};

export default TextInput;
