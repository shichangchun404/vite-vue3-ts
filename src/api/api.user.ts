import axios from "@/api/axios"

export const getUserInfo = (): any => {
  return axios.get("/api/user/getUserInfo")
}
