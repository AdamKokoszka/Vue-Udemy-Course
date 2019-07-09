<template>
  <div class="row">
      <div class="col">
        <h1>Quotes Added</h1>
        <div class="progress-bar">
          <div class="value" :style="{width: value_now+'0%'}">{{ value_now }} / {{ value_max}}</div>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    props: ['value_now', 'value_max']
  }
</script>
<style lang="scss">
  .progress-bar {
    width: 100%;
    height: 20px;
    border-radius: 20px;
    background-color: #dddddd;
  }

  .value {
    width: 60%;
    height: 20px;
    border-radius: 20px 0px 0px 20px;
    background-color: #3737ff;
    color: #ffffff;
    text-align: center;
    transition: width 1s;
  }
</style>