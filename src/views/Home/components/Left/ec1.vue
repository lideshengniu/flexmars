<template>
  <div class="ec1">
    <div class="panel bar">
      <h2>沉降量超越阈值个数</h2>
      <div class="chart" ref="bar1"></div>
      <div class="panel-footer"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick, onUnmounted } from "vue"
import * as echarts from "echarts"
// 自适应echarts 的字体大小
import fsize from "@/utils/echartfont"
onMounted(() => {
  nextTick(() => {
    initEcharts()
  })
})



let mychart1
function initEcharts() {
  mychart1 = echarts.init(bar1.value, "dark")
  const option1 = {
    // textStyle: fsize(15),
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      show: true,
      left: "0%",
      top: "5%",
      right: "0%",
      bottom: "10%",
      containLabel: true,
      backgroundColor: "transparent",
      ShadowColol: "yellow",
      shadowOffsetX: 3
    },
    xAxis: [
      {
        type: "category",
        data: ["一月", " 二月", "三月", "四月", "五月", "六月"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: fsize(15)
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          // fontSize: fontsize(10),
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"

            }
          },
          fontSize: fsize(15)

        }
      }
    ],
    series: [
      {
        name: "点数",
        type: "bar",
        barWidth: "35%",
        data: [2, 3, 4, 1, 6, 2],
        itemStyle: {
          barBorderRadius: fsize(6)
        }
      }
    ]
  }
  mychart1.setOption(option1)
}

onMounted(() => {
  window.addEventListener("resize", () => {
    mychart1.resize()
  })
})
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    mychart1.resize()
  })
})
const bar1 = ref()
</script>
<style scoped lang="less">
.ec1 {
  color: #fff;
  height: 100%;
  width: 100%;
  // background-color: red;
}

.panel {
  // position: relative;
  height: 100%;
  // // background-color: red;

  // padding: 0 0.1875rem 0.5rem;
  // margin-bottom: 0.1875rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 100%;
    height: 20%;
    // background-color: #ccc;
    display: flex;
    // justify-content: center;
    padding-left: 40px;
    padding-top: 15px;
    align-items: center;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-color: #ccc;
    }
  }
}

.chart {
  // background-color: red;
  // position: absolute;
  // top: 0;
  // left: 0;
  z-index: 5;
  height: 80%;
  width: 90%;
}
</style>
