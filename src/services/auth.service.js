import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_BASE_URL;

export const register = async (full_name, username, password, type) =>
  axios.post(API_URL + "/users", {
    full_name,
    username,
    password,
    type,
  });

export const login = async (username, password) =>
  axios
    .post(API_URL + config.login, {
      username,
      password,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });

export const getUser = () => JSON.parse(localStorage.getItem("user"));

export const logout = () => localStorage.removeItem("user");
