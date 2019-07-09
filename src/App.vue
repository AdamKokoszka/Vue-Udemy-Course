<template>
  <div class="container">
    <quote-bar :value_now="quotes.length" :value_max="value_max"></quote-bar>
    <quote-area @NewQuote="AddQuote"></quote-area>
    <quote-grid :quotes="quotes" @DeletedItem="DeleteItem"></quote-grid>
  </div>
</template>

<script>
import QuoteBar from './components/QuoteBar.vue'
import QuoteArea from './components/QuoteArea.vue'
import QuoteGrid from './components/QuoteGrid.vue'

export default {
  data: ()=>{
    return{
      quotes:['Some Test'],
      value_max: 10
    };
  },
  methods:{
    AddQuote(quote){
      if( this.quotes.length >= this.value_max ){
        return alert("Najpierw usuń jakieś notatki!");
      }
      this.quotes.push(quote);
    },
    DeleteItem(index){
      if(this.quotes.length <= 1){
        return alert("Musi być conajmniej jedna notatka!");
      }
      this.quotes.splice(index, 1);
    }
  },
  components: {
    QuoteBar,
    QuoteArea,
    QuoteGrid
  }
}
</script>

<style lang="scss">

</style>
