<template>
  <div>
    {{ name }}
    <img :src="require(`../assets/icons/${icon}.svg`)" />
    <input v-model="modelValue" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    value: String,
    isValid: Boolean,
    errorMessage: String,
    regex: String,
    icon: String,
    name: String,
  },
  computed: {
    getValueLength() {
      return this.modelValue !== "" && this.modelValue;
    },
  },
  data() {
    return {
      modelValue: this.value,
      isValid: this.isValid,
      showError: false,
      showPassword: false,
    };
  },
})
export default class InputField extends Vue {
  msg!: string;
}
</script>

<style></style>
