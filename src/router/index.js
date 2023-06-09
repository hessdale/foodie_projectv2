import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientLoginPage from '../views/ClientLoginPage'
import ClientProfilePage from '../views/ClientProfilePage'
import RestaurantLoginPage from '../views/RestaurantLoginPage.vue'
import RestaurantProfilePage from '../views/RestaurantProfilePage.vue'
import DiscoverPage from '../views/DiscoverPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'
import OrdersPage from '../views/OrdersPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: `/clientlogin`,
    name: `client log in`,
    component: ClientLoginPage
  },
  {
    path: `/clientprofile`,
    name: 'client profile',
    component: ClientProfilePage
  },
  {
    path: `/restaurantlogin`,
    name: `restaurant log in`,
    component: RestaurantLoginPage
  },
  {
    path: `/restaurantprofile`,
    name: `restaurant profile`,
    component: RestaurantProfilePage
  },
  {
    path: `/discover`,
    name: `discover restaurants`,
    component: DiscoverPage
  },
  {
    path: `/checkout`,
    name: `checkout`,
    component: CheckoutPage
  }, {
    path: `/orders`,
    name: `orders`,
    component: OrdersPage
  }
]

const router = new VueRouter({
  routes
})

export default router
