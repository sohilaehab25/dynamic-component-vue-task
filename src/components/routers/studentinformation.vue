<template>
  <div class="container">
    <h4>Student form details</h4>
    <template>{{loadstudentdata($route.params.id)}}</template>
    <p>Id:{{stdid}} </p>
    <p>name:{{stdname}}</p>
    <p>branch:{{stdbranch}}</p>
    <p>track:{{stdtrack}}</p>


  </div>
</template>

<script>
export default {
  data:()=>({
    stdid:"",
    stdname:"",
    stdbranch:"",
    stdtrack:''

  }),
  methods:{
    async loadstudentdata(_id){
      let loaddata= await fetch(`http://localhost:8000/students/${_id}`);
      let jsonversion= await loaddata.json();
      this.stdid=jsonversion.id;
      this.stdname = jsonversion.name;
      this.stdbranch = jsonversion.branch;
      this.stdtrack = jsonversion.track;
    }
  }

}
</script>

<style>

</style>