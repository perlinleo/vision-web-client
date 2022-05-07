<template>
  <div class="form---content">time</div>
  <Button class="apply---button" label="Заявить" :action="apply" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";

@Options({
  components: {
    Button,
  },
  methods: {
    apply() {
      alert("apply");
    },
  },
})
export default class AskTime extends Vue {}
</script>

<style scoped>
.form---content {
  height: 90%;
  width: 100%;
}
.apply---button {
  display: flex;
  width: 95%;
  justify-content: flex-end;
}
</style>
