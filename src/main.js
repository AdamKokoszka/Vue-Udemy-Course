import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { store } from './store/store.js'
import { routes } from './routes.js'
import axios from 'axios'

Vue.use(VueRouter);
axios.defaults.baseURL = 'https://vue-stock-trader-01.firebaseio.com'

//Vue.use(VueResource);
//Vue.http.options.root = 'https://vue-stock-trader-01.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
