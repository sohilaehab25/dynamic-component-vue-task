<template>
  <div class="row">
    <div class="row col-3">
      <ul class="list-group">
        <li class="list-group-item" aria-current="true"><a href="#" @click.prevent="targetpage='studentsVue'">students</a></li>
        <li class="list-group-item  active"><a href="#" @click.prevent="targetpage='info'">info</a></li>
        <li class="list-group-item"><a href="#" @click.prevent="targetpage='contact'">ContatUs</a></li>
        <li class="list-group-item"><a href="#" @click.prevent="targetpage='home'" >Home</a></li>
        <li class="list-group-item"><a href="#" @click.prevent="targetpage='iti'">ITI</a></li>
        <li class="list-group-item"><a href="#" @click.prevent="targetpage='mcuiti'">MCUITI</a></li>
      </ul>
      </div>

    <div class=" col-8" >
      <component :is="targetpage"/>

    </div>
    
  </div>

      
    </template>

<script>
import studentsVue from './dynamiccomponents/students.vue';
import contact from './dynamiccomponents/contactus.vue';
import info from './dynamiccomponents/infocomponent.vue';
import iti from './dynamiccomponents/iti.vue';
import mcuiti from './dynamiccomponents/mcuiti.vue';
import home from './dynamiccomponents/homepage.vue'

export default {
  data:()=>({
    targetpage:"studentsVue",
  }),
  components:{
    studentsVue,
    contact,info,iti,mcuiti,home
  }

}
</script>

<style>

</style>