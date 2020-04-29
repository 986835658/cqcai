<template>
  <div class="slefmessage">
    <div class="touxiang-id">
      <div class="touxiang">
        <img
          class="tu"
          :src="username.avatar?username.avatar:'https://picsum.photos/1024/480/?image=54'"
          alt
        />
      </div>
      <div class="id">
        <p>{{username.token}}</p>
      </div>
    </div>
    <div v-if="username.token==='刘志鸿'" class="message">
      <div class="message-box">
        <div v-if="local===''">亲爱的管理员，还没有人购买商品！</div>
        <h2 v-if="local!==''" style="text-align:left;width:100%">用户{{local[0].name}}对以下商品进行了竞价</h2>
        <div v-if="local!==''" class="source-detail">
          <card class="circle" v-for="(item,index) in joinList" :key="index">
            <div class="imgbox">
              <a>
                <img class="tu" :src="item.imgUrl" alt />
              </a>
            </div>

            <div class="textbox">
              <span style="color:#ff2e4c;">￥{{item.price}}</span>
              <span>
                <a>{{item.detail}}</a>
              </span>
              <span class="span-1">
                近期成交量
                <span style="color:#c49173 ;">{{item.BusiNumber}}</span>件
              </span>
            </div>
          </card>
        </div>
      </div>
    </div>
    <div v-if="username.token!=='刘志鸿'" class="message">
      <div class="message-box">
        <div v-if="!joinList.length">您还没有购买和竞价商品！</div>
        <h2 v-if="joinList.length" style="text-align:left;width:100%">您对以下商品进行了竞价</h2>
        <div v-if="joinList.length" class="source-detail">
          <card class="circle" v-for="(item,index) in joinList" :key="index">
            <div class="imgbox">
              <a>
                <img class="tu" :src="item.imgUrl" alt />
              </a>
            </div>

            <div class="textbox">
              <span style="color:#ff2e4c;">￥{{item.price}}</span>
              <span>
                <a>{{item.detail}}</a>
              </span>
              <span class="span-1">
                近期成交量
                <span style="color:#c49173 ;">{{item.BusiNumber}}</span>件
              </span>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      local: "",
      joinList: []
    };
  },
  created() {},
  mounted() {
    this.local = JSON.parse(localStorage.getItem("userList")) || "";
    console.log(this.local);
    if (this.local !== ""&&this.local[0].joinList) {
      this.joinList = this.local[0].joinList;
    }
  },
  computed: {
    username() {
      return this.$store.state.userData;
    }
  }
};
</script>

<style lang="less" scoped>
.slefmessage {
  width: 100%;
  font-size: 18px;
  .touxiang-id {
    width: 50%;
    height: 300px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .touxiang {
      height: 200px;
      width: 200px;
      border-radius: 50%;

      .tu {
        height: 200px;
        width: 200px;
        border-radius: 50%;
      }
    }
    .id {
      height: 100px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .message {
    width: 100%;

    .message-box {
      width: 50%;
      border-top: 1px solid burlywood;
      height: 600px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .source-detail {
        height: auto;
        width: 100%;
        /* margin-left: 10px; */
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .circle {
          height: 100%;
          width: 20%;
          margin-top: 25px;
          margin-left: 25px;
          .imgbox {
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .tu {
              height: 100px;
              width: 140px;
              /* transition: 5s;
    transform: rotate(360deg); */
            }
          }
          .textbox {
            height: 70px;
            width: 100%;
            margin-top: 20px;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
        }
      }
    }
  }
}
</style>