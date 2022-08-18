<template>
  <div class="ec1">
    <div class="panel bar">
      <h2>沉降量超越阈值个数</h2>
      <div class="chart" ref="chart1"></div>
      <div class="panel-footer"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick, onUnmounted } from "vue"
import * as echarts from "echarts"
import fsize from "@/utils/echartfont"
onMounted(() => {
  nextTick(() => {
    initEcharts()
  })
})
const chart1 = ref()
let mychart2
function initEcharts() {
  mychart2 = echarts.init(chart1.value, "dark")
  const data = {
    num: [
      [0.5, -2, 6, -4.3, -2.521, 8],

      [5, -7.2, 3.55, -2.3, 8, 0]
    ]
  }
  const option2 = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: { trigger: "axis" },
    legend: {
      right: "10%",
      itemStyle: {
        color: "inherit"
      }
    },
    grid: { top: "10%", bottom: "10%", left: 0, right: "3%", show: true, borderColor: "#012f4a", containLabel: true },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["一月", "二月", "三月", "四月", "五月", "六月"],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)",
        fontSize: fsize(15)
      },

      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)",
        fontSize: fsize(15)
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "半年",
        type: "line",
        smooth: true,
        symbol: "circle",
        data: data.num[0],
        label: {
          fontSize: fsize(15)
        }
      },
      {
        name: "平均",
        type: "line",
        smooth: true,
        data: data.num[1],
        label: {
          fontSize: fsize(15)
        },
        symbol: "circle"
      }
    ]
  }
  mychart2.setOption(option2)
}

onMounted(() => {
  window.addEventListener("resize", () => {
    mychart2.resize()
  })
})
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    mychart2.resize()
  })
})

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
    padding-top: 15px;
    // background-color: #ccc;
    display: flex;
    // justify-content: center;
    padding-left: 40px;
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
