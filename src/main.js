import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.filter('calc-length', function(value) {
    return value + ' (' + value.length + ')';
});


new Vue({
  el: '#app',
  render: h => h(App)
})
