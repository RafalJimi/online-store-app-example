import axios, { AxiosRequestConfig } from "axios";
import { getLocalStorage } from "../helpers/auth";

const uploadHandler = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

uploadHandler.interceptors.request.use(
  (config) => {
    const token = getLocalStorage("token");

    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const uploadHandlerGet = (url: string, dataToSubmit?: AxiosRequestConfig) =>
  uploadHandler
    .get(url, dataToSubmit)
    .then((res) => res)
    .catch((err) => Promise.reject(err));

export const uploadHandlerPost = (url: string, dataToSubmit?: any) =>
  uploadHandler
    .post(url, dataToSubmit)
    .then((res) => res)
    .catch((err) => Promise.reject(err));
