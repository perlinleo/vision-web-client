<template>
  <div class="form---content">
    <Pass :card="card" :unknownQr="true" />
  </div>
  <Button class="apply---button" label="Заявить" :action="apply" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";
import Pass from "@/components/Pass.vue";
import { mapGetters } from "vuex";

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
    return {};
  },
  computed: {
    card() {
      const today = new Date().toISOString().slice(0, 10);
      return {
        companyName: "ВИЖН",
        ownerFirstName: this.userFirstName,
        ownerLastName: this.userLastName,
        dueDate: "2024-05-24",
        issueDate: today,
      };
    },
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      userFirstName: "getUserFirstName",
      userLastName: "getUserLastName",
      userRole: "getUserRoleName",
      menuItems: "getMenuItems",
    }),
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
