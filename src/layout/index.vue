<!-- JavaScript -->
<script setup lang="ts">
import { type Component } from "vue";
import Classic from "./layoutTheme/classic/index.vue";

const LayoutComponents: { [key: string]: Component } = {
  classic: Classic // 经典布局
};

// 监听布局变化，在 body 上添加相对应的 layout class
const body = document.body as HTMLElement;
body.setAttribute("class", "classic");
</script>

<!-- HTMl -->
<template>
  <!-- 🔥 <suspense> 是异步加载 LayoutComponents 
		<suspense>
			<template #default>
				<component :is="LayoutComponents[themeConfig.layout]" />
			</template>
			<template #fallback>
				<Loading />
			</template>
		</suspense>
	-->
  <!-- 💥 这里是一次性加载 LayoutComponents -->
  <component :is="LayoutComponents['classic']" />
</template>

<!-- CSS -->
<style scoped lang="scss"></style>
