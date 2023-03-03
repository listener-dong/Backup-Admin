<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
// import Layout from "@/layout/index.vue";
import { useRouter } from "vue-router";
import { useUserStoreHook } from "@/store/modules/user";
import { computed } from "vue";

const username = computed(() => useUserStoreHook().username);

const router = useRouter();
useUserStoreHook().SET_USERNAME("HelloWorld");
</script>

<template>
  <!-- 首页 -->
  <div class="bg-bg_color w-full h-full layout">
    <h2 class="text-white">{{ username }}</h2>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue3" />
    <el-button
      type="primary"
      plain
      @click="
        () => {
          router.push('login');
        }
      "
      >login</el-button
    >
    <el-button
      type="primary"
      plain
      @click="
        () => {
          router.push('about');
        }
      "
      >about</el-button
    >
    <el-button
      type="primary"
      plain
      @click="
        () => {
          router.push('welcome');
        }
      "
      >welcome</el-button
    >
    <div><router-view /></div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  div {
    background-color: greenyellow;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
