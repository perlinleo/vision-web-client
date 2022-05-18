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
        <router-link to="/signup" class="nav-right-item"
          ><Button label="Регистрация"
        /></router-link>
        <router-link to="/about" class="nav-right-item"
          ><Button label="О проекте"
        /></router-link>
      </div>
      <UserInfo v-if="isAuthenticated && $route.name != 'profile'" />
    </nav>
  </div>
  <nav class="router-view-container">
    <div class="left-menu" v-if="isAuthenticated">
      <div v-for="item in menuItems" :key="item.path">
        <router-link :to="item.path" class="nav-right-item"
          ><Button :label="item.label" :icon="item.icon"
        /></router-link>
      </div>
      <Button
        class="logout---button"
        label="Выйти"
        icon="logout"
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
import UserInfo from "./components/UserInfo.vue";
import { mapGetters } from "vuex";
import { logoutRequest, userRequest } from "@/network/signup-querry";
import router from "@/router";
import { roleNamesMap, Roles, getUserStartPage } from "@/roles/roles";
import { User, UserAccountResponse } from "./models/user";

@Options({
  components: {
    Button,
    Pass,
    UserInfo,
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      userFirstName: "getUserFirstName",
      userLastName: "getUserLastName",
      userRole: "getUserRoleName",
      menuItems: "getMenuItems",
    }),
  },
  methods: {
    logout() {
      //fix cringe
      logoutRequest();
      this.$store.commit("logoutUser");
    },
  },
  mounted() {
    // console.log("hello");
    console.log(this.$route);

    // alert(window.URL);
    if (this.$route.path === "/check") {
      // alert("check");
      return;
    }
    let userData: User;
    userRequest().then((result) => {
      const response = result as unknown as UserAccountResponse;
      console.log(response);
      this.$store.commit("loginUser", {
        userData: {
          firstName: response.name.split(" ")[0],
          lastName: response.name.split(" ")[1],
          userRoleID: response.RoleID,
        },
        isAuthenticated: true,
      });

      // router.replace(getUserStartPage(response.RoleID));
      // userData = result.json;
    });
  },
})
export default class App extends Vue {
  isAuthenticated!: boolean;
}
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
@media only screen and (max-width: 600px) {
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
  }
}
.router-view-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 24px;
  margin-left: 64px;
}

.nav-right {
  display: flex;
  margin-top: 12px;
  margin-right: 24px;
}

#app {
  font-family: "proxima-nova";
  text-align: center;
}

.logout---button {
  margin-top: 144px;
}

@media only screen and (max-width: 600px) {
  .logout---button {
    margin-top: 18px;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .left-menu {
    overflow-x: scroll;
    display: flex;
    width: 100%;
  }
  .header-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .router-view-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0px;
    margin-left: 0px;
    padding: 0px;
  }
  .nav-right {
    overflow-x: scroll;
    margin-right: 0px;
  }
  .header-nav {
    margin: 0px;
    padding: 0px;
  }
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
