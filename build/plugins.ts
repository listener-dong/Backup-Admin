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
// 自动注册全局组件
import Components from "unplugin-vue-components/vite";
// element-plus 组件 按需引入
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export const getPluginsList = (
  _command: string,
  _VITE_CDN: boolean,
  _VITE_COMPRESSION: ViteCompression
) => {
  return [
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        })
      ],
      dts: "types/global-components.d.ts"
    }),
    DefineOptions(),
    // * EsLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    // jsx、tsx语法支持
    vueJsx(),
    // 运行终端提示
    vitesStartInfo(),
    // 打包终端提示
    viteBuildInfo()
  ];
};
