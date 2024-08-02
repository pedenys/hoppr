import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;
const IS_DEBUG = process.env.NODE_ENV === "development";
export const config = {
  apiUrl: API_URL,
  isDebug: IS_DEBUG,
};

export const requestMiddlewares = (
  request: InternalAxiosRequestConfig<any>,
): InternalAxiosRequestConfig<any> => {
  const augmentedRequest = request;

  return augmentedRequest;
};

export const responseMiddlewares = (response: AxiosResponse<any, any>) => {
  return response;
};
