<template>
  <div class="container">
    <Card style="margin-top:20px">
      <Row>
        <div @click="initDate">
          <ul>
            <li>
              <a style="font-weight:600">办公类计算机:</a>
            </li>
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

        <div @click="initDate">
          <ul>
            <li>
              <a style="font-weight:600">专业类计算机:</a>
            </li>
            <li>
              <a>专业类计算机</a>
            </li>
          </ul>
        </div>
        <div @click="initDate">
          <ul>
            <li>
              <a style="font-weight:600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;操作系统:</a>
            </li>
            <li>
              <a>操作系统</a>
            </li>
          </ul>
        </div>
        <div @click="initDate">
          <ul>
            <li>
              <a style="font-weight:600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;办公软件:</a>
            </li>
            <li>
              <a>办公软件</a>
            </li>
          </ul>
        </div>
        <div @click="initDate">
          <ul>
            <li>
              <a style="font-weight:600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交通工具:</a>
            </li>
            <li>
              <a>轿车</a>
            </li>
            <li>
              <a>越野车</a>
            </li>
            <li>
              <a>皮卡</a>
            </li>
            <li>
              <a>微型车</a>
            </li>
          </ul>
        </div>
      </Row>
    </Card>
    <Card class="card" style="margin-top:20px">
      <Table border :loading="loading" :columns="tableColumns" :data="showData">
        <template slot-scope="{ row, index }" slot="action">
          <Button type="default" @click="showDetail(row, index)">查看评论</Button>
        </template>
      </Table>
    </Card>
    <Modal v-model="modal1">
      <div
        class="flex"
        style="
    display: flex;
    justify-content: flex-start;
    align-items: center;"
      >
        <a href="#">
          <img
            style="width:50px;height:50px"
            src="https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
          />
        </a>
        <h4>用户</h4>
      </div>

      <p style="text-align:center">{{gs}}是一个很好的供应商</p>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData() {},
  data() {
    return {
      gs: "",
      showData: [],
      loading: false,
      modal1: false,
      tableColumns: [
        {
          title: "供应商",
          key: "provider",
          align: "center",
          width: 320
        },
        {
          title: "地址",
          key: "address",
          align: "center",
          width: 200
        },
        {
          title: "联系人",
          key: "men",
          align: "center"
        },
        {
          title: "联系电话",
          key: "phone",
          align: "center"
        },
        {
          title: "联系手机",
          key: "telphone",
          align: "center"
        },
        {
          title: "传真",
          key: "chuanzhen",
          align: "center"
        },
        {
          title: "操作",
          slot: "action",
          width: 120,
          align: "center"
        }
      ]
    };
  },
  methods: {
    showDetail(row, index) {
      this.gs = row.provider;
      this.modal1 = true;
    },
    initDate() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        axios.get("/message/provide").then(res => {
          this.showData = res.data;
        });
      }, 1000);
    }
  },

  created() {
    this.initDate();
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
height: 716px;
  .card {
    width: 100%;
    margin: auto;
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
}
</style>
