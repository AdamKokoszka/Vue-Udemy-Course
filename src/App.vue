<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Quotes Added</h1>
        <div class="progress-bar">
          <div class="value" :style="{width: value_now+'0%'}">{{ value_now }} / {{ value_max}}</div>
        </div>
        <button @click="ValueUp">Click!</button>
      </div>
    </div>
    <quote-items></quote-items>
    <quote-area @quoteAdded="newQuote"></quote-area>
    <p>{{ newQuote }}</p>
    <quote-footer></quote-footer>
  </div>
</template>

<script>
  import QuoteArea from './components/QuoteArea'
  import QuoteItems from './components/QuoteItems'
  import QuoteFooter from './components/QuoteFooter'
  export default {
    data: () => {
      return {
        value_now: 3,
        value_max: 10,
        newQuote: ''
      };
    },
    methods: {
      ValueUp() {
        if (this.value_now < this.value_max) {
          this.value_now++
        } else {
          this.TooMuch();
        }
      },
      TooMuch() {
        alert("Przekroczyłeś zakres!");
      }
    },
    components: {
      QuoteArea,
      QuoteItems,
      QuoteFooter
    }
  }

</script>

<style>
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
