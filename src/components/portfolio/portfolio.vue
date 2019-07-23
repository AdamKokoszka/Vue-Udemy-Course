<template>
  <div class="row">
    <portfolio-item v-if="stock.quantity > 0" v-for="stock in stocks" :stock="stock"></portfolio-item>
  </div>
</template>
<script>
  import PortfolioItem from './portfolioItem.vue'
  export default {
    computed: {
      stocks(){
        return this.$store.state.stocks;
      }
    },
    components: {
      PortfolioItem
    }
  }

</script>
<syle lang="scss">

</syle>
