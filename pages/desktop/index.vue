<template>
  <div class="desk">
    <div class="huipu">
      <h1>
        <span>惠普/HP</span>
      </h1>
      <div class="bigbox">
        <Card v-for="(item,i) in yunDate" :key="i" class="box">
          <div class="img">
            <img class="tu" :src="item.isp" alt />
          </div>
          <div class="text">{{item.text}}</div>
          <p class="price">最高限价：￥{{item.price}}</p>
        </Card>
      </div>
    </div>
    <div class="huipu wow animated slideInUp" data-wow-duration="2s">
      <h1>
        <span>惠普/HP</span>
      </h1>
      <div class="bigbox">
        <Card v-for="(item,i) in yunDate" :key="i" class="box">
          <div class="img">
            <img class="tu" :src="item.isp" alt />
          </div>
          <div class="text">{{item.text}}</div>
          <p class="price">最高限价：￥{{item.price}}</p>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}
export default {
  asyncData() {},
  data() {
    return {
      yunDate: ""
    };
  },
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({
        // boxClass: "wow",
        // animateClass: "animated",
        live: false,
        mobile: true,
        offset: -20
      }).init();
    }
    axios.get("/message/yunzhuomian").then(res => {
      this.yunDate = res.data;
    });
  }
};
</script>

<style lang="less" scoped>
.desk {
  width: 50%;
  height: 2500px;
  margin: auto;
  font-size: 12px;
  .huipu {
    h1 {
      height: 50px;
      display: flex;
      align-items: flex-end;
      text-align: left;
      border-bottom: 2px solid #e54243;
      span {
        background: #e54243;
        color: #ffffff;
      }
    }
  }
  .bigbox {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .box {
      width: 22%;
      height: 360px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      margin-left: 20px;
      .img {
        width: 80%;
        height: 200px;
        .tu {
          height: 100%;
          width: 100%;
        }
      }
      .text {
        width: 90%;
        height: 100px;
        display: flex;
        align-items: center;
        font-weight: 600;
      }
      .price {
        color: #3b8c00;
      }
    }
  }
}
</style>
