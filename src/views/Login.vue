<script setup lang="ts">
import {computed, reactive} from "vue";
import Bg from "~/assets/bg.jpg"
import {LockOutlined, UserOutlined} from '@ant-design/icons-vue';
import LoginService from "~/services/loginService";
import {useRouter} from "vue-router";
import useUserStore from "../store/userStore.ts";
import {message} from "ant-design-vue";

const router = useRouter()

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const userStore = useUserStore()

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = async (values: any) => {
  let res
  try {


    res = await LoginService.login(values)
    if (res.code == 200) {
      userStore.setUserToken(res.token)
      userStore.setUserRefreshToken(res.refreshToken)
      userStore.setUserInfo(res.userInfo)
      router.push({name: "home"})
    } else {
      message.error(res.msg)
    }
  } catch (e) {
    message.error(e as any)
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>

<template>
  <a-row class="h-full">
    <a-col :span="16">
      <img class="h-full bg-cover" :src="Bg" alt="">
    </a-col>
    <a-col :span="8" class="flex flex-col justify-center items-center">
      <div>Picbed</div>
      <a-form :model="formState" name="normal_login" class="flex flex-col justify-center items-center p-[32px]"
              @finish="onFinish"
              @finishFailed="onFinishFailed">
        <a-form-item label="账号" name="username"
                     :rules="[{ required: true, message: '请输入账号' }]">
          <a-input v-model:value="formState.username" class="w-[300px]">
            <template #prefix>
              <UserOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="密码" name="password"
                     :rules="[{ required: true, message: '请输入密码' }]">
          <a-input-password v-model:value="formState.password" class="w-[300px]">
            <template #prefix>
              <LockOutlined class="site-form-item-icon"/>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          </a-form-item>
          <a class="login-form-forgot" href="">忘记密码</a>
        </a-form-item>
        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<style lang="less" scoped>
//#components-form-demo-normal-login .login-form {
//  max-width: 300px;
//}
//#components-form-demo-normal-login .login-form-forgot {
//  float: right;
//}
//#components-form-demo-normal-login .login-form-button {
//  width: 100%;
//}
</style>
