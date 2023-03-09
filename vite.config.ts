import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
/*
  // tsconfig.JSON.stringify
  配置 defineOptions 
  {
    "compilerOptions":{
      "types":["unplugin-vue-define-options/macros-global"]
    }
  }
   "unplugin-vue-define-options/macros-global"
*/
import DefineOptions from "unplugin-vue-define-options/vite";

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build")
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias
  },
  plugins: [
    vue(),
    DefineOptions(),
    // * EsLint 报错信息显示在浏览器界面上
    eslintPlugin()
  ],
  build: {
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: pathResolve("index.html")
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]"
      }
    }
  }
});
