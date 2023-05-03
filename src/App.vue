<template>
  <div id="app">
    <nav>
      | <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/clientlogin">clientlogin</router-link> |
      <router-link to="/clientprofile">clientprofile</router-link> |
      <router-link to="/restaurantlogin">restaurantlogin</router-link> |
      <router-link to="/restaurantprofile">restaurantProfile</router-link> |
      <router-link to="/discover">discover</router-link> |
      <router-link to="/checkout">checkout</router-link> |
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
  color: #4a7964;
}
</style>
