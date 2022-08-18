<template>
  <div class="ec1">
    <div class="panel bar">
      <h2>沉降量超越阈值个数</h2>
      <div class="chart" ref="sensor"></div>
      <div class="panel-footer"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick, onUnmounted } from "vue"
import fsize from "@/utils/echartfont"
import * as echarts from "echarts"
onMounted(() => {
  nextTick(() => {
    initEcharts()
  })
})
const sensor = ref()
let mychart4
function initEcharts() {
  mychart4 = echarts.init(sensor.value, "dark")
  const data4 = [100, 80, 20]
  const valdata = [10, 8, 2]
  const titlename = ["总数", "正常", "损坏"]
  const color4 = ["#1089E7", "#F57474", "#56D0E3"]

  const option4 = {
    grid: {
      top: "2%",
      left: "15%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        offset: 10,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",
          fontSize: fsize(15),

          // rich: {
          //   lg: {
          //     backgroundColor: "#339911",
          //     color: "#fff",
          borderRadius: 15,
          // padding: 5,
          align: "center",
          width: 10,
          height: 10
          //   }
          // }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          fontSize: fsize(15),
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data4,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 20
          // color: function (params) {
          //   const num = color4.length
          //   return color4[params.dataIndex % num]
          // }
        },
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 5,
        data: [10, 10, 10],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  }

  mychart4.setOption(option4)

}

onMounted(() => {
  window.addEventListener("resize", () => {
    mychart4.resize()
  })
})
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    mychart4.resize()
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


