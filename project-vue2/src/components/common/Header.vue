<template>
  <div class="header">
    <el-header>
      <div>通用管理系统</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>
  
  <script>
export default {
  name: "Header",
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = "admin";
  },
};
</script>
  
<style lang="less" scoped>
.header {
  .el-header {
    background: #2578b5;
    color: #fff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
}
</style>