import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './store/store.js'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
