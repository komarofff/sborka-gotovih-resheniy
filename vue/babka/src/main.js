import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import router from './router'
import axios from "axios";
import {store} from './store'
Vue.use(VueRouter)
Vue.use(Vuelidate)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

