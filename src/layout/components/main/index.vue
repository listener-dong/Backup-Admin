<!-- JavaScript -->
<script setup lang="ts">
import Footer from "./../footer/index.vue";
</script>

<!-- HTMl -->
<template>
  <el-main>
    <router-view />
  </el-main>
  <el-footer>
    <Footer />
  </el-footer>
</template>

<!-- CSS -->
<style scoped lang="scss">
@import "./index.scss";
</style>
