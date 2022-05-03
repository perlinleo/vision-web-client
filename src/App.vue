<template>
  <div class="top-menu">
    <!-- <img src="@/assets/vijn-small.gif" width="300" /> -->
    <nav class="header-nav">
      <router-link to="/">
        <div v-if="this.$route.name != 'home'">
          <img src="@/assets/vijn_logo_small.gif" width="300" />
        </div>
      </router-link>
      <div class="nav-right" v-if="!isAuthenticated">
        <router-link to="/login" class="nav-right-item"
          ><Button label="Войти"
        /></router-link>
        <router-link to="/sign-in" class="nav-right-item"
          ><Button label="Регистрация"
        /></router-link>
        <router-link to="/about" class="nav-right-item"
          ><Button label="О проекте"
        /></router-link>
      </div>
      <div class="user-info" v-if="isAuthenticated">
        <div class="fullname">
          {{ userFirstName }} /
          {{ userLastName }}
        </div>
        <div class="user-role">
          {{ userRole }}
        </div>
      </div>
    </nav>
  </div>
  <nav class="router-view-container">
    <div class="left-menu" v-if="!isAdmin">
      <router-link to="/pass" class="nav-right-item"
        ><Button label="Пропуска"
      /></router-link>
      <router-link to="/declarations" class="nav-right-item"
        ><Button label="Заявки"
      /></router-link>
      <router-link to="/profile" class="nav-right-item"
        ><Button label="Профиль"
      /></router-link>
      <Button
        style="margin-top: 144px"
        label="Выйти"
        icon="next"
        :action="logout"
      />
    </div>
    <div class="left-menu" v-if="isAdmin">
      <router-link to="/passages" class="nav-right-item"
        ><Button label="Проходы"
      /></router-link>
      <router-link to="/declarations" class="nav-right-item"
        ><Button label="Заявки"
      /></router-link>
      <router-link to="/profiles" class="nav-right-item"
        ><Button label="Сотрудники"
      /></router-link>
      <Button
        style="margin-top: 144px"
        label="Выйти"
        icon="next"
        :action="logout"
      />
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </nav>
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
  computed: {
    isAuthenticated() {
      // to be fixed further
      return true;
    },
    isAdmin() {
      // to be fixed further
      return true;
    },
    userFirstName() {
      return "Леонид";
    },
    userLastName() {
      return "Перлин";
    },
    userRole() {
      return "Сотрудник";
    },
  },
  methods: {
    logout() {
      alert("logout");
    },
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

.user-info {
  display: flex;
  flex-direction: column;
}

.fullname {
  font-size: 36px;
  font-weight: bold;
}

.user-role {
  text-align: start;
  color: #a0a0a0;
}

.router-view-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 24px;
  margin-left: 64px;
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
