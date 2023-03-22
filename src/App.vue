<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import Layout from "@/layout/index.vue";
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped>
// .layout {
// div {
//   background-color: greenyellow;
// }
// }
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
