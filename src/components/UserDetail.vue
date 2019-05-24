<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <button @click="ResetName">Reset Name</button>
        <p>My name: {{ Name }}</p>
        <p>Age: {{ age }}</p>
    </div>
</template>

<script>
  import { eventBus } from '../main';
  export default{
    props: ["Name", "age"],
    methods: {
      ResetName(){
        this.Name = "Adam";
        this.$emit("ResetName",this.Name);
      }
    },
    created(){
      eventBus.$on("ChangeAge", (age)=>{
        this.age = age
      });
    }
  }
</script>

<style scoped style="scss">
    div {
        background-color: lightcoral;
    }
</style>
