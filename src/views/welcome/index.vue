<!-- JavaScript -->
<script setup lang="ts">
import { onMounted } from "vue";
import { provide, ref } from "vue";

// 仅支持 Vue 3.3+ 支持defineOptions 移除unplugin-vue-define-options插件
defineOptions({ name: "welcome" });

// 提供响应式的值
const count = ref(0);
provide("num", count);

onMounted(() => {
  console.log("进入");
});
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
