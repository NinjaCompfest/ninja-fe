import axios from "axios";
import config from "../config";

axios.defaults.baseURL = "https://ninja-be.herokuapp.com";

export const getProgramById = async (token, id) =>
  axios.get(`${config.programs}/${id}`, {
    headers: { Authorization: "Bearer " + token },
  });
