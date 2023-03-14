import {createRouter, createWebHashHistory }from 'vue-router'


import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'

const routes = [
    {path: '/', component: HomeView},
    {path: '/classificador', component: FormView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router;
