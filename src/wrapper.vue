<template>
  <div class="container">
    <div class="row col-12 text-center p-2 m-2 bg-light" style="color:rgb(95, 16, 16)">
        <headercomponent/>
    </div>
    <div class="row justify-content-between">
        <div class=" col-3 text-center  p-2 m-2">
            <navcomponent/>
        </div>
        <div class=" col-8 text-center">
            <contentcomponents/>
        </div>
    </div>
    <div class="row col-12 text-center  p-2 m-2" style="background-color: lightgray;  color:rgb(95, 16, 16)">
        <footercomponent/>
    </div>
  </div>
</template>

<script>
  import headercomponent from "./components/headercomponent.vue";
  import footercomponent from "./components/footercomponent.vue";
  import navcomponent from "./components/navcomponent.vue";
  import contentcomponents from "./components/contentcomponents.vue";
export default {
    data:()=>({

    }),
    methods:{

    },
    components:{
        headercomponent,
        footercomponent,
        navcomponent,
        contentcomponents
    }

}
</script>

<style>

</style>