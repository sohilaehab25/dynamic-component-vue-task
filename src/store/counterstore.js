// define store from counter: store like any component contains (data:()=>({}) but it named here state:()=>({}), methods: {actions,},getters:{computed} )

//1-inside store component we need to import method defineStore from pinia
import {defineStore} from 'pinia';


//define store("id from the store component",{methods, state, component})
export const usecounterstore =  defineStore("counterstore.js",{

    state:()=>({
        counter : 10
    }),
})