<template>
  <div class="signin-view">
    <div class="form">
      <h1>Регистрация<img src="@/assets/icons/person_fill.svg" /></h1>
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
    <div class="form">
      <PassStack />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/InputField.vue";
import Button from "@/components/Button.vue";
import PassStack from "@/components/PassStack.vue";
import { signUpRequest } from "@/network/signup-querry";
import { createSignUpUser, SignUpUser } from "@/models/user";

@Options({
  components: {
    InputField,
    Button,
    PassStack,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
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
      signUpRequest(userData);
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
</style>
