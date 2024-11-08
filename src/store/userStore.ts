import {defineStore} from "pinia";
import {reactive} from "vue";

export interface UserBaseInfo {
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
},)

export default useUserStore