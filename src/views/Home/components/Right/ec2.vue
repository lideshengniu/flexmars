<template>
  <div class="ec1">
    <ul>
      <li class="smchart" v-for="(items, index) in smchart" :key="index">
        <div class="title">{{ items.title }}</div>
        <div>{{ items.value }}</div>
      </li>
    </ul>
    <div class="content yujin">
      <div class="chart" ref="yujin2"></div>
      <div class="title">实时<br />
        警告</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick, onUnmounted } from "vue"
import * as echarts from "echarts"
import fsize from "@/utils/echartfont"
const yujin2 = ref()

const smchart = ref([
  {
    title: "正常",
    value: 500
  },
  {
    title: "一级",
    value: 500
  },
  {
    title: "二级",
    value: 500
  },
  {
    title: "三级",
    value: 500
  }
])
onMounted(() => {
  nextTick(() => {
    initEcharts()
  })
})

let mychart5
function initEcharts() {
  mychart5 = echarts.init(yujin2.value, "dark")
  const option5 = {
    tooltip: {
      trigger: "item",
      formatter: "{a}<br/>{b}:{c} ({d}%)",
      position: function (p) {
        return [p[0] + 10, p[1] - 10]
      }
    },
    legend: {
      top: "25%",
      left: "50%",
      itemWidth: fsize(25),
      itemHeigth: fsize(25),
      orient: "vertical",
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
        center: ["90%", "70%"],
        radius: ["40%", "60%"],
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 10, name: "正常" },
          { value: 0, name: "一级" },
          { value: 0, name: "二级" },
          { value: 0, name: "三级" }

        ]
      }
    ]
  }
  mychart5.setOption(option5)
}

onMounted(() => {
  window.addEventListener("resize", () => {
    mychart5.resize()
  })
})
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    mychart5.resize()
  })
})
</script>
<style scoped lang="less">
.ec1 {
  color: #fff;
  height: 100%;
  width: 100%;
  // background-color: #ccc;
  padding: 20px;

  ul {
    width: 100%;
    height: 60px;
    // background-color: #ccc;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;

    .smchart {
      width: 70px;
      height: 60px;
      background: rgba(240, 240, 240, 0.072);
      // padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;

      .title {
        font-size: 16px;
        font-weight: 700;


      }
    }

    .smchart:hover {
      color: rgb(8, 16, 253);
      cursor: pointer;
    }

  }

  .content {
    width: 100%;
    height: calc(100% - 70px);
    // background-color: red;
    position: relative;

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-400%, -50%);
      font-size: 20px;
      font-weight: 700;
    }
  }
}

// .panel {
//   // position: relative;
//   height: 100%;
//   // // background-color: red;

//   // padding: 0 0.1875rem 0.5rem;
//   // margin-bottom: 0.1875rem;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   h2 {
//     width: 100%;
//     height: 20%;
//     // background-color: #ccc;
//     display: flex;
//     padding-top: 15px;
//     // justify-content: center;
//     padding-left: 40px;
//     align-items: center;
//     font-size: 20px;
//     color: #fff;
//     font-weight: 700;
//     position: relative;
//     &::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 2px;
//       height: 100%;
//       background-color: #ccc;
//     }
//   }
// }

.chart {
  // background-color: red;
  // position: absolute;
  // top: 0;
  // left: 0;
  z-index: 5;
  height: 80%;
  width: 90%;
}

// .borderBox {
//   width: 100%;
//   height: 100%;
//   background: rgba(255, 255, 255, 0.04) url(./images/line1.png);
//   background-color: rgba(235, 223, 223, 0.1);

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .yujin {
//     height: 100%;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     .a {
//       flex: 3;
//       position: relative;
//     }
//     .a:nth-child(1) {
//       flex: 0.5;
//     }
//     .a:nth-child(2) {
//       flex: 4;
//     }
//     .a:nth-child(3) {
//       flex: 0.5;
//     }
//     .a:nth-child(4) {
//       flex: 5;
//     }
//     .title {
//       div {
//         width: 100%;
//         height: 20%;
//         // background-color: #ccc;
//         display: flex;
//         // justify-content: center;
//         padding-left: 40px;
//         align-items: center;
//         font-size: 20px;
//         color: #fff;
//         font-weight: 700;
//         position: relative;
//         &::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 2px;
//           height: 100%;
//           background-color: #ccc;
//         }
//       }
//     }
//     // .down {
//     //   // background-color: blue;
//     // }
//     .smchart {
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       // background-color: rgb(9, 0, 128);
//       .b {
//         flex: 2.5;
//         // background-color:;
//         margin: 5px;
//         font-size: 25px;
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-around;
//         line-height: 25px;
//         height: 25px;
//         text-align: center;
//         // background-color: red;
//         .f {
//           margin-top: 25px;
//           margin-bottom: 25px;
//         }
//         .e {
//           font-size: 25px;
//         }
//       }

//       .e {
//         flex: 5;
//         // width: 50%;
//         // width: 50px;
//         height: 50%;
//         font-size: 30px;
//         // background-color: red;
//       }
//     }

//     // .smchart {
//     //   // background-color: green;
//     // }
//   }
// }

.green {
  color: green;
}

.blue {
  color: skyblue;
}

.yellow {
  color: yellow;
}

.red {
  color: red;
}
</style>
