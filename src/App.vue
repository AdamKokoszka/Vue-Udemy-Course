<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Stock Trader</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Portfolio <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Stocks</a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">End Day</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Save & Load
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Save Data</a>
                  <a class="dropdown-item" href="#">Load Data</a>
                </div>
              </li>
              <li class="nav-item">
                <h6 class="navbar-text">Funds: $10.00</h6>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <app-home></app-home>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <app-stocks></app-stocks>
      </div>
    </div>
  </div>
</template>
<script>
  import Home from './components/home.vue'
  import Stocks from './components/stocks.vue'
  export default {
    data() {
      return {

      };
    },
    components:{
      AppHome: Home,
      AppStocks: Stocks
    }
  }

</script>

<style lang="scss">
  h6{
    margin-left: 10px;
  }
</style>
