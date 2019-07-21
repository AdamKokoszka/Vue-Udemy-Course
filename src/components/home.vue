<template>
  <div class="row">
    <div class="col">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h3 class="display-6">Trade or View your Portfolio</h3>
          <p>You may Save & Load your Data</p>
          <p>Click on 'End Day' to begin a new Day!</p>
          <hr>
          <h5><strong>Your Funds: ${{funds}}</strong></h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      funds() {
        return this.$store.state.funds;
      }
    }
  }

</script>
