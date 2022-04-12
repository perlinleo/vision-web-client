<template>
  <div class="top-menu">
    <!-- <img src="@/assets/vijn-small.gif" width="300" /> -->
    <nav class="header-nav">
      <router-link to="/">
        <div v-if="this.$route.name != 'home'">
          <img src="@/assets/vijn_logo_small.gif" width="300" />
        </div>
      </router-link>
      <div class="nav-right">
        <router-link to="/sign-in" class="nav-right-item"
          ><Button label="Войти"
        /></router-link>
        <router-link to="/about" class="nav-right-item"
          ><Button label="О проекте"
        /></router-link>
      </div>
    </nav>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";
import Pass from "@/components/Pass.vue";

@Options({
  components: {
    Button,
    Pass,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@font-face {
  font-family: "proxima-nova";
  src: url("@/assets/fonts/SFProDisplay-Medium.woff2") format("woff2");
}

body {
  color: white;
  background: #030303;
}

#app {
  font-family: "proxima-nova";
  text-align: center;
}
.nav-right {
  display: flex;
  margin-top: 12px;
  margin-right: 24px;
}

.top-menu {
  display: flex;
}
.header-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.nav-right-item {
  margin-left: 24px;
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

h1 {
  font-size: 48px;
}
</style>
