import request from "~/services/request.ts";

/**
 * 登录服务
 */
class LoginService {
  /**
   * 登录
   */
  static login(data: any) {
    const url = "/auth/login";
    return request({
      url,
      method: "POST",
      data: data
    }) as Promise;
  }
}

export default LoginService;