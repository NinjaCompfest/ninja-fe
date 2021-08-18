import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_BASE_URL;

export const register = async (full_name, username, password, type) =>
  axios.post(API_URL + "/users", {
    full_name,
    username,
    password,
    type,
  });
