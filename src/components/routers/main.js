// create routers
import { createRouter, createWebHistory } from 'vue-router';
import navcomponentVue from '../navcomponent.vue';
import maindynamic from '../../maindynamic.vue';
import contactusVue from '../dynamiccomponents/contactus.vue';
import homepageVue from '../dynamiccomponents/homepage.vue';
import infocomponentVue from '../dynamiccomponents/infocomponent.vue';
import itiVue from '../dynamiccomponents/iti.vue';
import mcuitiVue from '../dynamiccomponents/mcuiti.vue';
import studentinformationVue from './studentinformation.vue';
import undercontraction from'./underconstraction.vue'


// create array of objects as router
const routers = [
  {
    path: '/navcomponentVue',
    component: navcomponentVue,
  },
  {
    path: '/',
    component: maindynamic,
  },
  {
    path: '/contactusVue',
    component: contactusVue,
  },
  {
    path: '/homepageVue',
    component: homepageVue,
  },
  {
    path: '/infocomponentVue',
    component: infocomponentVue,
  },
  {
    path: '/itiVue',
    component: itiVue,
  },
  {
    path: '/mcuitiVue',
    component: mcuitiVue,
  },
  {
    path: '/studentinformationVue/:id',
    component: studentinformationVue,
  },
  //to render if user use another  word from the path
  {
    path: '/:catchAll(.*)',
    component: undercontraction,
  },
];

// create router object using createRouter
const router = createRouter({
  // property=arrayname;
  routes: routers,

  // function change #in url to /local;
  history: createWebHistory(),

});

// export router object
export default router;
