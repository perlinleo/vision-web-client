<template>
  <div class="card-body"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      companyName: this.companyName,
      ownerFirstName: this.firstName,
      ownerLastName: this.lastName,
      dueDate: this.dueDate,
      issueDate: this.issueDate,
    };
  },
})
export default class InputField extends Vue {
  msg!: string;
}
</script>

<style lang="scss" scoped>
.card-body {
  background-color: #4c4c4c;
  width: 320px;
  height: 600px;
  position: absolute;
  border-radius: 16px;
}
</style>
