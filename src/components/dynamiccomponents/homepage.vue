<template>
    <div class="row col-12 m-4 bg-lgiht fs-1">
      <p class="text-danger">home</p>
    </div>
  </template>
  
  <script>
  export default {
    created(){
      alert('created home');
    },
    activated(){
      alert('home activated');

    },
    deactivated(){
      alert('home deactivated');
    }
  
  }
  </script>
  
  <style>
  
  </style>