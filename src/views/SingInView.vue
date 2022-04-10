<template>
  <div class="form">
    <h1>Первый раз?</h1>
    <InputField name="ФИО" icon="person" placeholder="Полное имя" />
    <InputField name="Почта" icon="envelope" placeholder="Почта" />
    <InputField name="Пароль" icon="lock" placeholder="Пароль" hide="true" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/InputField.vue";
import Pass from "@/components/Pass.vue";

@Options({
  components: {
    InputField,
    Pass,
  },
})
export default class SignInView extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  padding-top: 40px;
  text-align: start;
  margin-left: 40px;
}
.form {
  width: 400px;
  height: 600px;
  background: #000000;
  opacity: 0.6;
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 16px;
}
</style>
