import { createRouter, createWebHistory } from 'vue-router'

import UserView from './views/UserView.vue'
import ServerView from './views/ServerView.vue'

import UsersView from './views/admin/UsersView.vue'
import ServersView from './views/admin/ServersView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: UserView },
    { path: '/server', component: ServerView },

    { path: '/admin/users', component: UsersView },
    { path: '/admin/servers', component: ServersView },
  ],
})

export default router