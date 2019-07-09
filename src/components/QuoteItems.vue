<template>
  <div class="row">
    <div class="col-12">
      <h1>All elements</h1>
      <div class="item" @click="DeleteItem">{{ text1 }}</div>
      <div class="item"> {{ text1 }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        text1: 'Text1'
      };
    },
    methods: {
      DeleteItem(){
        
      }
    }
  }

</script>
<style lang="scss">
  .item {
    width: 20%;
    background-color: #ff5656;
    border: 1px solid #831717;
    border-radius: 5px;
    padding: 5px;
    margin: 8px;
    box-sizing: border-box;
    float: left;
  }

</style>
