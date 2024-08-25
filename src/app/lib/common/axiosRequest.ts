import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getSession } from 'next-auth/react';

// Create an axios instance
const axiosInstance = axios.create();

// Interceptor for adding authorization header
axiosInstance.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session && session.access_token) {
    config.headers.Authorization = `Bearer ${session.access_token}`;
  }
  return config;
});

// Define a type for the response
type AxiosRequestFn<T> = (
  url: string,
  config?: AxiosRequestConfig,
) => Promise<AxiosResponse<T>>;

// Generic methods for axios
export const axiosRequest = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(url, config),
  post: <T>(url: string, data: any, config?: AxiosRequestConfig) =>
    axiosInstance.post<T>(url, data, config),
  patch: <T>(url: string, data: any, config?: AxiosRequestConfig) =>
    axiosInstance.patch<T>(url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<T>(url, config),
};
