import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
// 数据持久化
// * 对初始数据不进行数据的持久化操作，当对数据进行操作后数据进行持久化
pinia.use(piniaPluginPersistedstate);

export function setupStore(app: App<Element>) {
  app.use(pinia);
}

export { pinia };
