import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

import { getEnvironmentVariable } from "@/utils/environment/getEnvironmentVariable/utils";

export const config = {
  apiUrl: getEnvironmentVariable("NEXT_PUBLIC_API_ENDPOINT"),
  isDebug: getEnvironmentVariable("NODE_ENV") === "development",
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
