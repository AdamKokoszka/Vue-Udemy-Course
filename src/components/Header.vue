<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact>Home</router-link>
    <router-link to="/user" tag="li" active-class="active">User</router-link>
  </ul>
</template>


<style lang="scss">
  li {
    background-color: #f2f2f2;
    margin: 3px;
    padding: 10px;
    border-radius: 5px;
  }

  li:hover {
    background-color: #0058ff;

    & a {
      color: #fff;
    }
  }
  .active{
    background-color: #0e61ff;
    color: #fff;
  }

</style>
