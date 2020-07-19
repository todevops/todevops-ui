import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import "./plugins/element.js";
import "./plugins/element.js";
import "./plugins/element.js";
import "./plugins/element.js";
import "./plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
