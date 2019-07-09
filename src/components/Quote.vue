<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="quote">
      <slot></slot>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .quote {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    padding: 20px;
    margin: 5px;
    color: #ffffff;
    background-color: #ff7d7d;
    border-radius: 5px;
    border: 1px solid #b73a3a;
    transition: all 1s;
    cursor: pointer;
  }

  .quote:hover {
    background-color: #d49797;
  }

</style>
