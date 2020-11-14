import axios, { AxiosRequestConfig } from "axios";

const uploadHandler = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

uploadHandler.interceptors.request.use(
  (config) => {
    const getToken = localStorage.getItem("token");
    //@ts-ignore
    const token = JSON.parse(getToken);

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

export const uploadHandlerGet = (
  url: string,
  dataToSubmit?: AxiosRequestConfig
) =>
  uploadHandler
    .get(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const uploadHandlerPost = (url: string, dataToSubmit?: any) =>
  uploadHandler
    .post(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
