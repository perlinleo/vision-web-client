<template>
  <div class="signin-view">
    <div class="form">
      <h1>Регистрация<img src="@/assets/icons/person_fill.svg" /></h1>
      {{ error }}
      <div class="form-two-inputs-box">
        <InputField
          name="ФИО"
          :value="firstName"
          icon="person"
          placeholder="Имя"
          :small="true"
          @input="
            (e) => {
              if (e.target) {
                firstName = e.target.value;
              }
            }
          "
        />
        <InputField
          name="ФИО"
          icon="person"
          :value="lastName"
          placeholder="Фамилия"
          :small="true"
          @input="
            (e) => {
              if (e.target) {
                lastName = e.target.value;
              }
            }
          "
        />
      </div>
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
    <Pass :card="card" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/InputField.vue";
import Button from "@/components/Button.vue";
import PassStack from "@/components/PassStack.vue";
import {
  loginRequest,
  signUpRequest,
  userRequest,
} from "@/network/signup-querry";
import {
  createSignUpUser,
  SignUpUser,
  UserAccountResponse,
} from "@/models/user";
import Pass from "@/components/Pass.vue";
import { getUserStartPage } from "@/roles/roles";
import router from "@/router";

@Options({
  components: {
    InputField,
    Button,
    PassStack,
    Pass,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: "",
    };
  },
  computed: {
    card() {
      const today = new Date().toISOString().slice(0, 10);
      return {
        companyName: "ВИЖН",
        ownerFirstName: this.firstName,
        ownerLastName: this.lastName,
        dueDate: "2024-05-24",
        issueDate: today,
      };
    },
  },
  methods: {
    validate() {
      this.InputField.validate();
    },
    apply() {
      const userData: SignUpUser = createSignUpUser(
        this.firstName,
        this.lastName,
        this.email,
        this.password
      );
      console.log(userData);
      signUpRequest(userData).then((response) => {
        if (response.status == 403 || response.status == 500) {
          this.error = "Такой пользователь уже зарегистрирован";
        } else {
          loginRequest(userData)
            .then((response) => {
              console.log(response);
              if (response.status == 403 || response.status == 500) {
                console.log("forbiden");
                // this.error = "Такой пользователь уже зарегистрирован";
              } else {
                console.log("success");
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
                  router.replace(getUserStartPage(response.RoleID));
                  // userData = result.json;
                });
              }
            })
            .catch((error) => console.log("error"));
        }
      });
    },
  },
})
export default class SignInView extends Vue {}
</script>

<style lang="scss" scoped>
.form-two-inputs-box {
  display: flex;
}
.signin-view {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
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
@media only screen and (max-width: 600px) {
  .card-body {
    display: none;
  }
}
</style>
