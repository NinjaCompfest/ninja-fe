import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import Navbar from "../common/Navbar";
import Select from "../common/Select";
import Illustration from "../../assets/images/register.svg";
import { register } from "../../services/auth.service";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [validation, setValidation] = useState("*required");

  const onFullNameChange = (val) => {
    setFullName(val);
    console.log(`Fullname: ${val}`);
  };

  const onUsernameChange = (val) => {
    setUsername(val);
    console.log(`Username: ${val}`);
  };

  const onPasswordChange = (val) => {
    setPassword(val);
    console.log(`Password: ${val}`);
  };

  const onUserTypeChange = (val) => {
    setUserType(val);
    console.log(`Usertype: ${val}`);
  };

  const validate = () => {
    if (fullName && username && password && userType) {
      setValidation("");
    } else {
      setValidation("Please fill all fields first!");
    }
  };

  const onSubmit = () => {
    validate();
    console.log(validation);
    register(fullName, username, password, userType);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-row items-center justify-center">
        <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-3/4 rounded-l-lg">
          <h1 className="text-2xl font-bold">Let's get started.</h1>
          <span className="block text-gray-700 text-sm font-bold mb-6">
            Already have an account?{" "}
            <Link to={"/home"} className="text-blue-700">
              Log in
            </Link>{" "}
            now
          </span>
          <div className="mb-4">
            <Input
              label="Full name"
              type="text"
              placeholder="Enter full name"
              onChange={onFullNameChange}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Username"
              type="text"
              placeholder="Enter username"
              onChange={onUsernameChange}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Password"
              type="password"
              placeholder="***********"
              onChange={onPasswordChange}
            />
          </div>
          <div className="mb-4">
            <Select
              label="User type"
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
              onChange={onUserTypeChange}
            />
            <p className="text-red-500 text-xs italic">{validation}</p>
          </div>

          <div className="flex items-center justify-between" onClick={onSubmit}>
            <Button
              text="Sign up"
              backgroundColor="blue-500"
              hoverColor="blue-700"
              textColor="white"
            />
          </div>
        </form>
        <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-3/4 w-1/3 flex items-center rounded-r-lg">
          <img className="w-full" src={Illustration} alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
