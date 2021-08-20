import axios from "axios";
import config from "../config";

const API_URL = process.env.REACT_APP_BACKEND_BASE_URL;

export const register = async (full_name, username, password, type) =>
  axios.post(API_URL + config.register, {
    full_name,
    username,
    password,
    type,
  });

export const login = async (username, password) =>
  axios.post(API_URL + config.login, {
    username,
    password,
  });

export const saveLogin = (res) => {
  localStorage.setItem("token", JSON.stringify(res.data.token));
  localStorage.setItem("role", JSON.stringify(res.data.user.role));
};

export const getUserToken = () => JSON.parse(localStorage.getItem("token"));
export const getUserRole = () => JSON.parse(localStorage.getItem("role"));

export const logout = () => localStorage.clear();
