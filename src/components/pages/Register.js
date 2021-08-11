import React from "react";
import Button from "../common/Button";
import TextInput from "../common/TextInput";

const Register = () => {
  return (
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <TextInput
            label="Username"
            type="text"
            placeholder="Enter username"
          />
        </div>
        <div class="mb-4">
          <TextInput
            label="Password"
            type="password"
            placeholder="***********"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <Button
            text="Sign in"
            backgroundColor="blue-500"
            hoverColor="blue-700"
            textColor="white"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
