<template>
  <div class="form---content">
    <div class="form---caption">Текущая роль</div>
    <div class="user---role">
      {{ userRole }}
      <img :src="require(`../assets/icons/${typeImg}.svg`)" :height="24" />
    </div>
    <div class="form---select---caption" v-if="userRoleID < 4">
      <div class="form---date">от {{ currentDate }} <br /></div>
      Я, {{ userFirstName }} {{ userLastName }}, хочу полчить роль
      <select v-model="roleID">
        <option :value="2" v-if="userRoleID < 2">→ уполномоченное лицо</option>
        <option :value="3" v-if="userRoleID < 3">
          → сотрудник службы безопасности
        </option>
        <option :value="4" v-if="userRoleID < 4">→ админинстратор</option>
      </select>
    </div>
    <div v-if="userRoleID > 3" class="form---caption">
      Вы уже имеете максимальную роль
    </div>
  </div>
  <Button
    class="apply---button"
    label="Заявить"
    :action="apply"
    v-if="userRoleID < 4"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";
import { mapGetters, Store } from "vuex";
import { getUserStartPage, RoleIconArray } from "@/roles/roles";
import { State } from "@/store";
import { roleRequest } from "@/network/declaration";
import { AskRoleForm } from "@/models/declaration";
import router from "@/router";

@Options({
  components: {
    Button,
  },
  data() {
    return {
      roleID: 3,
    };
  },
  mounted() {
    this.roleID = this.$store.getters.getUserRoleID + 2;
  },
  methods: {
    apply() {
      let formData: AskRoleForm = {
        roleID: this.roleID,
        comment: "",
      };
      roleRequest(formData).then((result) => {
        console.log(result);
        if (result.status == 200) {
          router.replace(getUserStartPage(this.userRole));
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      userFirstName: "getUserFirstName",
      userLastName: "getUserLastName",
      userRole: "getUserRoleName",
      userRoleID: "getUserRoleID",
    }),
    currentDate() {
      const today = new Date().toISOString().slice(0, 10);
      return today;
    },
    typeImg() {
      return RoleIconArray[this.userRoleID - 1];
    },
  },
})
export default class AskRole extends Vue {
  public $store!: Store<State>;
}
</script>

<style scoped>
.form---content {
  padding-top: 12px;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.apply---button {
  display: flex;
  width: 95%;
  justify-content: flex-end;
}

.user---role {
  font-size: 24px;
}

.form---date {
  width: 80%;
  margin-left: 36px;
  padding-bottom: 36px;
  text-align: start;
}

.form---caption {
  font-size: 24px;
  color: #a0a0a0;
}

.form---select---caption {
  font-size: 24px;
  color: #a0a0a0;
  margin-top: 80px;
  padding-bottom: 160px;
}

select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  color: rgb(255, 255, 255);
  background-image: none;
  background-color: #4b4b4b;
  padding: 12px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 24px;
}

option {
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  background-color: transparent;
  font-size: 24px;
  background: #202020;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  border-radius: 0.25em;
  overflow: hidden;
  font-family: "proxima-nova";
  font-weight: bold;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  background-color: #34495e;
  transition: 0.25s all ease;
  pointer-events: none;
}
/* Transition */
</style>
