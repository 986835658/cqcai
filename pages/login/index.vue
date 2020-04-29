<template>
  <div id="particles" class="login">
    <vue-particles
      color="#f5f5f5"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>

    <div class="login-con">
      <!-- <loginForm @showRegister="showRegister" @showPassword="showPassword"></loginForm> -->
      <loginFormTow></loginFormTow>
    </div>


    <div class="login-footer">{{ footerContent }}</div>
  </div>
</template>

<script>
import numberCode from "~/components/numbercode";
import loginFormTow from "~/components/loginFormTow";
export default {
  components: {
    numberCode,
    loginFormTow
  },
  layout: "loginLay",

  data() {
  
    return {
      footerContent:'重庆三峡学院刘志鸿的毕业设计'
    }
  },
  computed: {
  
  },
  methods: {
  }
};
</script>


<style lang="less" scoped>
@import "./login.less";

#particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  background-image: url('../../assets/images/back_img01.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 1000;
  top: 0;
  left: 0;
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.login-footer {
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0;
  bottom: 30px;
  color: #9a9a9a;
  font-weight: bold;
}

.login-con .ivu-card-head {
  background: #e8eaec !important;
}

</style>
