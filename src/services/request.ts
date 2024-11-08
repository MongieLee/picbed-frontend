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

export const needBusinessCodeApiList = [
  // 排行榜文章相关
  "/gameleaderboardcommentlike",
  "/gameleaderboardlike",
  "/addgameleaderboardcomment",

  // 游戏资讯文章相关
  "/gamearticlecommentlike",
  "/gamearticlelike",
  "/addgamearticlecomment",

  // 活动相关
  "/startraffle",

  // dcb相关
  "/bbsarticlecommentlike",
  "/addbbsarticlecomment",
  "/bbsarticlelike",

  // 领取礼包码
  "/game/getgamearticlegitfcode",

  // web登录
  "/raffleweblogin",

  // 领取vip补偿
  "/user/usercompensateviptime",

  // 获取验证码
  "/sendrafflecode"
];

const requestRespInterceptor = (response: AxiosResponse) => {
  if (needBusinessCodeApiList.some(i => response.config.url === i)) {
    return response.data as BaseJsonResponse;
  }
  return response.data["result"];
}

request.interceptors.response.use(requestRespInterceptor)

export type BaseJsonResponse<T = object> = {
  data: T
  code: number
  msg: string
  success: boolean
}

export default request;