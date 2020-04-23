<template>
  <div class="container">
    <Card style="margin-top:20px">
      <Row>
        <div @click="initDate">
          <ul>
            <li>
              <a style="font-weight:600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区域:</a>
            </li>
            <li>
              <a>重庆</a>
            </li>
            <li>
              <a>广州</a>
            </li>
            <li>
              <a>四川</a>
            </li>
            <li>
              <a>北京</a>
            </li>
            <li>
              <a>上海</a>
            </li>
          </ul>
        </div>
        <div @click="initDate">
          <ul>
            <li>
              <a style="font-weight:600">维保类型:</a>
            </li>
            <li>
              <a>保修一年</a>
            </li>
            <li>
              <a>保修两年</a>
            </li>
            <li>
              <a>保修五年</a>
            </li>
            <li>
              <a>永久保修</a>
            </li>
          </ul>
        </div>
      </Row>
    </Card>
    <Card style="margin-top:20px">
      <Row>
        供应商名称：
        <i-input v-model="type" style="width:200px" clearable></i-input>
        <Button @click="searchList" style="margin-left: 20px;">搜索</Button>
      </Row>
    </Card>
    <div class="card-flex">
      <div v-for="(item,i) in showData" :key="i" class="card-box" style="margin-top:50px">
        <div class="img">
          <img src="../../assets/images/touxiang/touxiang.png" alt />
        </div>
        <div class="text">
          <p style="font-weight:bolder">{{item.provider}}</p>
          <p>联系人：{{item.men}}</p>
          <p>联系电话：{{item.phone}}</p>
          <p style="height:50px ">服务内容:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData() {},
  data() {
    return {
 
      type: "",
      showData: [],
      allDate: [],
  
    }
  },
  methods: {
    searchList() {
      this.showData = [];
      this.allDate.forEach(item => {
        if (item.provider.indexOf(this.type) !== -1) {
          this.showData.push(item);
        }
      });
    },
 
    initDate() {
     
        axios.get("/message/provide").then(res => {
          this.showData = res.data;
          this.allDate = res.data;
        });

    }
  },

  mounted() {
    this.initDate();
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 1500px;
  .card {
    width: 100%;
    margin: auto;
  }
  .card-flex {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  ul {
    width: 60%;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    li {
      margin-left: 20px;
    }
    li:hover {
      color: #e54243;
      text-decoration: underline;
    }
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-box {
    height: 200px;
    width: 47%;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    margin-left: 20px;
    box-shadow: 5px 3px 10px 5px lightgrey;
    .img {
      height: 70%;
      width: 40%;
      display: flex;
      justify-content: center;
    }
    .text {
      height: 99%;
      width: 58%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
  }
  .card-box:hover {
    transform: translateY(-10px);
    box-shadow: 1px 3px 10px 1px #e54243;
    transition: 1s;
  }
}
</style>
