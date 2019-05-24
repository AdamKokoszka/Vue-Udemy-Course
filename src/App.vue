<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h2 slot="header">Some Header</h2>
          <p>Any text in paragraph</p>
          <p>Hello World</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from "./components/Quote.vue"
  export default {
    components: {
      appQuote: Quote
    }
  }

</script>

<style>

</style>
