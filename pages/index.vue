<template>
  <div class="index">
    <div class="indexx">
      <div class="main">
        <div class="sorts-listt">办公类计算机</div>
        <div>
          <ul>
            <li>
              <a>便携式计算机</a>
            </li>
            <li>
              <a>台式计算机</a>
            </li>
            <li>
              <a>平板式微型计算机</a>
            </li>
            <li>
              <a>一体机</a>
            </li>
            <li>
              <a>计算机显示器</a>
            </li>
          </ul>
        </div>
        <div>
          <div class="sorts-list">
            <a>专业类计算机</a>
          </div>
          <div class="sorts-list">
            <a>正版软件</a>
          </div>
          <div class="sorts-list">
            <a>交通工具</a>
          </div>
          <div class="sorts-listt" style="color: #CACACA;">服务、其他</div>
        </div>
      </div>
      <div class="auto">
        <div class="price" style="height:40px">
          <a v-for="(item,index) in filterList" :key="index" @click="filt">{{item}}</a>
        </div>

        <div class="big-box">
          <div class="source-detail">
            <div class="circle" v-for="(source,index) in showData" :key="index">
              <!-- <transition
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
              >-->
              <div class="imgbox">
                <a>
                  <img class="tu" :src="source.imgUrl" alt />
                </a>
              </div>
              <!-- </transition> -->
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="changtu">
      <img src="https://www.gec123.com/group1/M00/10/2F/wKhYml016ZGAMgWfAAG0cwBmD_g484.png" alt />
    </div>
    <Row class="card-1">
      <Card style="width:70%">
        <p slot="title">
          <span>竞价公告</span>
        </p>
        <a slot="extra">更多</a>
        <div class="card-content" style="text-align:left;height:90%;margin:auto">
          <ul>
            <li v-for="(item,index) in messgae.unread" :key="index">
              <p>
                <a>
                  <span :title="item.title" style="width:40%">{{item.title}}</span>
                  <span>{{item.comp}}</span>
                  <span>{{item.create_time}}</span>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </Card>
      <Card style="width:25%">
        <p slot="title">
          <span>重要通知</span>
        </p>
        <a slot="extra">更多</a>
        <div class="card-content" style="text-align:left;height:90%;margin:auto">
          <ul>
            <li v-for="(item,index) in messgae.readed" :key="index">
              <p>
                <a>
                  <span :title="item.title" style="width:60%">{{item.title}}</span>
                  <span>{{item.create_time}}</span>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </Card>
    </Row>
    <Row class="card-1" style="margin-top:20px">
      <Card style="width:70%">
        <p slot="title">
          <span>成交公告</span>
        </p>
        <a slot="extra">更多</a>
        <div class="card-content" style="text-align:left;height:90%;margin:auto">
          <ul>
            <li v-for="(item,index) in messgae.trash" :key="index">
              <p>
                <a>
                  <span :title="item.title">{{item.title}}</span>

                  <span>{{item.create_time}}</span>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </Card>
      <Card style="width:25%">
        <p slot="title">
          <span>重要通知</span>
        </p>
        <a slot="extra">更多</a>
        <div class="card-content" style="text-align:left;height:90%;margin:auto">
          <ul>
            <li v-for="(item,index) in messgae.readed" :key="index">
              <p>
                <a>
                  <span :title="item.title" style="width:60%">{{item.title}}</span>
                  <span>{{item.create_time}}</span>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </Card>
    </Row>
    <Row class="card-1" style="margin-top:20px">
      <Card style="width:97%">
        <p slot="title">
          <span>最近成交记录</span>
        </p>
        <a slot="extra">更多</a>
        <div class="card-content" style="text-align:left;height:90%;margin:auto">
          <Row class="name" type="flex">
            <div class="product">
              <h2>商品名称</h2>
              <p v-for="(item,index) in messgae.trash" :key="index">{{ item.title}}</p>
            </div>
            <div class="product">
              <h2>商品价格</h2>
              <p v-for="(item,index) in messgae.trash" :key="index">{{ item.msg_id}}</p>
            </div>
            <div class="product">
              <h2>成交数量</h2>
              <p v-for="(item,index) in messgae.trash" :key="index">{{ item.msg_id}}</p>
            </div>
            <div class="product">
              <h2>成交时间</h2>
              <p v-for="(item,index) in messgae.trash" :key="index">{{ item.create_time}}</p>
            </div>
          </Row>
        </div>
      </Card>
    </Row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData() {
    // return new Promise((resolve) => {
    //   setTimeout(function () {
    //     resolve({})
    //   }, 1000)
    // })
  },
  data() {
    return {
      autoplaySpeed: 10000,
      messgae: "",
      filterList: [
        "办公类计算机",
        "2000-3999",
        "4000-5999",
        "6000-7999",
        "操作系统",
        "办公软件",
        "轿车",
        "越野车"
      ],
      allDate: [],
      showData: [],
      num: 1,
      timer: null
    };
  },
  mounted() {
    axios.get("/message/init").then(res => {
      this.messgae = res.data;
    });
    axios.get("/message/shangpin").then(res => {
      this.allDate = res.data;
      this.showData = res.data.splice(0, 10);
      this.lunbo();
    });
  },
  methods: {
    filt() {},
    lunbo() {
      this.timer = setInterval(() => {
        if (this.num === 3) {
          this.num = 0;
        }

        const start = this.num * 10;
        this.num++;
        const end = this.num * 10;
        this.showData = [];
        this.showData = this.allDate.slice(start, end);
      }, 5000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 50%;
  margin: auto;
  .indexx {
    width: 100%;
    display: flex;
    .auto {
      height: 458px;
      width: 83%;
      .price {
        width: 90%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .big-box {
        height: 100%;
        width: 100%;
        .source-detail {
          height: 420px;
          width: 100%;
          margin-left: 10px;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          .circle {
            height: 210px;
            width: 20%;
            border: 1px solid #e7e7e7;
            .imgbox {
              margin-left: 10px;
              margin-top: 20px;
              height: 100px;
              width: 80%;
              .tu {
                height: 100px;
                width: 100%;
                /* transition: 5s;
    transform: rotate(360deg); */
              }
            }
            .textbox {
              height: 70px;
              width: 90%;
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
          width: 100%;
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
    }
    .main {
      width: 16%;
      height: 485px;
      border: 1px solid rgba(238, 238, 238, 0.507);

      .sorts-listt,
      .sorts-list {
        height: 40px;
        width: 100%;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 26px;
        line-height: 40px;
        cursor: default;
        color: #333333;
        border: 1px solid rgba(238, 238, 238, 0.507);
      }
      ul {
        list-style: none;
        width: 100%;
        height: 200px;
        padding: 0px;
        border: 1px solid rgba(238, 238, 238, 0.507);
      }
      li {
        height: 40px;
        width: 100%;
        line-height: 40px;
        text-align: left;
      }
      ul li a {
        color: #666666;
        height: 40px;
        display: block;
        margin: auto;
        width: 100px;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;

        line-height: 40px;
      }
      .sorts-list a {
        height: 40px;
        width: 100%;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;

        line-height: 40px;
        color: #333333;
      }
      li:hover,
      .sorts-list:hover {
        background: #cd2a2c;
      }
    }
  }
  .changtu {
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a:hover {
      color: #e54243;
      text-decoration: underline;
    }
    .card-content {
      width: 95%;
      .name {
        width: 100%;
        justify-content: space-between;
        .product {
          width: 25%;
          text-align: center;
          h2 {
            width: 100%;
            height: 40px;
          }
          p {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      ul {
        width: 100%;
        li {
          width: 100%;
          p {
            a {
              display: flex;
              justify-content: space-between;
              span {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
        li:hover {
          color: #e54243;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
