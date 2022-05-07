<template>
  <div v-for="card in cards" :key="card.companyName">
    <!-- {{ card.companyName }} -->
    <Pass :card="card" :ref="card.id" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Cards, createTestCard, Card } from "../models/card";
import Pass from "@/components/Pass.vue";

@Options({
  components: {
    Pass,
  },
  props: {
    cards: String,
  },
  data() {
    return {
      cards: [createTestCard(1), createTestCard(2), createTestCard(3)],
    };
  },
})
export default class InputField extends Vue {
  msg!: string;
}
</script>

<style lang="scss" scoped></style>
