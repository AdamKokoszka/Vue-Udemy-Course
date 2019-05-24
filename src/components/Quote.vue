<template>
  <div class="container">
   <div class="italic">
    <slot name="header"></slot>
   </div>
    <slot></slot>
  </div>
  
</template>


<script>
  export default{
    props: ["quote"]
  }
</script>

<style scoped lang="scss">
  .container{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h2{
    color: #fda500;
  }
  .italic{
    font-style: italic;
    padding: 8px;
    border: 2px solid #d86c00;
    border-radius: 10px;
  }
</style>