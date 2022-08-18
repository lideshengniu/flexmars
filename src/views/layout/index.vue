<template>
  <a-layout style="height: 100vh">
    <a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <HedaerAAA />
      </a-layout-header>
      <a-layout-content>
        <Router-view></Router-view>
      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import HedaerAAA from "./components/Head/index.vue"
</script>
<script lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons-vue"
import { defineComponent, ref } from "vue"

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type)
    }

    const onBreakpoint = (broken: boolean) => {
      console.log(broken)
    }

    return {
      selectedKeys: ref<string[]>(["4"]),
      onCollapse,
      onBreakpoint
    }
  }
})
</script>
<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>
