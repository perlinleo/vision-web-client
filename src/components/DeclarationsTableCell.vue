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
    <view-declaration
      :innerID="innerID"
      :type="type"
      :creator="creator"
      :date="date"
      v-if="showInspect"
    />
    <Button
      v-if="showInspect"
      class="close---role---form---button"
      label="Закрыть"
      :action="deinspect"
    />
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
import ViewDeclaration from "@/components/ViewDeclaration.vue";
import Button from "./Button.vue";

@Options({
  props: {
    type: Number,
    date: String,
    creator: String,
    innerID: Number,
  },
  components: {
    ViewDeclaration,
    Button,
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
      showInspect: false,
    };
  },
  methods: {
    inspect() {
      this.showInspect = true;
      console.log(this.inspect);
      this.$emit("inspect");
    },
    deinspect() {
      this.showInspect = false;
      console.log(this.inspect);
      this.$emit("inspect");
    },
    accept() {
      let formData: DeclarationToReact = {
        innerID: this.innerID,
        type: this.type,
      };
      acceptDeclarationsRequest(formData).then((result) => {
        console.log(result);
        this.$emit("accept");
      });
    },
    deny() {
      let formData: DeclarationToReact = {
        innerID: this.innerID,
        type: this.type,
      };

      denyDeclarationsRequest(formData).then((result) => {
        console.log(result);
        this.$emit("deny");
      });
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

.close---role---form---button {
  position: fixed;
  top: 64px;
  right: 64px;
}
</style>
