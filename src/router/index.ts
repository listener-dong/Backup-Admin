// 路由实例
import {
  Router,
  createRouter,
  RouteRecordRaw
  // RouteComponent,
} from "vue-router";
import remainingRouter from "./modules/remaining";
import {
  ascending,
  getHistoryMode,
  formatTwoStageRoutes,
  formatFlatteningRoutes
} from "./utils";
import { buildHierarchyTree } from "@/utils/tree";

const modules: Record<string, any> = import.meta.glob(
  ["./modules/**/*.ts", "!./modules/**/remaining.ts"],
  {
    eager: true
  }
);

/** 原始静态路由（未做任何处理） */
const routes: any[] = [];

Object.keys(modules).forEach(key => {
  routes.push(modules[key].default);
});

/** 导出处理后的静态路由（三级及以上的路由全部拍成二级） */
export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(
  formatFlatteningRoutes(buildHierarchyTree(ascending(routes)))
);

/** 创建路由实例 */
export const router: Router = createRouter({
  history: getHistoryMode(),
  routes: constantRoutes.concat(...(remainingRouter as any)),
  strict: true,
  scrollBehavior(_to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
});

export default router;
