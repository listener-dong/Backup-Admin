import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
// 数据持久化
pinia.use(piniaPluginPersistedstate);

export function setupStore(app: App<Element>) {
  app.use(pinia);
}

export { pinia };
