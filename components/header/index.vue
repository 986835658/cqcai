<template>
  <div class="header">
    <div class="top">
      <p v-if="!user">
        欢迎来到重庆政府采购协议供货平台!
        请
        <a @click="toLogin" style="color:#e54243">登录</a>或
        <a @click="toLogin" style="color:#e54243">注册</a>
      </p>
      <p v-if="user">
        重庆政府采购协议供货平台欢迎您！尊敬的用户{{user}}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;点击
        <a
          @click="loginout"
          style="color:#e54243"
        >退出登录</a>
      </p>
      <div class="right">
        <NuxtLink to="/" style="background-color:#f8f8f8">首页</NuxtLink>
        <NuxtLink to="/" style="background-color:#f8f8f8">我的中心</NuxtLink>
        <NuxtLink to="/" style="background-color:#f8f8f8">帮助中心</NuxtLink>
        <span>63782227(工作日)</span>
        <span>18183107831(节假日)</span>
      </div>
    </div>
    <div class="search-main">
      <div class="search">
        <div class="img">
          <img src="//www.gec123.com/xygh/img/header/logo.png" alt="回到首页" />
        </div>

        <b-input-group class="mb-3">
          <b-input-group-prepend>
            <b-button
              squared
              text="Button"
              style="height:46px;width:100px;background-color:#eee;border:none;color:#6C6C6C; font-size: 20px;"
            >商品</b-button>
          </b-input-group-prepend>
          <b-form-input style="width:350px;height:46px;"></b-form-input>
          <b-input-group-append>
            <b-button
              squared
              text="Button"
              style="height:46px;width:80px;background-color:#e54243;border: none; font-size: 19px;"
            >搜索</b-button>
          </b-input-group-append>
        </b-input-group>
        <div style="width:20%"></div>
      </div>
    </div>
    <Modal v-model="modal1" title="您已经退出登陆状态" @on-ok="ok" @on-cancel="cancel">是否重新登录账号？</Modal>
    <div class="rout">
      <div class="title">
        <NuxtLink to="/all">
          <div>全部商品分类</div>
        </NuxtLink>
      </div>
      <div class="title" v-for="(item,index) in titles" :key="index">
        <NuxtLink :to="item.url">{{item.title}}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      requeList: "",
      modal1: false,
      titles: [
        {
          id: 1,
          title: "首页",
          url: "/"
        },
        {
          id: 2,
          title: "协议竞价",
          url: "/competition"
        },
        {
          id: 3,
          title: "协议供应商",
          url: "/provide"
        },
        {
          id: 4,
          title: "云桌面专区",
          url: "/desktop"
        },
        {
          id: 5,
          title: "维保服务",
          url: "/guardfix"
        }
      ]
    };
  },

  created() {
    // this.user = this.$store.state.token;
  },
  mounted() {
    

    axios.get("user.json").then(res => {
      this.requeList = res.data;
    });
  },
  computed: {
    user() {
      return this.$store.state.token;
    }
  },
  methods: {
    ...mapMutations({
      setToken: "setToken",
      setUserData: "setUserData"
    }),
    toLogin() {
      this.$nextTick(() => {
        this.$router.push("/login");
      });
    },
    loginout() {
      this.setToken("");
      this.setUserData("");
      this.modal1 = true;
    },
    ok() {
      this.modal1 = false;
      this.$router.push("/login");
    },
    cancel() {
      this.modal1 = false;
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  text-align: center;
  a {
    color: #515a6e;
    text-decoration: none;
  }
  .active-link {
    background: #e54243;
  }
  .exact-active-link {
    background: #cd2a2c;
  }
  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    background: #f8f8f8;
    p {
      width: 20%;
    }
    .right {
      width: 22%;
      display: flex;
      justify-content: space-around;
    }
  }
  .search-main {
    width: 100%;

    .search {
      width: 50%;
      height: 120px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mb-3 {
        width: 50%;
      }
    }
  }

  .rout {
    width: 50%;
    height: 45px;
    margin-top: 10px;
    background: #e54243;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    .title {
      width: 16%;
      height: 45px;
      a {
        color: #fff;
        height: 100%;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
}
</style>