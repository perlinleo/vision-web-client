<template>
  <div v-for="card in cards" :key="card.companyName">
    <!-- {{ card.companyName }} -->
    <Pass :card="card" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Cards, createTestCard } from "../models/card";
import Pass from "@/components/Pass.vue";

@Options({
  components: {
    Pass,
  },
  data() {
    return {
      cards: [createTestCard(), createTestCard(), createTestCard()],
    };
  },
})
export default class InputField extends Vue {
  msg!: string;
}
</script>

<style lang="scss" scoped></style>
