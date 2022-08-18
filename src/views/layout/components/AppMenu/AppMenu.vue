<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item key="1" class="menu-item">
      <pie-chart-outlined />
      <span>首页</span>
    </a-menu-item>
    <a-menu-item key="2" class="menu-item">
      <WarningOutlined />
      <!-- style="font-size: 25px !important" -->
      <span>InSAR数据感知</span>
    </a-menu-item>
    <a-sub-menu key="sub1" class="menu-item">
      <template #title>
        <span>
          <AreaChartOutlined />
          <span>地表数据感知</span>
        </span>
      </template>
      <a-menu-item key="3">高边坡</a-menu-item>
      <a-menu-item key="4">特大桥梁</a-menu-item>
      <a-menu-item key="5">深厚软基</a-menu-item>
      <!-- <a-menu-item key="8" @click="MineSee()">分析</a-menu-item> -->
    </a-sub-menu>
    <a-sub-menu key="sub2" class="menu-item">
      <template #title>
        <span>
          <team-outlined />
          <span>数据应用</span>
        </span>
      </template>
    </a-sub-menu>
    <a-sub-menu key="sub3" class="menu-item">
      <template #title>
        <span>
          <!-- <team-outlined /> -->
          勘察设计阶段
        </span>
      </template>
      <a-menu-item key="6">对症勘设</a-menu-item>
      <!-- <a-menu-item key="8" @click="MineSee()">特大桥梁</a-menu-item>
        <a-menu-item key="9" @click="MineSee()">深厚软基</a-menu-item> -->
      <!-- <a-menu-item key="8" @click="MineSee()">分析</a-menu-item> -->
    </a-sub-menu>
    <a-sub-menu key="sub4" class="menu-item">
      <template #title>
        <span>
          <!-- <team-outlined /> -->
          施工阶段
        </span>
      </template>

      <a-menu-item key="7">边坡开挖监测</a-menu-item>
      <a-menu-item key="8">软基预压效果</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub5" class="menu-item">
      <template #title>
        <span>
          <!-- <team-outlined /> -->
          运营阶段
        </span>
      </template>

      <a-menu-item key="9">靶向管养</a-menu-item>
      <a-sub-menu key="sub6" class="menu-item">
        <template #title>
          <span>
            <!-- <team-outlined /> -->
            监测预警
          </span>
        </template>

        <a-menu-item key="10">桥梁</a-menu-item>
        <a-menu-item key="11">边坡</a-menu-item>
        <a-menu-item key="12">软基</a-menu-item>
        <a-menu-item key="13">尾矿坝</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-menu-item key="14" class="menu-item">
      <user-outlined />
      <!-- style="font-size: 25px !important" -->
      <span>用户管理</span>
    </a-menu-item>
  </a-menu>
</template>
<script setup lang="ts">
import { ref } from "vue"
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  EnvironmentOutlined,
  WarningOutlined,
  AreaChartOutlined
} from "@ant-design/icons-vue"
const selectedKeys = ref<string[]>(["2"])
</script>
<style scoped lang="less">
.menu-item {
  font-size: 15px !important;
  // width:1rem
  margin-top: 40px !important;
  /* color: rgb(35, 99, 219) !important; */
}
.bbody {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  /* 100%的窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* 渐变背景 */
  background-color: aqua;
}
</style>
