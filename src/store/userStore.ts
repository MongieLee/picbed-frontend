import {defineStore} from "pinia";
import {reactive} from "vue";

export interface UserBaseInfo {
  id: number
  userId: number
  avatar: string
  nickname: string
  status: number
  username: string
  createAt: string
}

type UserInfo = {
  token: null | string
  refreshToken: null | string
  baseInfo: null | UserBaseInfo
}

const useUserStore = defineStore("userStore", () => {
  const userInfo = reactive<UserInfo>({
    token: null,
    refreshToken: null,
    baseInfo: null
  })

  const setUserToken = (token: string) => {
    userInfo.token = token
  }

  const setUserRefreshToken = (token: string) => {
    userInfo.refreshToken = token
  }

  const setUserInfo = (info: UserBaseInfo) => {
    userInfo.baseInfo = info
  }

  return {
    userInfo,
    setUserToken,
    setUserRefreshToken,
    setUserInfo
  }
},)

export default useUserStore