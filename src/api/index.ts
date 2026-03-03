import axios, { AxiosError, type AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
  headers: {
    'Content-Type': 'application/json',
  },
});

type ErrorResponse = AxiosError & {
  response: AxiosResponse<{
    statusCode: number;
    message: string;
    error: string;
  }>;
};

api.interceptors.response.use(
  (response) => response.data,
  (error: ErrorResponse) => {
    return Promise.reject(error.response.data.message || error.message);
  },
);
