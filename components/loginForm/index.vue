<template>
  <div>
    <Card :bordered="false" class="login-card">
      <div class="login-title">账号登录</div>
      <div class="form-con">
        <Form ref="loginForm" :model="form" :rules="formRule" @keydown.enter.native="login">
          <FormItem prop="phone">
            <Input
              prefix="md-phone-portrait"
              v-model="form.phone"
              class="login-input"
              placeholder="请输入手机号"
            />
          </FormItem>
          <FormItem prop="password">
            <Input
              prefix="md-lock"
              type="password"
              v-model="form.password"
              class="login-input"
              placeholder="请输入密码"
            />
          </FormItem>
          <FormItem prop="numb">
            <Input v-model="form.numb" class="login-input" placeholder="请输入图片验证码" />
          </FormItem>
          <div class="row" type="flex">
            <number-Code :identifyCode="num"></number-Code>
            <div style="text-align:center">
              <a @click="changecode">看不清楚，换一张</a>
            </div>
          </div>
          <FormItem>
            <Button @click="login" type="primary" class="login-btn" long>登录</Button>
          </FormItem>
        </Form>
        <div class="text-flex">
          <div @click="showRegiste()">
            <a>注册</a>
          </div>
          <div @click="showPasswor()">
            <a>忘记密码？</a>
          </div>
        </div>
      </div>
    </Card>
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
    showRegiste() {
      this.$emit("showRegister", false);
    },
    showPasswor() {
      this.$emit("showPassword", false);
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
            if (item.name == this.form.phone) {
              return item;
            }
          });
          console.log(user);
          if (user && user.length) {
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
    }
  }
};
</script>

<style lang="less" soped>
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
</style>