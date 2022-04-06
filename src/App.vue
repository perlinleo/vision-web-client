<template>
  <div class="top-menu">
    <img src="@/assets/vijn-small.gif" width="300" />
    <nav>
      <router-link to="/">Proxima-nova</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sign-in">Войти</router-link>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "proxima-nova";
  src: url("@/assets/fonts/ProximaNova-Black.woff") format("woff");
}

#app {
  font-family: "proxima-nova";
  text-align: center;
  color: #000000;
}

.top-menu {
  display: flex;
}

nav {
  padding: 30px;

  a {
    color: #000000;

    &.router-link-exact-active {
      color: #ff0000;
    }
    text-decoration: none;
    font-size: 24px;
  }
}
</style>
