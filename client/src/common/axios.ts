import axios, { AxiosRequestConfig } from "axios";

type DataToSubmitProps = {
  message: string;
  userID: string;
  loginSuccess: boolean;
};

declare module "axios" {
  export interface AxiosRequestConfig {
    baseURL?: string;
    props?: DataToSubmitProps;
  }
}

export const axiosCustom = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const axiosGet = (url: string, dataToSubmit?: AxiosRequestConfig) =>
  axiosCustom
    .get(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const axiosPost = (url: string, dataToSubmit?: any) =>
  axiosCustom
    .post(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const axiosPut = (url: string, dataToSubmit?: any) =>
  axiosCustom
    .put(url, dataToSubmit)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
