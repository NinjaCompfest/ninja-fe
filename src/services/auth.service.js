import axios from "axios";
import config from "../config";

const API_URL = config.host;

export const register = async (full_name, username, password, type) =>
  axios.post(API_URL + "register", {
    full_name,
    username,
    password,
    type,
  });
