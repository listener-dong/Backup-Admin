<!-- JavaScript -->
<script setup lang="ts">
import { provide, ref } from "vue";

// 提供响应式的值
const count = ref(0);
provide("num", count);
</script>

<!-- HTMl -->
<template>
  <el-button
    type="primary"
    @click="
      () => {
        count++;
      }
    "
    >{{ count }}</el-button
  >
  <div>首页</div>
</template>

<!-- CSS -->
<style scoped lang="scss"></style>
