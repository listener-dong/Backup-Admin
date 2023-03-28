<!-- 经典布局 -->
<!-- JavaScript -->
<script setup lang="ts">
import Main from "@/layout/components/main/index.vue";
import SubMenu from "@/layout/components/menu/SubMenu.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const isCollapse = computed(() => 1 + 1 === 3);

const menuList = [
  {
    path: "/home/index",
    name: "home",
    component: "/home/index",
    meta: {
      icon: "HomeFilled",
      title: "首页",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: true,
      isKeepAlive: true
    }
  },
  {
    path: "/dataScreen",
    name: "dataScreen",
    component: "/dataScreen/index",
    meta: {
      icon: "Histogram",
      title: "数据大屏",
      isLink: "",
      isHide: false,
      isFull: true,
      isAffix: false,
      isKeepAlive: true
    }
  }
];

const router = useRouter();
</script>

<!-- HTMl -->
<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div class="header-lf">
        <div class="logo flx-center">
          <img src="@/assets/images/logo.svg" alt="Backup-Admin" />
          <span>Backup-Admin</span>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="() => router.push('/login')">
          退出
        </el-button>
      </div>
    </el-header>
    <el-container class="classic-content">
      <!-- 菜单 -->
      <el-aside>
        <div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
          <el-scrollbar>
            <el-menu
              :router="false"
              :collapse="isCollapse"
              :collapse-transition="false"
              :unique-opened="true"
              background-color="#ffffff"
              text-color="#303133"
            >
              <SubMenu :menuList="menuList" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container class="classic-main">
        <Main />
      </el-container>
    </el-container>
  </el-container>
</template>

<!-- CSS -->
<style lang="scss">
@import "./index.scss";
.classic {
  .classic-content {
    height: calc(100% - 55px); // 减去头部高度
    .classic-main {
      display: flex;
      flex-direction: column;
    }
  }

  .el-menu,
  .el-menu--popup {
    .el-menu-item {
      &.is-active {
        background: var(--el-color-primary-light-9);
        &::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          content: "";
          background: var(--el-color-primary);
        }
      }
    }
  }

  // guide
  #driver-highlighted-element-stage {
    background-color: #606266 !important;
  }
}
</style>
