<template>
  <div class="form---content">
    <Pass :card="card" :unknownQr="true" />
    <div>
      <InputField
        name="Пароль"
        icon="askpass"
        placeholder="Название пропуска"
        :value="passName"
        @input="
          (e) => {
            if (e.target) {
              passName = e.target.value;
            }
          }
        "
      />
      <InputField
        name="Пароль"
        icon="asktime"
        placeholder="Количество месяцев"
        :value="activeDateMonth"
        @input="
          (e) => {
            if (e.target) {
              activeDateMonth = e.target.value;
            }
          }
        "
      />
    </div>
  </div>
  <Button class="apply---button" label="Заявить" :action="apply" />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";
import Pass from "@/components/Pass.vue";
import InputField from "@/components/InputField.vue";
import { mapGetters } from "vuex";
import { AskPassForm } from "@/models/declaration";
import { passRequest } from "@/network/declaration";
import { getUserStartPage } from "@/roles/roles";
import router from "@/router";

@Options({
  components: {
    Button,
    Pass,
    InputField,
  },
  methods: {
    apply() {
      const end = new Date();
      end.setMonth(end.getMonth() + Number(this.activeDateMonth));
      let formData: AskPassForm = {
        roleID: this.roleID,
        comment: "",
        expirationDate: end,
        name: this.passName,
      };
      passRequest(formData).then((result) => {
        console.log(result);
        if (result.status == 200) {
          router.replace(getUserStartPage(this.userRole));
        }
      });
    },
  },
  data() {
    return {
      activeDateMonth: "",
      passName: "",
    };
  },
  computed: {
    card() {
      const today = new Date().toISOString().slice(0, 10);
      const end = new Date();
      end.setMonth(end.getMonth() + Number(this.activeDateMonth));
      return {
        companyName: this.passName,
        ownerFirstName: this.userFirstName,
        ownerLastName: this.userLastName,
        dueDate: end.toISOString().slice(0, 10),
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
  display: flex;
  margin-top: 24px;
  justify-content: space-around;
}
.apply---button {
  display: flex;
  width: 95%;
  justify-content: flex-end;
}
</style>
