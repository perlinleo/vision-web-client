<template>
  <div>
    <div class="input-field">
      <img :src="require(`../assets/icons/${icon}.svg`)" />
      <input v-model="modelValue" :type="type" :placeholder="placeholder" />
    </div>
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
    placeholder: String,
    hide: Boolean,
  },
  computed: {
    getValueLength() {
      return this.modelValue !== "" && this.modelValue;
    },
    type() {
      if (this.hide) {
        return "password";
      } else {
        return "text";
      }
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

<style>
.input-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 12px 16px 12px 16px; */
  margin-left: 40px;
  background: #1c1f25;
  width: 320px;
  height: 48px;
  backdrop-filter: blur(20px);
  margin-top: 64px;
  border-radius: 16px;
}

input {
  position: static;
  -webkit-appearance: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: white;
  font-family: "proxima-nova";
  width: 100%;
}
input:focus {
  outline: none;
  border: specify yours;
}
</style>
