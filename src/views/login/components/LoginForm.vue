<!-- JavaScript -->
<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";
import { Login } from "@/api/interface";
import { User, Lock, CircleClose, UserFilled } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();

const loginForm = reactive<Login.ReqLoginForm>({ username: "", password: "" });

const loading = ref(false);

const router = useRouter();

const resetForm = (formEl: FormInstance | undefined) => {
  console.log(formEl);
};
const login = (formEl: FormInstance | undefined) => {
  console.log(formEl);
  // 4.跳转到首页
  router.push("/");
};
</script>

<!-- HTMl -->
<template>
  <el-form ref="loginFormRef" :model="loginForm">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin/user">
        <template #prefix>
          <el-icon class="el-input__icon"><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="loginForm.password"
        placeholder="密码：123456"
        show-password
        autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round @click="resetForm(loginFormRef)"
      >重置</el-button
    >
    <el-button
      :icon="UserFilled"
      round
      @click="login(loginFormRef)"
      type="primary"
      :loading="loading"
    >
      登录
    </el-button>
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss"></style>
