<template>
  <div class="row">
    <stocks-item v-for="stock in stocks" :stock="stock" :funds="funds"></stocks-item>
  </div>
</template>

<script>
  import StocksItem from './stocksItem.vue'
  export default {
    components: {
      StocksItem
    },
    computed: {
      stocks(){
        return this.$store.state.stocks;
      },
      funds(){
        return this.$store.state.funds;
      }
    }
  }

</script>

<style lang="scss">
  input {
    margin-top: 3px;
  }

</style>
