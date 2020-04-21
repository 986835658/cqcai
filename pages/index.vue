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
          <span>办公类计算机</span>
          <span>2000-3999</span>
          <span>4000-5999</span>
          <span>6000-7999</span>
          <span>操作系统</span>
          <span>办公软件</span>
          <span>轿车</span>
          <span>越野车</span>
        </div>
        <Carousel
          class="carousel"
          autoplay
          :autoplay-speed="autoplaySpeed"
          dots="none"
          arrow="never"
        >
          <Carousel-item>
            <div class="source-detail">
              <div class="circle" v-for="(source,index) in sources" :key="index">
                <div class="imgbox">
                  <a>
                    <img class="tu" :src="source.imgUrl" alt />
                  </a>
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
              </div>
            </div>
          </Carousel-item>
          <Carousel-item>
            <div class="source-detail">
              <div class="circle" v-for="(source,index) in sources" :key="index">
                <div class="imgbox">
                  <a>
                    <img class="tu" :src="source.imgUrl" alt />
                  </a>
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
              </div>
            </div>
          </Carousel-item>
          <Carousel-item>
            <div class="source-detail">
              <div class="circle" v-for="(source,index) in sources" :key="index">
                <div class="imgbox">
                  <a>
                    <img class="tu" :src="source.imgUrl" alt />
                  </a>
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
              </div>
            </div>
          </Carousel-item>
          <Carousel-item>
            <div class="source-detail">
              <div class="circle" v-for="(source,index) in sources" :key="index">
                <div class="imgbox">
                  <a>
                    <img class="tu" :src="source.imgUrl" alt />
                  </a>
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
              </div>
            </div>
          </Carousel-item>
        </Carousel>
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
  asyncData() {},
  data() {
    return {
      autoplaySpeed: 10000,
      messgae: "",
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
        },
        {
          id: 7,
          price: 3029.0,
          BusiNumber: 17,
          type: "台式计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/0B/51/wKhYn1xDIteAIy3qAAHgUQIv8XA715.png",
          detail:
            "宏碁/ACER Veriton D430（G3930/4G/1T/集成显卡/无光驱/无显示器）台式机"
        },
        {
          id: 8,
          price: 3029.0,
          BusiNumber: 13,
          type: "台式计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/11/FF/wKhYml2pX5SAJhbmAAG7R2d1IPs785.png",
          detail:
            "惠普/HP 280 Pro G4 MT（G5420/4G/256G SSD/集成显卡/无光驱/20.0英寸）台式机"
        },
        {
          id: 9,
          price: 3029.0,
          BusiNumber: 12,
          type: "平板式微型计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/11/A1/wKhYml2RX_OANPQLAABCqoVdSLQ166.JPG",
          detail: "华为/HUAWEI M6（4GB+128GB 全网通版 8.4英寸）平板式微型计算机"
        },
        {
          id: 10,
          price: 3229.0,
          BusiNumber: 10,
          type: "台式计算机",
          imgUrl:
            "//www.gec123.com/group1/M00/0C/D6/wKhYmlxDNZKARFzYAAHgUQIv8XA009.png",
          detail:
            "宏碁/ACER Veriton D430（G4560/4G/1T/集成显卡/无光驱/无显示器）台式机"
        }
      ]
    };
  },
  mounted() {
    axios.get("/message/init").then(res => {
      this.messgae = res.data;
    });
  },
  methods: {
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
      .carousel {
        height: 100%;
        width: 100%;
        .source-detail {
          height: 420px;
          width: 1002px;
          margin-left: 10px;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          .circle {
            height: 210px;
            width: 200px;
            border: 1px solid #e7e7e7;
            .imgbox {
              margin-left: 10px;
              margin-top: 20px;
              height: 100px;
              width: 140px;
              .tu {
                height: 100px;
                width: 140px;
                /* transition: 5s;
    transform: rotate(360deg); */
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
    }
    .main {
      width: 220px;
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
