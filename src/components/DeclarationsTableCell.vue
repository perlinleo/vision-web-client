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
      @click="inspect"
    />
    <img
      :src="require(`../assets/icons/accept.svg`)"
      height="24"
      @click="accept"
    />
    <img :src="require(`../assets/icons/deny.svg`)" height="24" @click="deny" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { EventNamesArray, EventIconArray } from "@/models/events";
import {
  acceptDeclarationsRequest,
  denyDeclarationsRequest,
} from "@/network/declaration";
import { DeclarationToReact } from "@/models/declaration";

@Options({
  props: {
    type: Number,
    date: String,
    creator: String,
    innerID: Number,
  },
  computed: {
    typeString() {
      return EventNamesArray[this.type];
    },
    typeImg() {
      return EventIconArray[this.type];
    },
  },
  data() {
    return {
      innerID: this.innerID,
      type: this.type,
    };
  },
  methods: {
    inspect() {
      console.log(this.type);
    },
    accept() {
      let formData: DeclarationToReact = {
        innerID: this.innerID,
        type: this.type,
      };
      acceptDeclarationsRequest(formData);
    },
    deny() {
      let formData: DeclarationToReact = {
        innerID: this.innerID,
        type: this.type,
      };
      denyDeclarationsRequest(formData);
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
