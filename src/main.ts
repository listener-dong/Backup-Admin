import { createApp } from "vue";
import App from "./App.vue";
import "./style/index.css";
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import "./style/tailwind.css";
// element-plus采用全局引入的方式，打包后大小影响并不大
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementPlus);

app.mount("#app");
