<template>
  <div>
    <div :class="inputFieldClass">
      <img :src="require(`../assets/icons/${icon}.svg`)" class="input-icon" />
      <input
        :value="value"
        :type="type"
        :placeholder="placeholder"
        @input="onInput"
      />
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
    small: Boolean,
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
    inputFieldClass() {
      console.log(this.small);
      if (this.small) {
        return "input-field input-field-small";
      } else {
        return "input-field";
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
  model: {
    prop: "modelValue",
    event: "change",
  },
  methods: {
    validate() {
      return true;
    },
    onInput(event: { target: { value: any } }) {
      this.$emit("input", event.target.value);
    },
  },
})
export default class InputField extends Vue {
  msg!: string;
}
</script>

<style>
.input-icon {
  margin: 12px;
}
.input-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 12px 16px 12px 16px; */

  background: #1c1c1c;
  width: 320px;
  height: 48px;
  backdrop-filter: blur(20px);
  margin-top: 64px;
  border-radius: 16px;
}

.input-field-small {
  width: 160px;
}

input {
  position: static;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  color: white;
  font-family: "proxima-nova";
  width: 100%;
}
input:focus {
  outline: none;
}
</style>
