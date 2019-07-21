<template>
  <div class="row">
    <stocks-item v-for="stock in stocks" :stock="stock"></stocks-item>
  </div>
</template>

<script>
  import StocksItem from './stocksItem.vue'
  export default {
    data(){
      return{
        stocks:[
          {id: 1, name: 'BMW', price: 110},
          {id: 2, name: 'Google', price: 200},
          {id: 3, name: 'Apple', price: 250},
          {id: 4, name: 'Twitter', price: 8}
        ]
      };
    },
    components: {
      StocksItem
    }
  }

</script>

<style lang="scss">
  input {
    margin-top: 3px;
  }

</style>
