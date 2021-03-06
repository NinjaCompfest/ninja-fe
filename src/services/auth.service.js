import axios from "axios";
import config from "../config";

axios.defaults.baseURL = "https://ninja-be.herokuapp.com";

export const register = async (full_name, username, password, type) =>
  axios.post(config.register, {
    full_name,
    username,
    password,
    type,
  });

export const login = async (username, password) =>
  axios.post(config.login, {
    username,
    password,
  });

export const saveLogin = (res) => {
  localStorage.setItem("token", JSON.stringify(res.data.token));
  localStorage.setItem("role", JSON.stringify(res.data.user.role));
  localStorage.setItem("id", JSON.stringify(res.data.user._id));
};

export const getUserToken = () => JSON.parse(localStorage.getItem("token"));
export const getUserRole = () => JSON.parse(localStorage.getItem("role"));
export const getUserId = () => JSON.parse(localStorage.getItem("id"));

export const logout = () => localStorage.clear();
