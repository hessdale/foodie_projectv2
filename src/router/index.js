import { createRouter, createWebHashHistory } from 'vue-router'
import ClientHomePage from '../views/ClientHomePage'
import ClientLoginPage from '../views/ClientLoginPage'
import ClientProfilePage from '../views/ClientProfilePage'

const routes = [
  {
    path: '/',
    name: 'client home',
    component: ClientHomePage
  }, {
    path: `/clientlogin`,
    name: `client log in`,
    component: ClientLoginPage
  },
  {
    path: `/clientprofile`,
    name: 'client profile',
    component: ClientProfilePage
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
