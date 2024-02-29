<template>
    <div class="container">
      <!-- Navigation Links -->
      <div class="row mb-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/homepageVue" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/navcomponentVue" class="nav-link">Nav</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/infocomponentVue" class="nav-link">Info</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/itiVue" class="nav-link">MCUITI</router-link>
          </li>
        </ul>
      </div>
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </template>
  

<script>
export default {

}
</script>

<style>

</style>