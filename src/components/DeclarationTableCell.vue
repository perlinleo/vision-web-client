<template>
  <div class="declarations-cell">
    <div class="declarations-cell---item">
      {{ typeString }}
      <img :src="require(`../assets/icons/${typeImg}.svg`)" height="24" />
    </div>
    <div class="declarations-cell---item">
      {{ date }}
    </div>
    <div class="declarations-cell---item">
      {{ creator }}
    </div>
    <img
      :src="require(`../assets/icons/inspect.svg`)"
      height="24"
      v-if="!accepted && !denied"
    />
    <img
      :src="require(`../assets/icons/accept.svg`)"
      height="24"
      v-if="accepted"
    />
    <img :src="require(`../assets/icons/deny.svg`)" height="24" v-if="denied" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { EventNamesArray, EventIconArray } from "@/models/events";

@Options({
  props: {
    type: Number,
    date: String,
    creator: String,
    accepted: Boolean,
    denied: Boolean,
  },
  data() {
    return {
      accepted: this.accepted,
      denied: this.denied,
    };
  },
  computed: {
    typeString() {
      return EventNamesArray[this.type];
    },
    typeImg() {
      return EventIconArray[this.type];
    },
  },
  emits: ["accept", "deny", "inspect"],
})
export default class DeclarationTableCell extends Vue {
  type!: number;
  date!: string;
  creator!: string;
  typeString!: string;
  typeImg!: string;
  accepted!: boolean;
  denied!: boolean;
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
