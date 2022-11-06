<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台通用管理系统</span>
      </div>
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')">
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from "@/api/api";
export default {
  name: "Login",
  data() {
    let validate = (rule, value, callback) => {
      let reg =
        /^\S*(?=\S{6,16})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入密码6-16位包含大小写字母数字特殊符号"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
      },
      rules: {
        pass: [
          {
            validator: validate,
            trigger: "blur",
          },
          { min: 6, max: 16, message: "密码长度在6-16位", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入用户名", trigger: "bulr" },
          { min: 2, max: 10, message: "用户名长度为2-10位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          login(this.ruleForm).then((res) => {
            if (res.data.status == 200) {
              localStorage.setItem("token", res.data.token);
              this.$message({ message: res.data.message, type: "success" });
              this.$router.push("/home");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../assets/back.jpeg) center no-repeat;
  .el-card {
    background: #ffffff52;
  }
  .el-form-item__label {
    color: #000;
  }
  .box-card {
    width: 500px;
    margin: 200px auto;
  }
  .el-button {
    width: 100%;
  }
}
</style>