<template>
  <div>
    <el-aside class="menu" style="width: 180px">
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#2578b5"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" v-if="!item.ishide" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group
              v-for="(child, index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path">
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>
  
  <script>
export default {
  name: "Menu",
  data() {
    return {
      menus: [],
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
    console.log(this.$router.options);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
  
<style lang="less">
.menu {
  height: 100%;
  .el-menu {
    width: 100%;
    height: 100%;
    .el-submenu .el-menu-item {
      width: 100%;
      min-width: 0;
    }
  }
}
</style>