import { readdir, stat } from "fs";
import dayjs, { Dayjs } from "dayjs";
import type { PluginOption, ViteDevServer } from "vite";
import colors from "picocolors";
import duration from "dayjs/plugin/duration";
import { sum } from "lodash-unified";
dayjs.extend(duration);

const staticPath = "dist/static";
const fileListTotal: number[] = [];

const recursiveDirectory = (folder: string, callback: Function): void => {
  readdir(folder, (err, files: string[]) => {
    if (err) throw err;
    let count = 0;
    const checkEnd = () => {
      ++count == files.length && callback();
    };
    files.forEach((item: string) => {
      stat(folder + "/" + item, async (err, stats) => {
        if (err) throw err;
        if (stats.isFile()) {
          fileListTotal.push(stats.size);
          checkEnd();
        } else if (stats.isDirectory()) {
          recursiveDirectory(`${staticPath}/${item}/`, checkEnd);
        }
      });
    });
    files.length === 0 && callback();
  });
};

const formatBytes = (a: number, b?: number): string => {
  if (0 == a) return "0 Bytes";
  const c = 1024,
    d = b || 2,
    e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    f = Math.floor(Math.log(a) / Math.log(c));
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
};

/**
 * @description 代码运行提示
 */
export function vitesStartInfo(): PluginOption {
  return {
    name: "vite:start",
    apply: "serve",
    enforce: "pre",
    configureServer(server: ViteDevServer) {
      const print = server.printUrls;
      server.printUrls = () => {
        const network = server.resolvedUrls?.network[0];
        const local = server.resolvedUrls?.local[0];
        if (!network && !local) {
          console.log(
            colors.red(
              "获取IP地址失败,请检查vite.config.ts文件中server.host配置是否正确!\n"
            )
          );
        } else {
          console.log(
            colors.bold(
              colors.green(
                `👏👏👏 运行成功，欢迎使用${colors.blue("[Backup-Admin]")}`
              )
            )
          );
          console.info(
            colors.green(
              "                    _________________________________________________ \n" +
                "            /|     |                                                 | \n" +
                "            ||     |                                                 | \n" +
                "       .----|-----,|                                                 | \n" +
                "       ||  ||   ==||       " +
                colors.bold(colors.red("Welcome ")) +
                colors.bold(colors.blue("Backup-Admin...")) +
                "                   | \n" +
                "  .-----'--'|   ==||                                                 | \n" +
                "  |)-      ~|     ||_________________________________________________| \n" +
                "  | ___     |     |____...==..._  >______________________________| \n" +
                ' [_/.-."--"-------- //.-.  .-.\\/   |/            \\ .-.  .-. // \n' +
                '   ( o )`==="""""""""`( o )( o )     o              `( o )( o )`  \n' +
                "    '-'                '-'  '-'                       '-'  '-' \n"
            )
          );
          print();
        }
      };
    }
  };
}

/**
 * @description 打包完成提示
 */
export function viteBuildInfo(): PluginOption {
  let config: { command: string };
  let startTime: Dayjs;
  let endTime: Dayjs;
  return {
    name: "vite:build",
    configResolved(resolvedConfig: { command: string }) {
      config = resolvedConfig;
    },
    buildStart() {
      if (config.command === "build") {
        startTime = dayjs(new Date());
      }
    },
    closeBundle() {
      if (config.command === "build") {
        console.log(
          colors.bold(
            colors.green(`👏欢迎使用${colors.blue("[Backup-Admin]")}`)
          )
        );
        endTime = dayjs(new Date());
        recursiveDirectory(staticPath, () => {
          console.log(
            colors.bold(
              colors.green(
                `恭喜打包完成🎉（总用时${dayjs
                  .duration(endTime.diff(startTime))
                  .format("mm分ss秒")}，打包后的大小为${formatBytes(
                  sum(fileListTotal)
                )}）`
              )
            )
          );
        });
      }
    }
  };
}
