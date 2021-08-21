import axios from "axios";
import config from "../config";

axios.defaults.baseURL = "https://ninja-be.herokuapp.com";

const headers = (token) => {
  return { Authorization: "Bearer " + token };
};

export const getUserInfo = async (token) =>
  axios.get(`${config.users}`, {
    headers: headers(token),
  });

export const getPastDonation = async (token) =>
  axios.get(`${config.dashboard}`, {
    headers: headers(token),
  });

export const getVerifiedPrograms = async (token) =>
  axios.get(`${config.programs}`, {
    headers: headers(token),
  });

export const topup = async (token, amount) =>
  axios.post(
    `${config.users}/topup`,
    {
      amount,
    },
    {
      headers: headers(token),
    }
  );

export const donate = async (token, id, amount) =>
  axios.post(
    `${config.users}/donor`,
    {
      id,
      amount,
    },
    {
      headers: headers(token),
    }
  );

export const getProgramById = async (token, id) =>
  axios.get(`${config.programs}/${id}`, {
    headers: headers(token),
  });
