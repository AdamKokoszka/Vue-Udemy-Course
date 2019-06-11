<template>
  <div class="row">
    <div class="col-6 offset-3">
      <h1>Quote</h1>
      <textarea name="" id="" cols="30" rows="5" v-model="newquote"></textarea>
      <button @click="AddQuote">Add Quote!</button>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        newquote: ''
      };
    },
    methods: {
      AddQuote(){
        this.$emit('quoteAdded', this.newquote);
        this.quote = '';
      }
    }
  }

</script>
<style>
  textarea {
    width: 100%;
  }

  button {
    margin: 5px auto;
    display: block;
    background-color: #0036ad;
    border: 1px solid #00005f;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

</style>
