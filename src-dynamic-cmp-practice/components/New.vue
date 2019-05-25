<template>
  <div>
    <h3>New</h3>
    <button @click="counter++">Click me!</button>
    <p>{{counter}}</p>
  </div>

</template>


<script>
  export default {
    data: function(){
      return {
        counter: 0
      };
    },
    destroyed(){
      console.log("Destroyed!");
    },
    deactivated(){
      console.log("Deactivated!");
    },
    activated(){
    console.log("Activated");
  }
  }

</script>

<style scoped lang="scss">

</style>
