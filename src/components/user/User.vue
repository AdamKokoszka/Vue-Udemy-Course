<template>
   <div>
    <h1>The User Page</h1>
     <hr>
     <p>Loaded ID: </p>
     <button class="btn btn-primary" @click="navToHome">Go to Home</button>
     <hr>
     <router-view></router-view>
   </div>
</template>


<script>
export default{
  methods: {
    navToHome(){
      this.$router.push({name: 'home'});
    }
  }
}
</script>