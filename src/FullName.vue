<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" :value="firstName" @input="nameChange(true, $event)">
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" :value="lastName" @input="nameChange(false, $event)">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      nameChange(isTrue, event){
        let name= '';
        if(isTrue){
          name = event.target.value + ' ' + this.lastName;
        } else {
          name = this.firstName + ' ' + event.target.value;
        }
        this.value = name;
        this.$emit('input', this.value);
      }
    },
    computed: {
      firstName() {
        return this.value.split(" ")[0];
      },
      lastName() {
        return this.value.split(" ")[1];
      }
    }
  }

</script>
