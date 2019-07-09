<template>
  <div class="col-3">
    <div class="item">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {

      }
    },
    methods: {

    }
  }

</script>
<style lang="scss">
  .item {
    padding: 15px;
    background-color: #ffd9d9;
    border: 1px solid #e08181;
    border-radius: 5px;
    margin: 10px;
    transition: all 0.5s;

    &:hover {
      background-color: #f88989;
      cursor: pointer;
    }
  }

</style>
