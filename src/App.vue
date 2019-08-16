<template>
  <div id="app">
    <nav class="menu">
      <router-link to="/Characters">Characters</router-link>
      <router-link to="/Comics">Comics</router-link>
      <router-link to="/Series">Series</router-link>
      <router-link to="/Stories">Stories</router-link>
      <router-link to="/Creators">Creators</router-link>
      <router-link to="/Events">Events</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  align-items: center;
}

.menu{
  display: flex;
  flex-direction: column;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
