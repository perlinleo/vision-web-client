<template>
  <div class="about">
    <h1>This is a test page</h1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <InputField name="Почта" icon="envelope" />
    <InputField name="Почта" icon="lock" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import InputField from "@/components/InputField.vue";

@Options({
  components: {
    HelloWorld,
    InputField,
  },
})
export default class SignInView extends Vue {}
</script>
