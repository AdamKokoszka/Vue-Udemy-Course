<template>
  <div class="col-4">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">{{stock.name}} <small>(price: {{stock.price}}, Quantity: {{stock.quantity}})</small></div>
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <input placeholder="Quantity" class="form-control form-control-sm" type="text" v-model="quantity">
          </div>
          <div class="col-3">
            <button class="btn btn-dark" @click="sell()" :disabled="quantity <= 0 || buttonString == 'Too much!'">{{buttonString}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0,
        buttonString: 'Sell'
      };
    },
    methods: {
      sell() {
        const ordersell = {
          sellId: this.stock.id,
          sellQuantity: this.quantity
        }
        this.$store.commit('sell', ordersell);
        this.quantity = 0;
      }
    },
    watch: {
      quantity() {
        if (this.quantity > this.stock.quantity) {
          this.buttonString = "Too much!";
        } else {
          this.buttonString = "Sell";
        }
      }
    }
  }

</script>
