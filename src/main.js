import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
import VueRouter from "vue-router";
import router from "./routes";
import Vuelidate from "vuelidate";
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
