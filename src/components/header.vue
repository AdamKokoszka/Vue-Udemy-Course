<template>
  <div class="row">
    <div class="col">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand" tag="a">Stock Trader</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <router-link to="/portfolio" class="nav-item" tag="li">
              <a class="nav-link">Portfolio</a>
            </router-link>
            <router-link to="/stocks" class="nav-item" tag="li">
              <a class="nav-link">Stocks</a>
            </router-link>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="endDay">End Day</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Save & Load
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
              </div>
            </li>
            <li class="nav-item">
              <h6 class="navbar-text">Funds: {{funds}}$</h6>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex';
  import axios from 'axios';
  export default {
    computed: {
      funds() {
        return this.$store.state.funds;
      }
    },
    methods: {
      endDay() {
        this.$store.commit('endDay');
      },
      saveData(){
        const data = {
          funds: this.$store.state.funds,
          stocks: this.$store.state.stocks
        }
//        this.$http.put('data.json', data);
        axios.put('/data.json', data)
          .catch(error => console.log(error))
        
      },
      loadData(){
        this.$store.commit('loadData');
      }
//      ...mapMutations([
//        'endDay'
//      ]),
    }
  }

</script>
<style lang="scss">
  nav {
    margin: 10px 0px;
  }

</style>
