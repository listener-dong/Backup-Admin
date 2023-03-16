import { UserConfigExport, ConfigEnv, loadEnv } from "vite";
import { resolve } from "path";
import { warpperEnv } from "./build";
import { getPluginsList } from "./build/plugins";

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build")
};

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const { VITE_CDN, VITE_PORT, VITE_COMPRESSION, VITE_PUBLIC_PATH } =
    warpperEnv(loadEnv(mode, root));
  return {
    base: VITE_PUBLIC_PATH,
    root, // 项目根目录（index.html 文件所在的位置）
    resolve: {
      alias
    },

    // 服务端渲染
    server: {
      open: true,
      https: false, // 是否开启https
      port: VITE_PORT, // 本地启动端口号
      host: "0.0.0.0",
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {}
    },

    plugins: getPluginsList(command, VITE_CDN, VITE_COMPRESSION),
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
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "element-plus/dist/index.css" as *;`
        }
      }
    }
  };
};
