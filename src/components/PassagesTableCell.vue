<template>
  <div class="declarations-cell">
    <div class="declarations-cell---item">
      {{ typeString }}
      <img :src="require(`../assets/icons/${typeImg}.svg`)" height="18" />
    </div>
    <div class="declarations-cell---item">
      {{ date }}
    </div>
    <div class="declarations-cell---item">
      {{ time }}
    </div>
    <div class="declarations-cell---item">
      {{ actor }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PassageNamesArray, PassageIconArray } from "@/models/passage";

@Options({
  props: {
    type: Number,
    time: String,
    date: String,
    actor: String,
  },
  computed: {
    typeString() {
      return PassageNamesArray[this.type];
    },
    typeImg() {
      return PassageIconArray[this.type];
    },
  },
  emits: ["accept", "deny", "inspect"],
})
export default class PassagesTableCell extends Vue {
  type!: number;
  date!: string;
  time!: string;
  actor!: string;
  typeString!: string;
  typeImg!: string;
}
</script>

<style scoped>
.declarations-cell {
  display: flex;
  margin-left: 32px;
  padding-top: 24px;
}
.declarations-cell---item {
  width: 200px;
  text-align: start;
  font-size: 18px;
}
img {
  padding-right: 24px;
  cursor: pointer;
}
</style>
