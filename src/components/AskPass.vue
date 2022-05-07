<template>
  <div class="form---content">
    <Pass :card="card" />
  </div>
  <Button class="apply---button" label="Заявить" :action="apply" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";
import Pass from "@/components/Pass.vue";

@Options({
  components: {
    Button,
    Pass,
  },
  methods: {
    apply() {
      alert("apply");
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  computed: {
    card() {
      const today = new Date().toISOString().slice(0, 10);
      return {
        companyName: "ВИЖН",
        ownerFirstName: this.firstName,
        ownerLastName: this.lastName,
        dueDate: "2024-05-24",
        issueDate: today,
      };
    },
  },
})
export default class AskPass extends Vue {}
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
