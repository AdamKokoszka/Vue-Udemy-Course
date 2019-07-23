<template>
  <div class="col-4">
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
      <div class="card-header"><strong>{{stock.name}} </strong><small>(price: {{stock.price}})</small></div>
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <input class="form-control form-control-sm" type="text" v-model="quantity">
          </div>
          <div class="col-3">
            <button class="btn btn-dark" @click="buy()" :disabled="quantity <= 0 || buttonString == 'Too much!'">{{buttonString}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['stock', 'funds'],
    data() {
      return {
        quantity: 0,
        buttonString: 'Buy',
      };
    },
    methods: {
      buy() {
        const order = {
          stockId: this.stock.id,
          stockName: this.stock.name,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.$store.commit('buy', order);
        this.quantity = 0;
      }
    },
    watch: {
      quantity: function(value) {
        if (value * this.stock.price > this.funds) {
          this.buttonString = "Too much!";
        } else {
          this.buttonString = "Buy";
        }
      }
    }

  }

</script>
