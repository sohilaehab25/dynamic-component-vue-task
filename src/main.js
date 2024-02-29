import { createApp } from 'vue'


//dealing with pinia
import { createPinia } from 'pinia' 

// Import the component
import statecounter from '@/components/statemangment/statecounter.vue'

// Create the Pinia instance from createPinia()
const pinia = createPinia();

const app = createApp(statecounter);

// Use Pinia in the app
app.use(pinia);

// Mount the app to the DOM
app.mount('#app')




// createApp(statecounter).mount('#app')


//dealing with dynamic component
//import maindynamic from './maindynamic.vue'
//createApp(maindynamic).mount('#app')


//dealing with routers routers
// import landingcomponent from './components/routers/landingcomponent.vue'
// import router from './components/routers/main.js'
// const app= createApp(landingcomponent);
// app.use(router);
// app.mount('#app');
//createApp(landingcomponent).use(router).mount('#app')
