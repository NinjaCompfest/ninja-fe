import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import Navbar from "../common/Navbar";
import Illustration from "../../assets/images/login.svg";
import { login } from "../../services/auth.service";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("*required");
  const history = useHistory();

  const handleUsernameChange = (val) => {
    setUsername(val);
  };

  const handlePasswordChange = (val) => {
    setPassword(val);
  };

  const handleSubmit = () => {
    if (username && password) {
      setValidation("");
    } else {
      setValidation("Please fill all fields first!");
    }
  };

  useEffect(() => {
    if (validation === "") {
      login(username, password)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("role", JSON.stringify(res.data.user.role));
            history.push("/home");
          }
        })
        .catch((err) => setValidation(err.message));
    }
  }, [validation, username, password, history]);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-row items-center justify-center">
        <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-3/4 w-1/3 flex items-center rounded-l-lg">
          <img className="w-full" src={Illustration} alt="" />
        </div>
        <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 h-3/4 rounded-r-lg flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Welcome back.</h1>
          <span className="block text-gray-700 text-sm font-bold mb-6">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-700">
              Sign up
            </Link>{" "}
            now
          </span>

          <div className="mb-4">
            <Input
              label="Username"
              type="text"
              placeholder="Enter username"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Password"
              type="password"
              placeholder="***********"
              onChange={handlePasswordChange}
            />
            <p className="text-red-500 text-xs italic">{validation}</p>
          </div>

          <div
            className="flex items-center justify-between"
            onClick={handleSubmit}
          >
            <Button
              text="Log in"
              backgroundColor="blue-500"
              hoverColor="blue-700"
              textColor="white"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;