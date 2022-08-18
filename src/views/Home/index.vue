<template>
  <div class="home">
    <div class="zuo">
      <div class="zuo-zuo zuo-1">
        <left1 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
      <div class="zuo-zuo zuo-2">
        <left2 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
      <div class="zuo-zuo zuo-3">
        <left3 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
    </div>
    <div class="zhong">
      <mars />
      <div class="panel-zhong">
        <div class="inner-zhong"></div>
      </div>
    </div>
    <div class="you">
      <div class="you-you you-1">
        <right1 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
      <div class="you-you you-2">
        <right2 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
      <div class="you-you you-3">
        <right3 class="Zinex" />
        <div class="panel">
          <div class="inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import chart from "./chart/index.vue"
import mars from "@mars/views/index.vue"
import left1 from "./components/Left/ec1.vue"
import left2 from "./components/Left/ec2.vue"
import left3 from "./components/Left/ec3.vue"
import right1 from "./components/Right/ec1.vue"
import right2 from "./components/Right/ec2.vue"
import right3 from "./components/Right/ec3.vue"
</script>
<style scoped lang="less">
.panel {
  position: absolute;
  top: 4%;
  left: 2%;
  border: 35px solid transparent;
  border-width: 80px 60px 20px 150px;
  border-image-source: url(./images/border.png);
  border-image-slice: 51 38 20 132;
  margin-bottom: 20px;
  color: red;
  width: 96%;
  height: 92%;
  z-index: 1;

  .inner {
    position: absolute;
    /* 将边框的宽度设置负值 */
    top: 20px;
    left: 100px;
    bottom: 100px;
    right: 100px;
    padding: 100px;
  }
}

.home {
  display: flex;
  width: 100%;
  height: 100%;
  background: url("./images/bg.jpg") no-repeat center;
  background-size: cover;

  .zuo {
    height: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;

    &-zuo {
      box-sizing: border-box;
      padding: 10px;
      flex: 3.3;
      position: relative;

      .Zinex {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    }

    &-1 {
      width: 100%;
      height: 33%;
    }

    &-2 {
      width: 100%;
      height: 34%;
    }

    &-3 {
      width: 100%;
      height: 33%;
    }
  }

  .zhong {
    height: 100%;
    flex: 4;
    padding: 20px;
    position: relative;
    border-radius: 0 100px 0 100px !important;
    overflow: hidden !important;

    .panel-zhong {
      position: absolute;
      top: 2%;
      left: 2%;
      border: 35px solid transparent;
      border-width: 80px 60px 20px 150px;
      border-image-source: url(./images/border.png);
      border-image-slice: 51 38 20 132;
      margin-bottom: 20px;
      color: red;
      width: 96%;
      height: 96%;
      pointer-events: none; // 禁止鼠标事件

      .inner-zhong {
        position: absolute;
        /* 将边框的宽度设置负值 */
        top: 20px;
        left: 100px;
        bottom: 100px;
        right: 100px;
        padding: 100px;
      }
    }
  }

  .you {
    height: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;

    &-you {
      box-sizing: border-box;
      padding: 10px;
      flex: 3.3;
      // border: 1px solid rgba(25, 186, 139, 0.17);
      // background: rgba(255, 255, 255, 0.04) url(./images/line1.png);
      position: relative;

      .Zinex {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    }

    &-1 {
      width: 100%;
      height: 33%;
    }

    &-2 {
      width: 100%;
      height: 34%;
    }

    &-3 {
      width: 100%;
      height: 33%;
    }
  }
}
</style>
