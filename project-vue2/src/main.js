import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import router from "./router";
import service from "@/utils/service"


Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.service = service;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
