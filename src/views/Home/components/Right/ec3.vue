<template>
  <div class="ec3">
    <div class="title">
      <div>名字</div>
      <div>位置</div>
      <div>状态</div>
    </div>
    <div class="content">
      <div class="M" v-for="(items, index ) in data" :key="index">
        <div>{{ items.title + index }}</div>
        <div>{{ items.weizhi }}</div>
        <div>{{ items.status }}</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue"
import gd from "./gongdian/index.vue"
const data = ref([
  {
    id: 1,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "离线"
  },
  {
    id: 2,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "正常"
  },
  {
    id: 3,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "离线"
  },
  {
    id: 4,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "正常"
  },
  {
    id: 5,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "离线"
  },
  {
    id: 6,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "离线"
  },
  {
    id: 7,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "离线"
  },
  {
    id: 8,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "离线"
  },
  {
    id: 9,
    title: "zhangsan",
    weizhi: "201.513.264.15",
    status: "离线"
  }
])
</script>
<style scoped lang='less'>
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #0e1630;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3); */
  background-color: #ccc;
}

.ec3 {
  width: 100%;
  height: 100%;
  // background-color: #ccc;
  padding: 10px 20px;
  color: #fff;

  .title {
    width: 100%;
    height: 50px;
    // background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
      font-weight: 700;
    }
  }

  .content {
    width: 100%;
    height: calc(90% - 50px);
    overflow-y: auto;

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #0e1630;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3); */
      background-color: #ccc;
    }

    .M {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 40px;
      line-height: 30px;
    }

    .M:nth-child(2n) {
      color: rgb(35, 96, 195);
    }
  }
}
</style>

