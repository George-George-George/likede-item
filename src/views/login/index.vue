<template>
  <div class="login-container">
    <el-form
      ref="form"
      :model="form"
      label-width="40px"
      class="login-box"
      label-position="left"
      auto-complete="on"
      :rules="formrules"
    >
      <img
        src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
        alt=""
      />
      <el-form-item style="width: 100%" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名">
          <template #prefix>
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="form.password"
          show-password
        >
          <template #prefix>
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span> </template
        ></el-input>
      </el-form-item>

      <el-form-item style="width: 100%" prop="code">
        <el-input v-model="form.code" placeholder="请输入验证码">
          <template #prefix>
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
          </template>
          <template #suffix>
            <img
              @click="changeCode"
              style="
                width: 118px;
                height: 41px;
                position: relative;
                top: 17%;
                left: 6%;
              "
              :src="pic"
              alt=""
            />
          </template>
        </el-input>
      </el-form-item>
      <el-button class="btn" style="width: 90%" @click="loginBtn" type="primary"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import _ from "lodash";
const { mapState: usermapstate } = createNamespacedHelpers("user");
import { login } from "@/api/user";
import { getDetailUserInfo } from "@/api/layout";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "admin",
        password: "admin",
        code: "",
      },
      formrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            pattern: /^[-_a-zA-Z0-9]{4,16}$/,
            message: "请输入正确格式的用户名",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[-_a-zA-Z0-9]{4,16}$/,
            message: "请输入正确格式的密码",
            trigger: "blur",
          },
        ],
        code: [
          { min: 4, max: 4, message: "长度为4", trigger: "blur" },
          {
            pattern: /^[-_a-zA-Z0-9]{4,4}$/,
            message: "请输入正确格式的用户名",
            trigger: "blur",
          },
        ],
      },
      pic: "",
      random: 1234,
    };
  },
  async created() {
    this.random = 1234;
    this.changeCode();
    await this.$store.dispatch("user/getCode");
    this.pic = this.img;
    this.$store.commit("user/setToken");
  },
  mounted() {},
  computed: {
    ...usermapstate(["img"]),
  },
  methods: {
    async loginBtn() {
      if (
        this.form.username.trim() === "" ||
        this.form.password.trim() === ""
      ) {
        return alert("请输入用户名或密码");
      }
      // this.$store.dispatch("user/login", {
      //   clientToken: this.$store.state.user.token,
      //   code: this.form.code,
      //   loginName: this.form.username,
      //   loginType: 0,
      //   password: this.form.password,
      // });
      const res = await login({
        loginType: 0,
        clientToken: 1234,
        code: this.form.code,
        loginName: this.form.username,
        password: this.form.password,
      });
      this.$store.commit("user/setRealToken", res.data.token);
      console.log(res);
      // const info = await getDetailUserInfo(res.data.token);
      // console.log(info);
      this.$store.commit("user/setUserInfo", { ...res.data });
      if (res.data.msg === "登录成功") {
        this.$router.push("/");
      } else {
        alert("登录失败");
      }
    },

    changeCode: _.debounce(async function () {
      if (
        this.form.username.trim() === "" ||
        this.form.password.trim() === ""
      ) {
        return alert("请输入用户名或密码");
      }
      console.log(123);
      console.log(this.random);
      await this.$store.dispatch("user/getCode", this.random);
      this.pic = this.img;
    }, 1000),
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url("http://likede2-admin.itheima.net/img/background.be4fae7d.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 35px;
  .login-box {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 50px 0px 0px;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }
  :deep(el-form-item) {
    margin-top: 500px;
  }

  img {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }
  .el-form-item {
    .el-input {
      height: 50px !important;
      line-height: 60px !important;
      .svg-container {
        margin: 6px;
        margin-left: 4px;
      }
    }
    input {
      height: 60px;
    }
  }
  .btn {
    position: relative;
    left: 10%;
    height: 52px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
    opacity: 0.91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
  }
}
</style>
