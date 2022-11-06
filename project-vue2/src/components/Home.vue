<template>
  <div class="hello">
    <Header></Header>
    <el-container>
      <el-container class="content">
        <Menu></Menu>
        <el-container>
          <el-main>
            <Breadcrumb></Breadcrumb>
            <div class="cont">
              <router-view></router-view>
            </div>
          </el-main>
          <el-footer><Footer></Footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Menu from "./common/Menu.vue";
import Footer from "./common/Footer.vue";
import Breadcrumb from "./common/Breadcrumb.vue";
export default {
  components: {
    Header,
    Footer,
    Menu,
    Breadcrumb,
  },
  name: "Home",
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.hello {
  height: 100%;
  width: 100%;
}
.content {
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 0;
  .cont {
    margin: 20px;
  }
}
</style>
