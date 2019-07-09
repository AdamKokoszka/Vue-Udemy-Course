<template>
  <div class="row">
    <div class="col-8 offset-2">
      <h1>Twoja Notatka</h1>
      <textarea name="quote" cols="20" rows="8" v-model="quote" placeholder="Napisz swoją notatkę"></textarea>
    </div>
    <div class="col-8 offset-2">
      <button type="button" class="btn btn-primary" @click="AddQuote">Dodaj</button>
    </div>
  </div>
</template>
<script>
  export default {
    data: ()=>{
      return{
        quote: ''  
      }
    },
    methods: {
      AddQuote() {
        this.$emit('NewQuote', this.quote),
        this.quote=''
      }
    }
  }

</script>
<style lang="scss">
  textarea {
    width: 100%;
  }

</style>
