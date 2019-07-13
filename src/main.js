import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.filter('lowercase', function(value){
  return value.toLowerCase();
});
Vue.mixin({
  created(){
    console.log('Global Mixin - Created Hook');
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
