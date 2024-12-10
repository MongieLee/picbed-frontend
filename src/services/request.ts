import axios, {AxiosResponse} from "axios";

const request = axios.create({
  timeout: 5000,
  baseURL: import.meta.env["VITE_SERVER_API_URL"] + "/api/v1"
});

request.interceptors.request.use((config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export const needBusinessCodeApiList = [];

const requestRespInterceptor = (response: AxiosResponse) => {
  return response.data;
}

request.interceptors.response.use(requestRespInterceptor)

export type BaseJsonResponse<T = object> = {
  data: T
  code: number
  msg: string
  success: boolean
}

export default request;