<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="ChangeName">Change Name</button>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :Name="name" :age="age" @ResetName="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :age="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
      data: ()=>{
        return {
          name: "Adam",
          age: "20"
        };
      },
      methods: {
        ChangeName(){
          this.name = "Karol";  
        }
      },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style lang="scss">
    .component {
        background-color: lightblue;
    }
</style>
