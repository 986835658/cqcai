<template>
  <div ref="container" class="dowebok" id="dowebok">
    <div class="form-container sign-up-container">
      <form action="#">
        <h1>注册</h1>

        <input v-model="reg.name" type="text" placeholder="姓名" />
        <input v-model="reg.phone" type="phone" placeholder="电话号码" />
        <input v-model="reg.password" type="password" placeholder="密码" />
        <input v-model="reg.confirmpwd" type="confirm-pwd" placeholder="密码" />
        <button @click="register">注册</button>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <Form ref="loginForm" :model="form" :rules="formRule" @keydown.enter.native="login">
        <h1 style="height:50px">登录</h1>
        <FormItem prop="phone">
          <Input
            style="width:250px"
            prefix="md-phone-portrait"
            v-model="form.phone"
            class="login-input"
            placeholder="请输入手机号"
          />
        </FormItem>
        <FormItem prop="password">
          <Input
            prefix="md-lock"
            style="width:250px"
            type="password"
            v-model="form.password"
            class="login-input"
            placeholder="请输入密码"
          />
        </FormItem>
        <FormItem prop="numb">
          <Input
            style="width:250px"
            v-model="form.numb"
            class="login-input"
            placeholder="请输入图片验证码"
          />
        </FormItem>
        <div style="width:250px">
          <number-Code :identifyCode="num"></number-Code>
          <div class="op" style="text-align:center;height:50px">
            <a @click="changecode">看不清楚，换一张</a>
          </div>
        </div>
        <FormItem>
          <Button @click="login" type="primary" class="login-btn" long>登录</Button>
        </FormItem>
      </Form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>已有帐号？</h1>
          <p>请使用您的帐号进行登录</p>
          <button @click="tologin" class="ghost" id="signIn">登录</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>没有帐号？</h1>
          <p>立即注册加入我们，和我们一起开始旅程吧</p>
          <button @click="toregist" class="ghost" id="signUp">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
import numberCode from "~/components/numbercode";
export default {
  components: {
    numberCode
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
    const iscode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (value === this.num) {
          callback();
        } else {
          callback(new Error("请输入正确的验证码"));
        }
      }
    };
    return {
      num: "1234",
      form: {
        phone: "",
        password: "",
        qrcode: "",
        numb: ""
      },
      reg: {
        name: "",
        phone: "",
        password: "",
        confirmpwd: ""
      },
      formRule: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        phone: [{ required: true, validator: isPhone, trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        qrcode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        numb: [{ required: true, validator: iscode, trigger: "blur" }]
      }
    };
  },
  mounted() {
    console.log(localStorage);
  },
  methods: {
    ...mapMutations({
      setToken: "setToken",
      setUserData: "setUserData"
    }),
    changecode() {
      if (this.num.length > 2) this.num = "";
      for (let i = 0; i < 4; i++) {
        this.num += Math.floor(Math.random() * 10);
      }
      console.log(this.num);
    },
    register() {
      if (this.reg.name === "" || this.reg.name === null) {
        this.$Message.error({
          content: "姓名不能为空"
        });
      } else if (
        this.reg.phone === "" ||
        !/^1[34578]\d{9}$/.test(this.reg.phone)
      ) {
        this.$Message.error({
          content: "请输入正确的电话号码"
        });
      } else if (this.reg.password === "") {
        this.$Message.error({
          content: "密码不能为空"
        });
      } else if (
        this.reg.confirmpwd === "" ||
        this.reg.confirmpwd !== this.reg.password
      ) {
        this.$Message.error({
          content: "第二次输入密码有误"
        });
      } else {
        const userlist = [];
        if (localStorage.getItem("userList")) {
          userlist.push(localStorage.getItem("userList"));
        }
        localStorage.clear();
        const obj = {
          name: this.reg.name,
          token: this.reg.name,
          user: this.reg.phone,
          pwd: this.reg.password,
          avatar:
            "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"
        };
        userlist.push(obj);
        localStorage.setItem("userList", JSON.stringify(userlist));
        console.log(localStorage);
        this.$Message.success({
          content: "注册成功"
        });
      }
    },

    login() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          let userObj = [];
          await axios.get("user.json").then(res => {
            userObj.push(...res.data);
          });

          if (localStorage.getItem("userList")) {
            userObj.push(...JSON.parse(localStorage.getItem("userList")));
          }
          const user = userObj.filter(item => {
            if (item.user == this.form.phone) {
              return item;
            }
          });
          if (user && user.length && user[0].pwd === this.form.password) {
            this.setToken(user[0].token);
            this.setUserData(user[0]);
            this.$router.push("/");
          } else {
            await this.$Message.error({
              content: "账号或者密码错误"
            });
            this.changecode();
          }
        } else if (!valid) {
          this.changecode();
        }
      });
    },
    toregist() {
      this.$refs.container.classList.add("right-panel-active");
    },
    tologin() {
      this.$refs.loginForm.resetFields();
      this.$refs.container.classList.remove("right-panel-active");
    }
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;
}
.op {
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
}
h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.dowebok {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.social-container a:hover {
  background-color: #eee;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  outline: none;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background: #ff4b2b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #ff416c;
  background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
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
.login-btn {
  float: right;
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
.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

/* Move signin to right */
.dowebok.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

/* Move overlay to left */
.dowebok.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

/* Bring signup over signin */
.dowebok.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to right */
.dowebok.right-panel-active .overlay {
  transform: translateX(50%);
}

/* Bring back the text to center */
.dowebok.right-panel-active .overlay-left {
  transform: translateY(0);
}

/* Same effect for right */
.dowebok.right-panel-active .overlay-right {
  transform: translateY(20%);
}
</style>