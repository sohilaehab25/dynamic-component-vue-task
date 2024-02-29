<template>
    <div>
        <h3>counter</h3>
        <p>counter component</p>
        <p>{{counterstore.counter}}</p>
      

    </div>
</template>

<script>
import {counterstore} from '@/store/counterstore.js'
export default {
    data:()=>({
        usecounterstore:counterstore(),
    })

}
</script>

<style>

</style>