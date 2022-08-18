<template>
  <div class="ec1">
    <div class="panel bar">
      <h2>沉降量超越阈值个数</h2>
      <div class="chart" ref="circle1"></div>
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
const circle1 = ref()
let mychart3
function initEcharts() {
  mychart3 = echarts.init(circle1.value, "dark")
  const option3 = {
    tooltip: {
      trigger: "item",
      formatter: "{a}<br/>{b}:{c} ({d}%)",
      position: function (p) {
        return [p[0] + 10, p[1] - 10]
      }
    },
    legend: {
      top: "5%",
      left: "1%",
      itemWidth: 10,
      itemHeigth: 10,
      // data: ["0-5 mm/ly", "0-10 mm/ly", "0 - -5 mm/ly", "10-15 mm/ly", "-5- -10 mm/ly"],
      textStyle: {
        color: "ragba(255,255,255,.5)",
        fontSize: fsize(15)
      }
    },
    series: [
      {
        name: "沉降区域分布",
        type: "pie",
        center: ["70%", "60%"],
        radius: ["40%", "60%"],
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        label: {
          show: false,
          fontSize: fsize(15)
        },
        labelLine: { show: false },
        data: [
          { value: 1, name: "沉降量0-(-5) mm/ly" },
          { value: 5, name: "沉降量0-(-10) mm/ly" },
          { value: 4, name: "沉降量在0-5 mm/ly" },
          { value: 5, name: "沉降量5-10 mm/ly" },
          { value: 7, name: "沉降量5-15 mm/ly" }
        ]
      }
    ]
  }
  mychart3.setOption(option3)

}

onMounted(() => {
  window.addEventListener("resize", () => {
    mychart3.resize()
  })
})
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    mychart3.resize()
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
    // background-color: #ccc;
    display: flex;
    padding-top: 15px;
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
