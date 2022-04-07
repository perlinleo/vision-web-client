<template>
  <div class="about">
    <InputField name="ФИО" icon="person" placeholder="Полное имя" />
    <InputField name="Почта" icon="envelope" placeholder="Почта" />
    <InputField name="Пароль" icon="lock" placeholder="Пароль" hide="true" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/InputField.vue";

@Options({
  components: {
    InputField,
  },
})
export default class SignInView extends Vue {}
</script>
