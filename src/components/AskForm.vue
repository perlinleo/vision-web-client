<template>
  <div class="declaration---form---container">
    <div class="declaration---form">
      <div class="declaration---form---heading">
        <img :src="require(`../assets/icons/${typeImg}.svg`)" height="48" />
        Заявка на
        <select v-model="selected">
          <option :value="0">→ пропуск</option>
          <option :value="1">→ продление</option>
          <option :value="2">→ роль</option>
        </select>
      </div>
      <!-- different forms -->
      <div class="declaration---form-body">
        <AskPass v-if="selected === 0" />
        <AskTime v-else-if="selected === 1" />
        <AskRole v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { EventIconArray } from "@/models/events";
import Button from "@/components/Button.vue";
import AskPass from "@/components/AskPass.vue";
import AskRole from "@/components/AskRole.vue";
import AskTime from "@/components/AskTime.vue";
import { mapGetters } from "vuex";

@Options({
  components: {
    Button,
    AskPass,
    AskRole,
    AskTime,
  },
  props: {
    preferredType: Number,
  },
  data() {
    return {
      selected: this.preferredType,
    };
  },
  computed: {
    typeImg() {
      return EventIconArray[this.selected];
    },
  },
})
export default class AskForm extends Vue {
  preferredType!: number;
  seletected!: string;
  typeImg!: string;
  selected!: number;
}
</script>

<style scoped>
@font-face {
  font-family: "proxima-nova";
  src: url("@/assets/fonts/SFProDisplay-Medium.woff2") format("woff2");
}
.declaration---form---container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1.5rem);
}

.declaration---form {
  background-color: #202020;
  border-radius: 16px;
  width: 850px;
  height: 800px;
}
.declaration---form---heading {
  font-size: 36px;
  padding-top: 36px;
}

.declaration---form-body {
  width: 100%;
  height: 85%;
}

select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  color: rgb(255, 255, 255);
  background-image: none;
  background-color: #4b4b4b;
  padding: 12px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 24px;
}

option {
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  background-color: transparent;
  font-size: 24px;
  background: #202020;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  border-radius: 0.25em;
  overflow: hidden;
  font-family: "proxima-nova";
  font-weight: bold;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  background-color: #34495e;
  transition: 0.25s all ease;
  pointer-events: none;
}
/* Transition */
</style>
