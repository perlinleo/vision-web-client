<template>
  <div class="top-menu">
    <!-- <img src="@/assets/vijn-small.gif" width="300" /> -->
    <nav class="header-nav">
      <router-link to="/">ВИЖН</router-link>
      <div style="display: flex">
        <div class="link-button">
          <router-link to="/sign-in">Войти</router-link>
        </div>
        <div class="link-button">
          <router-link to="/about">О проекте</router-link>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "proxima-nova";
  src: url("@/assets/fonts/SFProDisplay-Medium.woff2") format("woff2");
}

body {
  background-color: black;
  color: white;
}

body {
  background: linear-gradient(
    307deg,
    #f593ff,
    #a9b2ff,
    #ffffff,
    #4cff09,
    #ffc409,
    #00ff20,
    #ff0000
  );
  background-size: 1400% 1400%;

  animation: AnimationName 20s ease infinite;
}

@keyframes AnimationName {
  0% {
    background-position: 0% 11%;
  }
  50% {
    background-position: 100% 90%;
  }
  100% {
    background-position: 0% 11%;
  }
}
#app {
  font-family: "proxima-nova";
  text-align: center;
}
.link-button {
  height: 60px;
  width: 150px;
  background: #1c1c1c;
  opacity: 0.6;
  font-size: 24px;
  border-radius: 16px;
  backdrop-filter: blur(20px);
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 24px;
}

.top-menu {
  display: flex;
}
.header-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
nav {
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: #ffffff;
    }
    color: white;
    text-decoration: none;
  }
}
</style>
