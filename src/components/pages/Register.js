import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";
import Illustration from "../../assets/images/register.svg";

const Register = () => {
  return (
    <div class="w-full h-screen flex flex-row items-center justify-center">
      <form class="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-3/4 rounded-l-lg">
        <h1 className="text-2xl font-bold">Let's get started.</h1>
        <span className="block text-gray-700 text-sm font-bold mb-6">
          Already have an account? <span className="text-blue-700">Log in</span>{" "}
          now
        </span>
        <div class="mb-4">
          <Input label="Full name" type="text" placeholder="Enter full name" />
        </div>
        <div class="mb-4">
          <Input label="Username" type="text" placeholder="Enter username" />
        </div>
        <div class="mb-4">
          <Input label="Password" type="password" placeholder="***********" />
        </div>
        <div class="mb-4">
          <Select
            label="Password"
            placeholder="Select user type"
            options={[
              {
                name: "Donor",
                value: "donor",
              },
              {
                name: "Fundraiser",
                value: "fundraiser",
              },
            ]}
          />
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
      <div class="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-3/4 w-1/3 flex items-center rounded-r-lg">
        <img className="w-full" src={Illustration} alt="" />
      </div>
    </div>
  );
};

export default Register;
