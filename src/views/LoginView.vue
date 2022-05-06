<template>
  <div class="login-view">
    <div class="form">
      <h1>Войти<img src="@/assets/icons/person_fill.svg" /></h1>

      <InputField
        name="Почта"
        icon="envelope"
        placeholder="Почта"
        :value="email"
        @input="
          (e) => {
            if (e.target) {
              email = e.target.value;
            }
          }
        "
      />
      <InputField
        name="Пароль"
        icon="lock"
        placeholder="Пароль"
        :hide="true"
        :value="password"
        @input="
          (e) => {
            if (e.target) {
              password = e.target.value;
            }
          }
        "
      />
      <Button
        style="margin-top: 64px"
        label="Далее"
        icon="next"
        :action="apply"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/InputField.vue";
import Button from "@/components/Button.vue";
import PassStack from "@/components/PassStack.vue";
import { loginRequest } from "@/network/signup-querry";
import { createLoginUser, LoginUser } from "@/models/user";
import router from "@/router";
import { roleNamesMap, Roles, getUserStartPage } from "@/roles/roles";

@Options({
  components: {
    InputField,
    Button,
    PassStack,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    validate() {
      this.InputField.validate();
    },
    apply() {
      const userData: LoginUser = createLoginUser(this.email, this.password);
      console.log(userData);
      loginRequest(userData);
      const userDataMock = {
        firstName: "Leonid",
        lastName: "Perlin",
        userRoleID: Roles.Employee,
      };
      this.$store.commit("loginUser", {
        userData: {
          firstName: "Leonid",
          lastName: "Perlin",
          userRoleID: Roles.ProEmployee,
        },
        isAuthenticated: true,
      });
      router.replace(getUserStartPage(userDataMock));
    },
  },
})
export default class LoginView extends Vue {}
</script>

<style lang="scss" scoped>
.form-two-inputs-box {
  display: flex;
}
.login-view {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.form {
  width: 400px;
  height: 600px;
  background: #000000;
  /* Note: backdrop-filter has minimal browser support */
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
}
</style>
