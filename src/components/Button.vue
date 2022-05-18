<template>
  <div style="transition: 0.5s" v-on:click="action">
    <div class="button">
      <div class="button-inside">
        <div class="button-label">{{ label }}</div>
        <img
          class="button-icon"
          v-if="icon"
          :src="require(`../assets/icons/${icon}.svg`)"
          height="24"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    icon: String,
    label: String,
    current: Boolean,
    action: Function,
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
export default class Button extends Vue {
  msg!: string;
  icon!: string;
}
</script>

<style scoped>
.button-inside {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-icon {
  position: static;
}
.button-label {
  position: static;
  max-width: 90px;
  -webkit-appearance: none;
  /* font-family: "Inter"; */
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
.button {
  height: 48px;
  width: 160px;
  background: linear-gradient(
    90deg,
    #030303 0%,
    #24262a 25%,
    #f3f3e5 50.01%,
    #1e55e3 75.52%,
    #ff00f5 100%
  );
  background-size: 400% 400%;
  font-size: 24px;
  border-radius: 16px;
  backdrop-filter: blur(20px);
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;
  animation: buttonUnFocus 0.5s ease;
  box-shadow: 0px 0px 24px 4px rgba(195, 0, 255, 0);
}

.button:hover {
  animation: buttonFocus 0.5s ease;
  background-position: 100% 100%;
  /* background: linear-gradient(
    93.3deg,
    #bfffc9 0%,
    #f3f3e5 0.01%,
    #1e55e3 50.52%,
    #ff00f5 100%
  ); */
  box-shadow: 0px 0px 24px 4px rgba(195, 0, 255, 0.5);
}

@media only screen and (max-width: 600px) {
  .button-label {
    position: static;
    max-width: 90px;
    -webkit-appearance: none;
    /* font-family: "Inter"; */
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
}
@keyframes buttonFocus {
  0% {
    background-position: 0% 0%;
    box-shadow: 0px 0px 24px 4px rgba(195, 0, 255, 0);
  }

  100% {
    background-position: 100% 100%;
    box-shadow: 0px 0px 24px 4px rgba(195, 0, 255, 0.5);
  }
}
@keyframes buttonUnFocus {
  0% {
    background-position: 100% 100%;
    box-shadow: 0px 0px 24px 4px rgba(195, 0, 255, 0.5);
  }
  100% {
    background-position: 0% 0%;
    box-shadow: 0px 0px 24px 4px rgba(195, 0, 255, 0);
  }
}
</style>
