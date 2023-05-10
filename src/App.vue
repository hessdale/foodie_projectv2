<template>
  <div id="app">
    <nav>
      <router-link to="/clientlogin">ClientLogin</router-link> |
      <router-link to="/clientprofile">ClientProfile</router-link> |
      <router-link to="/restaurantlogin">RestaurantLogin</router-link> |
      <router-link to="/restaurantprofile">RestaurantProfile</router-link> |
      <router-link to="/discover">Discover</router-link> |
      <router-link to="/checkout">Checkout</router-link> |
      <router-link to="/orders">Orders</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #d4671f;
}
</style>
