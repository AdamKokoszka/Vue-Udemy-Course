<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-color:bgc.delayed="color">Color this</p>
        <p v-local-color:bgc.delayed.blink="{mainColor: 'blue', secondColor: 'green', delay: 500}">Color this too</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        color: 'blue'
      }
    },
    methods: {

    },
    components: {

    },
    directives: {
      'local-color': {
        bind(el, binding, vnode) {
          let delay = 0;
          if (binding.modifiers['delayed']) {
            delay = 3000;
          }
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                if (binding.arg == "bgc") {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay)
          } else {
            setTimeout(() => {
              if (binding.arg == "bgc") {
                el.style.backgroundColor = binding.value.mainColor;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay)
          }
        }
      }
    }
  }

</script>

<style>
</style>
