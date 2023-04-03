import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

const instance: AxiosInstance = axios.create({
  timeout: 60 * 1000,
  headers: { "X-Custom-Header": "customer" },
  baseURL: "/",
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    const result = res.data
    return result
  },
  (error: AxiosResponse) => {
    return Promise.reject(error)
  }
)

export default instance
