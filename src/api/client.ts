import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { config, requestMiddlewares, responseMiddlewares } from "./config";

let client: AxiosInstance;

const getClient = () => {
  if (client) {
    return client;
  }

  if (!config.apiUrl) {
    throw new Error("missing baff url");
  }

  const _client = axios.create({
    baseURL: config.apiUrl,
    responseType: "json",
  });

  _client.interceptors.request.use((request) => {
    return requestMiddlewares(request);
  });

  _client.interceptors.response.use((response) => {
    return responseMiddlewares(response);
  });

  client = _client;

  return _client;
};

export const httpGet = async <T>(
  url: string,
  axiosConfig?: AxiosRequestConfig,
) => {
  try {
    const response = await getClient().get<T>(url, axiosConfig);
    return response.data;
  } catch (error) {
    if (config.isDebug) {
      console.error(error);
    }
    throw error;
  }
};
