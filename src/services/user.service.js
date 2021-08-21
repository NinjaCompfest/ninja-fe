import axios from "axios";
import config from "../config";

axios.defaults.baseURL = "https://ninja-be.herokuapp.com";

export const getUserInfo = async (token) =>
  axios.get(`${config.users}`, {
    headers: { Authorization: "Bearer " + token },
  });

export const getProgramById = async (token, id) =>
  axios.get(`${config.programs}/${id}`, {
    headers: { Authorization: "Bearer " + token },
  });

export const donate = async (token, id, amount) =>
  axios.post(
    `${config.users}/${id}/donor`,
    {
      id,
      amount,
    },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
