<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <button v-customOn:click="clicked" class="btn btn-primary">Click Me!</button>
        <hr>
        <div class="box" v-customOn:mouseenter="mouseEnter" v-customOn:mouseleave="mouseLeave"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      clicked(){
        alert("Clicked!")
      },
      mouseEnter(){
        console.log("Mouse Entry!");
      },
      mouseLeave(){
        console.log("Mouse Leaved!");
      }
    },
    directives: {
      customOn: {
        bind(el, binding) {
//          el.onclick = ()=>{
//            binding.value();
//          }
          let type= binding.arg;
          let fn= binding.value; 
          el.addEventListener(type, fn);
        }
      }
    }
  }

</script>

<style>
  .box{
    width: 100px;
    height: 100px;
    background-color: lightgreen;
  }
</style>
