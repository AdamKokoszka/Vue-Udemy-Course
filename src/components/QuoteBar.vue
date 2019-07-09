<template>
  <div class="row">
    <div class="col">
      <h1>Ilość Notatek</h1>
      <div class="bar-container">
        <div class="bar-status" :style="{ width: value_now + '0%' }">{{ value_now }} / {{value_max}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value_now', 'value_max']
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .bar-container {
    width: 100%;
    background-color: #e8e8e8;
    border-radius: 5px;
    margin-bottom: 20px;

    .bar-status {
      padding: 5px 10px;
      border-radius: 5px;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      background-color: #0a32db;
      transition: all 1s;
    }
  }

</style>
