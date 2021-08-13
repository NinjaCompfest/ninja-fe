import React from "react";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import Illustration from "../../assets/images/register.svg";

const Register = () => {
  return (
    <div class="w-full h-screen flex flex-row items-center justify-center">
      <form class="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-3/4">
        <h1 className="text-2xl font-bold">Let's get started.</h1>
        <span className="block text-gray-700 text-sm font-bold mb-6">
          Already have an account? Log in now
        </span>
        <div class="mb-4">
          <TextInput
            label="Full name"
            type="text"
            placeholder="Enter full name"
          />
        </div>
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
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
            User type
          </label>
          <select
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Select user type"
          >
            <option>Donor</option>
            <option>Fundraiser</option>
          </select>
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>

        <div class="flex items-center justify-between">
          <Button
            text="Sign up"
            backgroundColor="blue-500"
            hoverColor="blue-700"
            textColor="white"
          />
        </div>
      </form>
      <div class="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-3/4 w-1/3 flex items-center">
        <img className="w-full" src={Illustration} alt="" />
      </div>
    </div>
  );
};

export default Register;
