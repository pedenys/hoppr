import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { paths } from "@/api/types";

import { config, requestMiddlewares, responseMiddlewares } from "./config.api";

let client: AxiosInstance;

export const getClient = () => {
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

export const get = async <T>(
  url: keyof paths,
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

export const post = async <T, D = unknown>(
  url: string,
  data?: D,
  axiosConfig?: AxiosRequestConfig,
) => {
  try {
    const response = await getClient().post<T, AxiosResponse<T>, D>(
      url,
      data,
      axiosConfig,
    );
    return response.data;
  } catch (error) {
    if (config.isDebug) {
      console.error(error);
    }
    throw error;
  }
};

export const put = async <T, D = unknown>(
  url: string,
  data?: D,
  axiosConfig?: AxiosRequestConfig,
) => {
  try {
    const response = await getClient().put<T, AxiosResponse<T>, D>(
      url,
      data,
      axiosConfig,
    );
    return response.data;
  } catch (error) {
    if (config.isDebug) {
      console.error(error);
    }
    throw error;
  }
};

export const patch = async <T, D = unknown>(
  url: string,
  data?: D,
  axiosConfig?: AxiosRequestConfig,
) => {
  try {
    const response = await getClient().patch<T, AxiosResponse<T>, D>(
      url,
      data,
      axiosConfig,
    );
    return response.data;
  } catch (error) {
    if (config.isDebug) {
      console.error(error);
    }
    throw error;
  }
};

export const del = async <T, D = unknown>(url: string, data?: D) => {
  try {
    const response = await getClient().delete<T, AxiosResponse<T>, D>(url, {
      data,
    });
    return response.data;
  } catch (error) {
    if (config.isDebug) {
      console.error(error);
    }
    throw error;
  }
};
