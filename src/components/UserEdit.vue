<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="ChangeAge">Change Age</button>
        <p>My age: {{ age }}</p>
    </div>
</template>

<script>
  import { eventBus } from '../main';
  export default{
    props: ["age"],
    methods: {
      ChangeAge(){
        this.age="25",
//        this.$emit("ChangeAge", this.age)
          eventBus.$emit("ChangeAge", this.age);
      }
    }
  }
</script>

<style scoped lang="scss">
    div {
        background-color: lightgreen;
    }
</style>
