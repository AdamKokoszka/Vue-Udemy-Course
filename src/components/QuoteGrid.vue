<template>
  <div class="row">
    <quote-item v-for="(quote, index) in quotes" @click.native="DeleteItem(index)">{{quote}}</quote-item>
  </div>
</template>
<script>
  import QuoteItem from './QuoteItem'
  export default {
    props: ['quotes'],
    data: () => {
      return {

      }
    },
    methods: {
      DeleteItem(index ) {
        this.$emit('DeletedItem', index);
      }
    },
    components: {
      QuoteItem
    }
  }

</script>
<style lang="scss">


</style>
