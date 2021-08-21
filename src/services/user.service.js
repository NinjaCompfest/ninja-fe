import axios from "axios";
import config from "../config";

axios.defaults.baseURL = "https://672d-175-158-53-175.ngrok.io";

const headers = (token) => {
  return {
    Authorization: "Bearer " + token,
  };
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

export const createProgram = async (token, title, description, userId) =>
  axios.post(
    `${config.fundraisers}/${userId}${config.programs}`,
    {
      title,
      description,
    },
    {
      headers: headers(token),
    }
  );

export const topup = async (token, amount, userId) =>
  axios.put(
    `${config.users}/${userId}/topup`,
    {
      amount,
    },
    {
      headers: headers(token),
    }
  );

export const donate = async (token, programId, amount, userId) =>
  axios.put(
    `${config.users}/${userId}/donor`,
    {
      programId,
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

export const withdraw = async (token, id, amount, userId) =>
  axios.put(
    `${config.fundraisers}/${userId}${config.programs}/${id}/withdraw`,
    {
      amount,
    },
    {
      headers: headers(token),
    }
  );
