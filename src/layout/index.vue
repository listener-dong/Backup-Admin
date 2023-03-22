<!-- JavaScript -->
<script setup lang="ts"></script>

<!-- HTMl -->
<template>
  <!-- 🔥 这里是异步加载 LayoutComponents -->
  <suspense>
    <div><router-view /></div>
  </suspense>
  <h1>layout</h1>
</template>

<!-- CSS -->
<style scoped lang="scss"></style>
