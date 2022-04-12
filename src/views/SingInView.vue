<template>
  <div class="signin-view">
    <div class="form">
      <h1>Регистрация<img src="@/assets/icons/person_fill.svg" /></h1>

      <InputField name="ФИО" icon="person" placeholder="Полное имя" />
      <InputField name="Почта" icon="envelope" placeholder="Почта" />
      <InputField name="Пароль" icon="lock" placeholder="Пароль" hide="true" />
      <Button style="margin-top: 64px" label="Далее" icon="next" />
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

@Options({
  components: {
    InputField,
    Button,
    PassStack,
  },
})
export default class SignInView extends Vue {}
</script>

<style lang="scss" scoped>
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
