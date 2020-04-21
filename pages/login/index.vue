<template>
  <div id="particles" class="login">
    <vue-particles
      color="#f5f5f5"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#e54243"
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

    <div class="login-con" v-if="!findPwd">
      <loginForm @showRegister="showRegister" @showPassword="showPassword"></loginForm>
    </div>

    <div class="login-con" v-if="findPwd">
      <Card :bordered="false" class="login-card">
        <div class="login-title">{{register?"注册":"找回密码"}}</div>
        <img
          class="qrimg"
          @click="findPwd = false"
          src="../../assets/images/desktop.png"
          title="返回登录"
          alt="返回登录"
        />
        <div class="form-con">
          <Form ref="loginForm" :model="psForm" :rules="psRule" @keydown.enter.native="resetPwd()">
            <FormItem prop="username">
              <Input
                prefix="ios-person"
                v-model="psForm.username"
                class="login-input"
                placeholder="请输入手机号"
              />
            </FormItem>
            <FormItem prop="code">
              <div style="display: flex;justify-content: space-between">
                <Input
                  prefix="md-tennisball"
                  type="text"
                  v-model="psForm.code"
                  placeholder="请输入验证码"
                  class="login-input"
                  style="width: 165px"
                />
                <Button class="get-code" v-if="!isCoding" @click="getCode()">获取验证码</Button>
                <div class="timeDown" v-if="isCoding">{{ timeDown }}s后重发</div>
              </div>
            </FormItem>
            <FormItem prop="newPs">
              <Input
                prefix="md-lock"
                type="password"
                v-model="psForm.newPs"
                class="login-input"
                placeholder="请输入密码"
              />
            </FormItem>
            <FormItem prop="newPs2">
              <Input
                prefix="md-lock"
                type="password"
                v-model="psForm.newPs2"
                class="login-input"
                placeholder="请再次输入密码"
              />
            </FormItem>
            <!-- <div class="findPwd" @click="showPassword()">
              返回登录
            </div>-->
            <FormItem>
              <Button
                @click="registe"
                type="primary"
                class="login-btn"
                long
              >{{register?"注册":"重置密码"}}</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
    <div class="login-footer">{{ footerContent }}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
import numberCode from "~/components/numbercode";
import loginForm from "~/components/loginForm";
export default {
  components: {
    numberCode,
    loginForm
  },
  layout: "loginLay",
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    },
    qrcodeRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "验证码不能为空", trigger: "blur" }];
      }
    }
  },
  data() {
    const isPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的手机号"));
      } else {
        if (!/^1[34578]\d{9}$/.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }
    };
    const isnewPs2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else {
        if (value === this.psForm.newPs) {
          callback();
        } else {
          callback(new Error("前后密码必须一致"));
        }
      }
    };

    const iscode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (value === this.num || value === null) {
          callback();
        } else {
          callback(new Error("请输入正确的验证码"));
        }
      }
    };
    return {
      findPwd: false,
      active: 0,
      qrcodeUrl: "12312344",
      codeLogin: false,
      noteLogin: false,
      isCoding: false,
      register: false,
      num: "1234",
      form: {
        username: "",
        password: "",
        qrcode: "",
        numb: ""
      },
      timeDown: 60,
      psForm: {
        username: "",
        code: "",
        newPs: "",
        newPs2: ""
      },
      formRule: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        phone: [{ required: true, validator: isPhone, trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        qrcode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        numb: [{ required: true, validator: iscode, trigger: "blur" }]
      },
      psRule: {
        username: [{ required: true, validator: isPhone, trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        newPs: [{ required: true, message: "请输入新密码", trigger: "blur" }],
        newPs2: [{ required: true, validator: isnewPs2, trigger: "blur" }]
      },
      footerContent: "2016级电信三班刘志鸿的毕业设计",
      timer: null
    };
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules,
        qrcode: this.qrcodeRules
      };
    }
  },
  methods: {
    ...mapMutations({
      setToken: "setToken",
      setUserData: "setUserData"
    }),

    showPassword() {
      this.findPwd = !this.findPwd;
      this.register = !this.register;
      this.form = {
        username: "",
        password: "",
        qrcode: "",
        numb: null
      };

      this.psForm = {
        username: "",
        code: null,
        newPs: "",
        newPs2: ""
      };
      // if (this.form.username) {
      //   this.psForm.username = this.form.username;
      // }
    },
    registe() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const userlist = [];
          if (localStorage.getItem("userList")) {
            userlist.push(localStorage.getItem("userList"));
          }
          localStorage.clear();
          const obj = {
            name: this.psForm.username,
            token: this.psForm.username,
            avatar:
              "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
          };
          userlist.push(obj);
          localStorage.setItem("userList", JSON.stringify(userlist));
          console.log(localStorage);
          this.$Message.success({
            content: this.register ? "注册成功" : "重置成功"
          });
        }
      });
    },
    getCode() {
      this.isCoding = true;
      this.timer = setInterval(() => {
        this.timeDown--;
        if (this.timeDown === 0) {
          this.timeDown = 60;
          this.isCoding = false;
          clearInterval(this.timer);
        }
      }, 1000);
    },
    checkLogin(index) {
      this.active = index;
    },
    changecode() {
      if (this.num.length > 2) this.num = "";
      for (let i = 0; i < 4; i++) {
        this.num += Math.floor(Math.random() * 10);
      }
      console.log(this.num);
    },
    showRegister() {
      this.register = !this.register;
      this.findPwd = !this.findPwd;
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    login() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     localStorage.clear();
      //     axios.get("user.json").then(res => {
      //       if (this.form.username === "18223962895") {
      //         this.setToken(res.data.super_admin.token);
      //         this.setUserData(res.data.super_admin);
      //       } else {
      //         this.setToken(res.data.admin.token);
      //         this.setUserData(res.data.admin);
      //       }
      //     });
      //     this.$router.push("./");
      //     // login(this.form).then(result => {
      //     // localStorage.clear();
      //     // const { accessToken, userId } = result;
      //     // const data = {
      //     //   name: "测试用户",
      //     //   token: accessToken,
      //     //   id: userId,
      //     //   avator:
      //     //     "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
      //     // };
      //     // // 用户数据写入vuex以及cookie
      //     // this.setToken(data.token);
      //     // this.setUserData(data);
      //     // // this.getUserAccessRoutes({ type: 0 })
      //     // this.$router.push({
      //     //   name: "home"
      //     // });
      //     // });
      //   } else if (!valid) {
      //     this.changecode();
      //   }
      // });
    },
    resetPwd() {
      console.log("重置密码");
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.handleReset("form");
    //   // this.handleReset(this.psform);
    // });
  }
};
</script>


<style lang="less" scoped>
@import "./login.less";
.findPwd {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: right;
  cursor: pointer;
  margin-top: -10px;
}

.title {
  display: flex;
  justify-content: space-between;
  .weblogin {
    cursor: pointer;
  }
  .wechat-login {
    font-size: 14px;
    color: #17233d;
    font-weight: bold;
  }
}

#particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  // background-image: url('../../assets/images/bg-2.png');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: 50% 50%;
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

.login-head {
  letter-spacing: 2px;
  position: absolute;
  top: 50%;
  margin-top: -325px;
  width: 100%;
  text-align: center;
  font-size: 31px;
  height: 50px;
  background-image: -webkit-linear-gradient(
    180deg,
    rgba(68, 222, 255, 1) 0%,
    rgba(51, 161, 255, 1) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.login-btn {
  float: right;
}

.login-header {
  position: absolute;
  z-index: 1100;
  width: 100%;
  height: 55px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin-left: 20px;
  }
  div {
    margin-right: 20px;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
  }
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

.login-title {
  width: 123px;
  font-size: 22px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(31, 31, 31, 1);
  margin-bottom: 15px;
}
.qrimg {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.ivu-card-head {
  background: #e8eaec !important;
}

.login-card .ivu-card-body {
  padding: 26px;
}

.login-tab {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .mytab {
    font-size: 12px;
    padding-bottom: 6px;
    border-bottom: 2px solid #fff;
    cursor: pointer;
    &.active {
      border-bottom: 2px solid #00a1ba;
      color: #00a1ba;
    }
  }
}
.row {
  justify-content: space-around;
  align-items: center;
  margin-bottom: 25px;
}
.text-flex {
  display: flex;
  justify-content: space-between;
}
.get-code {
  outline: none;
  border: none;
  border-bottom: 2px solid #d9d9d9;
  border-radius: 0;
  color: #00a1ba;
}
.timeDown {
  outline: none;
  border: none;
  border-bottom: 2px solid #d9d9d9;
  border-radius: 0;
  color: #999;
  width: 84px;
  text-align: center;
  height: 32px;
}
</style>
