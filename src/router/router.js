import {createRouter, createWebHashHistory }from 'vue-router'


import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import HistoryView from '../views/HistoryView.vue'
import ResultView from '../views/ResultView.vue'

const routes = [
    {path: '/', component: HomeView},
    {path: '/classificador', component: FormView},
    {path: '/historico', component: HistoryView},
    {path: '/resultado', component: ResultView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router;
