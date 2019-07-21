<template>
  <div class="row">
    <app-card></app-card>
    <app-card></app-card>
  </div>
</template>

<script>
  import Card from './card.vue'
  export default {
    components: {
      AppCard: Card
    }
  }

</script>

<style lang="scss">
  input {
    margin-top: 3px;
  }

</style>
