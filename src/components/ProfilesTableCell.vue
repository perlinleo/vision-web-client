<template>
  <div class="declarations-cell">
    <div class="declarations-cell---item declarations-cell---item---x2">
      {{ typeString }}
      <img :src="require(`../assets/icons/${typeImg}.svg`)" height="24" />
    </div>
    <div class="declarations-cell---item">
      {{ name }}
    </div>
    <div class="declarations-cell---item">
      {{ date }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RoleNamesArray, RoleIconArray } from "@/roles/roles";

@Options({
  props: {
    type: Number,
    date: String,
    name: String,
  },
  computed: {
    typeString() {
      return RoleNamesArray[this.type];
    },
    typeImg() {
      return RoleIconArray[this.type];
    },
  },
  emits: ["accept", "deny", "inspect"],
})
export default class ProfilesTableCell extends Vue {
  type!: number;
  date!: string;
  name!: string;
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

.declarations-cell---item---x2 {
  width: 400px;
}
img {
  padding-right: 24px;
  cursor: pointer;
}
</style>
