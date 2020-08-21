import Vue from 'vue'
import App from './App'
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './permission/index'
import '@/common/sass/index.sass'

Vue.use(ElementUI, { size: "mini" });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#root-wrapper')