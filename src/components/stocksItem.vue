<template>
  <div class="col-4">
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
      <div class="card-header">{{stock.name}} <small>(price: {{stock.price}})</small></div>
      <div class="card-body">
        <div class="row">
          <div class="col-9">
            <input placeholder="Quantity" class="form-control form-control-sm" type="text">
          </div>
          <div class="col-3">
            <button class="btn btn-dark">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props:['stock']
  
}
</script>
