<template>
  <div class="container">
    <div style="height:50px"></div>
    <Tabs style="height:550px" value="name1">
      <TabPane label="正在竞价" name="name1">
        <div class="source-detail">
          <card class="circle" v-for="(source,index) in sources" :key="index">
            <div class="imgbox">
              <a>
                <img class="tu" :src="source.imgUrl" alt />
              </a>
              <div class="time">
                <p>剩余时间{{time}}</p>
                <div>
                  <Button @click="join(source,index)">参与竞价</Button>
                </div>
              </div>
            </div>

            <div class="textbox">
              <span style="color:#ff2e4c;">￥{{source.price}}</span>
              <span>
                <a>{{source.detail}}</a>
              </span>
              <span class="span-1">
                近期成交量
                <span style="color:#c49173 ;">{{source.BusiNumber}}</span>件
              </span>
            </div>
          </card>
        </div>
      </TabPane>
      <TabPane label="已参与竞价" name="name2">
        <div class="source-detail">
          <card class="circle" v-for="(item,index) in joinList" :key="index">
            <div class="imgbox">
              <a>
                <img class="tu" :src="item.imgUrl" alt />
              </a>
              <div class="time">
                <p></p>
                <div>
                  <Button @click="godown(item,index)">放弃竞价</Button>
                </div>
              </div>
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
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  asyncData() {},
  data() {
    return {
      time: 60,
      joinList: [],
      sources: [
        {
          id: 1,
          price: 3949.0,
          BusiNumber: 293,
          type: "平板式微型计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/0E/C2/wKhYn109mL2AbPVkAAB4iBGAp9U037.JPG",
          detail: "华为/HUAWEI M6（4GB+64GB 全网通版 10.8英寸）平板式微型计算机"
        },
        {
          id: 2,
          price: 2799.0,
          BusiNumber: 171,
          type: "平板式微型计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/0E/E6/wKhYn11Ci-CAQAxkAABCqoVdSLQ037.JPG",
          detail: "华为/HUAWEI M6（4GB+128GB WiFi版 8.4英寸）平板式微型计算机"
        },
        {
          id: 3,
          price: 3949.0,
          BusiNumber: 83,
          type: "平板式微型计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/0E/E6/wKhYn11Ci-CAQAxkAABCqoVdSLQ037.JPG",
          detail: "华为/HUAWEI M6（4GB+128GB WiFi版 10.6英寸）平板式微型计算机"
        },
        {
          id: 4,
          price: 3750.0,
          BusiNumber: 46,
          type: "台式计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/0E/DE/wKhYn11BSOSAOiz9AACMJlCngiI383.png",
          detail:
            "宏碁/ACER Veriton D650（I3-8100/4G/1T/集成显卡/无光驱/无显示器）台式机"
        },
        {
          id: 5,
          price: 3850.0,
          BusiNumber: 27,
          type: "台式计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/10/61/wKhYml1AFemADMwqAAD5FOc9euY920.jpg",
          detail:
            "华硕/ASUS D324MT（G3930/4G/500G/集成显卡/无光驱/19.5英寸）台式机"
        },
        {
          id: 6,
          price: 2799.0,
          BusiNumber: 18,
          type: "平板式微型计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/0E/E6/wKhYn11CifOAEHPrAABCqoVdSLQ172.JPG",
          detail: "华为/HUAWEI M6（4GB+64GB 全网通版 8.4英寸）平板式微型计算机"
        }
      ],
      timer: null
    };
  },
  computed: {
    user() {
      return this.$store.state.token;
    }
  },
  methods: {
    join(item, i) {
      if (this.user) {
        this.sources.splice(i, 1);
        this.joinList.push(item);
      } else {
        this.$router.push("/login");
      }
    },
    godown(item, i) {
      this.joinList.splice(i, 1);
      this.sources.push(item);
      if (this.time === 60) {
        this.interval();
      }
    },
    interval() {
      this.timer = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          this.time = 60;
          this.joinList.push(...this.sources);
          this.sources = [];
          clearInterval(this.timer);
        }
      }, 1000);
    }
  },
  mounted() {
    if (this.$store.state.token) {
      const userDate = JSON.parse(localStorage.getItem("userList"));
      userDate.forEach(el => {
        if (el.token === this.$store.state.token) {
        this.joinList=el.joinList
        }
      });
       
    }
  
    this.interval();
  },
  destroyed() {
    if (this.$store.state.token && this.joinList.length) {
      const userDate = JSON.parse(localStorage.getItem("userList"));
      localStorage.clear();
      userDate.forEach(el => {
        if (el.token === this.$store.state.token) {
          el.joinList = this.joinList;
          return;
        }
      });
      localStorage.setItem("userList", JSON.stringify(userDate));  
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 50%;
  margin: auto;
  .source-detail {
    height: auto;
    width: 100%;
    /* margin-left: 10px; */
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .circle {
      height: 49%;
      width: 30%;
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
        .time {
          width: 40%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
          p {
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            color: #e54243;
          }
        }
      }
      .textbox {
        height: 70px;
        width: 200px;
        margin-top: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
    }
  }

  .textbox span {
    font-size: 14px;
    margin-left: 10px;
    height: 25px;
    font-weight: normal;
    font-family: tahoma, "Microsoft YaHei" !important;
  }
  .textbox span a {
    color: #333333;
    font-size: 12px;
    width: 180px;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .span-1,
  .span-1 span {
    color: #999999;
    font-size: 12px !important;
  }
}
</style>
