<!-- JavaScript -->
<script setup lang="ts">
import LoginForm from "./components/LoginForm.vue";

defineOptions({ name: "Login" });
</script>

<!-- HTMl -->
<template>
  <div class="w-full h-full relative bg-blue-50">
    <div
      class="w-96 p-8 bg-white absolute top-1/3 right-32 shadow-xl shadow-dark-500 rounded border border-gray-50"
    >
      <LoginForm />
    </div>
  </div>
</template>

<!-- CSS -->
<style scoped lang="scss"></style>
