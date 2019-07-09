<template>
  <div class="container">
    <quote-bar :value_now="quotes.length" :value_max="value_max"></quote-bar>
    <quote-area @quoteAdded="NewQuote"></quote-area>
    <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    <quote-footer></quote-footer>
  </div>
</template>

<script>
  import QuoteBar from './components/QuoteBar'
  import QuoteArea from './components/QuoteArea'
  import QuoteGrid from './components/QuoteGrid'
  import QuoteFooter from './components/QuoteFooter'
  export default {
    data: () => {
      return {
        quotes: ['Some text'],
        value_max: 10
      };
    },
    methods: {
      NewQuote(quote){
        if (this.quotes.length >= this.value_max) {
          return alert('Please delete Quotes first!');
        }
        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    },
    components: {
      QuoteBar,
      QuoteArea,
      QuoteGrid,
      QuoteFooter
    }
  }

</script>

<style>
  

</style>
