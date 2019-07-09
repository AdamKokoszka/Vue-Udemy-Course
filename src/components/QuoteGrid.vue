<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
  </div>
</template>
<script>
  import Quote from './Quote.vue';

  export default {
    props: ['quotes'],
    components: {
      appQuote: Quote
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index);
      }
    }
  }

</script>
<style lang="scss">
  .item {
    width: 20%;
    background-color: #ff8383;
    color: #ffffff;
    border: 1px solid #831717;
    border-radius: 5px;
    padding: 15px;
    margin: 8px;
    font-size: 20px;
    box-sizing: border-box;
    float: left;
    transition: background-color 0.5s;

    &:hover {
      background-color: #ff1c1c;
    }
  }

</style>
