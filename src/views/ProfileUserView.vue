<template>
  <div style="width: 100%">
    <div class="profile---view">
      <div>
        <UserInfo :large="true" />
        <Button
          style="margin-top: 64px"
          label="Запросить роль выше"
          icon="askrole"
          :action="openRoleForm"
        />
      </div>
    </div>
    <AskForm v-if="roleFormOpen" :preferredType="2" />
    <Button
      v-if="roleFormOpen"
      class="close---role---form---button"
      label="Закрыть"
      :action="closeRoleForm"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserInfo from "@/components/UserInfo.vue";
import Button from "@/components/Button.vue";
import AskForm from "@/components/AskForm.vue";
import { mapGetters } from "vuex";

@Options({
  components: {
    UserInfo,
    Button,
    AskForm,
  },

  data() {
    return {
      roleFormOpen: false,
    };
  },
  methods: {
    openRoleForm() {
      this.roleFormOpen = true;
    },
    closeRoleForm() {
      this.roleFormOpen = false;
    },
  },
})
export default class PassagesAdminView extends Vue {}
</script>

<style scoped>
.profile---view {
  display: flex;
  width: 100%;
  margin-left: 32px;
  justify-content: center;
}

.close---role---form---button {
  position: fixed;
  top: 64px;
  right: 64px;
}
</style>
