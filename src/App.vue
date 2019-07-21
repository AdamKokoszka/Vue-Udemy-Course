<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import Header from './components/header.vue'
  export default {
    components: {
      AppHeader: Header
    }
  }

</script>

<style lang="scss">
  h6 {
    margin-left: 10px;
  }

</style>
