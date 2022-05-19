<template>
  <div class="form---content" v-if="passes">
    <Pass
      v-if="passes[selectedPassID]"
      :card="{
        companyName: passes[selectedPassID].pass_name,
        ownerFirstName: userFirstName,
        ownerLastName: userLastName,
        dueDate: passes[selectedPassID].dueDate.slice(0, 10),
        issueDate: newDate.slice(0, 10),
      }"
      :unknownQr="!passes[selectedPassID].is_active"
      :secureData="passes[selectedPassID].secure_data"
      :percentage="0"
    />
    <div class="select---caption">
      Выберите название пропуска

      <select v-model="selectedPassID">
        <option
          v-for="(pass, index) in passes"
          :key="pass.pass_name"
          :value="index"
        >
          →
          {{ pass.pass_name }}
        </option>
      </select>
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
  <div v-if="!passes" class="form---content select---caption">
    У вас пока нет пропусков
  </div>
  <Button
    class="apply---button"
    label="Заявить"
    :action="apply"
    v-if="passes"
  />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";
import { passesRequest } from "@/network/passes";
import Pass from "@/components/Pass.vue";
import InputField from "@/components/InputField.vue";
import { mapGetters } from "vuex";
import { timeRequest } from "@/network/declaration";
import { getUserStartPage } from "@/roles/roles";
import router from "@/router";
import { AskTimeForm } from "@/models/declaration";

@Options({
  components: {
    Button,
    Pass,
    InputField,
  },
  methods: {
    apply() {
      const val = this.passes[this.selectedPassID].dueDate;
      let date = new Date(val);
      date.setMonth(date.getMonth() + Number(this.activeDateMonth));
      let formData: AskTimeForm = {
        comment: "",
        time: date,
        passID: this.passes[this.selectedPassID].id,
      };
      timeRequest(formData).then((result) => {
        console.log(result);
        if (result.status == 200) {
          router.replace(getUserStartPage(this.userRole));
        }
      });
    },
  },
  data() {
    return {
      selectedPassID: 0,
      passes: [],
      activeDateMonth: 0,
    };
  },
  computed: {
    ...mapGetters({
      userFirstName: "getUserFirstName",
      userLastName: "getUserLastName",
      userRole: "getUserRoleName",
      userRoleID: "getUserRoleID",
    }),
    newDate() {
      const val = this.passes[this.selectedPassID].dueDate;
      console.log(val);
      let date = new Date(val);
      console.log(date);
      date.setMonth(date.getMonth() + Number(this.activeDateMonth));
      return date.toISOString();
    },
  },
  mounted() {
    passesRequest().then((result) => {
      console.log(result);
      this.passes = result;
    });
  },
})
export default class AskTime extends Vue {}
</script>

<style scoped>
.form---content {
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
}
.apply---button {
  display: flex;
  width: 95%;
  justify-content: flex-end;
}

.select---caption {
  font-size: 24px;
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
