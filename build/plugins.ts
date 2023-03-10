import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vueJsx from "@vitejs/plugin-vue-jsx";
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
import { vitesStartInfo, viteBuildInfo } from "./info";

export const getPluginsList = (
  _command: string,
  _VITE_CDN: boolean,
  _VITE_COMPRESSION: ViteCompression
) => {
  return [
    vue(),
    DefineOptions(),
    // * EsLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    // jsx、tsx语法支持
    vueJsx(),
    vitesStartInfo(),
    viteBuildInfo()
  ];
};
