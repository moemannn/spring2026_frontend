import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ServerView from './views/ServerView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/server', component: ServerView },
  ],
})

export default router