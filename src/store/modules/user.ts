import { defineStore } from "pinia";
import { pinia } from "@/store";
import { PersistedStateOptions } from "pinia-plugin-persistedstate";

interface PersistedStateOptionsAdmin extends PersistedStateOptions {
  enabled?: boolean;
}

export const useUserStore = defineStore({
  id: "pinia-user",
  state: () => ({
    // 用户名
    username: "admin"
  }),
  actions: {
    /** 存储用户名 */
    SET_USERNAME(username: string) {
      this.username = username;
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: sessionStorage, paths: ["userName"] }]
  } as PersistedStateOptionsAdmin
});

export function useUserStoreHook() {
  return useUserStore(pinia);
}
