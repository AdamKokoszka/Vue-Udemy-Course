import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.directive('color', {
  bind(el, binding, vnode) {
    //    el.style.backgroundColor = 'green';  
    //    el.style.backgroundColor = binding.value;
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == "bgc") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay)
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
