<template>
  <div class="imgDiv">
    <div class="info">
      点击<el-link type="danger" @click="gotoLogin">这里</el-link>返回主页
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    gotoLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less">
.imgDiv {
  width: 100%;
  height: 100%;
  background: url(../assets/404.jpeg) center no-repeat;
  background-size: 100% 100%;
}
.info {
  font-size: 30px;
  padding-top: 20px;
  .el-link {
    font-size: 30px;
  }
}
</style>