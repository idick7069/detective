import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue';
import Container from '../components/Container.vue';
import Welcome from '../components/Welcome.vue';
import Town from '../components/Town.vue';
import Scale from '../components/Scale.vue';
import Stomach from '../components/Stomach.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
      }, {
        path: '/Welcome',
        name: 'Welcome',
        component: Welcome
      },
      {
        path: '/Town',
        name: 'Town',
        component: Town
      },{
        path: '/Scale',
        name: 'Scale',
        component: Scale
      },{
        path: '/Stomach',
        name: 'Stomach',
        component: Stomach
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
