import { AxiosRequestConfig } from "axios";
import { axiosCustom } from "./axios";

axiosCustom.interceptors.request.use(
  (config) => {
    const getToken = localStorage.getItem("token");
    //@ts-ignore
    const token = JSON.parse(getToken);

    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const networkHandlerGet = (
  url: string,
  dataToSubmit?: AxiosRequestConfig
) =>
  axiosCustom
    .get(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const networkHandlerPost = (url: string, dataToSubmit?: any) =>
  axiosCustom
    .post(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const networkHandlerPut = (url: string, dataToSubmit?: any) =>
  axiosCustom
    .put(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const networkHandlerDelete = (url: string, dataToSubmit?: any) =>
  axiosCustom
    .delete(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
