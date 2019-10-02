import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';
import Section from './components/Section.vue';
import HelloWorld from './components/HelloWorld.vue';


Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.component('appSection',Section);
Vue.component('helloWorld',HelloWorld);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
