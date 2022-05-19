<template>
  <div class="table---buttons---container">
    <div class="table">
      <div class="table---top">
        <IconHeading title="Журнал" icon="declaration" />
      </div>
      <div class="table---heading">
        <div class="table---heading---item">Тип заявки</div>
        <div class="table---heading---item">Дата заявки</div>
        <div class="table---heading---item">Составитель</div>
        <div class="table---heading---item">Статус</div>
      </div>
      <div class="table---content">
        <div v-for="declaration in data" :key="declaration">
          <DeclarationTableCell
            :type="declaration.type"
            :creator="declaration.creator"
            :date="declaration.created.slice(0, 10)"
            :accepted="declaration.accepted"
            :denied="declaration.denied"
          />
        </div>
      </div>
    </div>
    <div>
      <Button
        style="margin-left: 24px"
        label="Создать заявку"
        icon="declaration"
        :action="openRoleForm"
      />
    </div>
    <AskForm v-if="roleFormOpen" :preferredType="0" />
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
import DeclarationTableCell from "@/components/DeclarationTableCell.vue";
import IconHeading from "@/components/IconHeading.vue";
import InputField from "@/components/InputField.vue";
import { declarationsRequest } from "@/network/declaration";
import Button from "@/components/Button.vue";
import AskForm from "@/components/AskForm.vue";

@Options({
  components: {
    DeclarationTableCell,
    IconHeading,
    InputField,
    Button,
    AskForm,
  },
  data() {
    return {
      search: "",
      data: [],
      roleFormOpen: false,
    };
  },
  mounted() {
    declarationsRequest().then((result) => {
      this.data = result;
      console.log(result);
    });
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
export default class HomeView extends Vue {
  search!: string;
  e!: Event;
}
</script>

<style scoped>
.table {
  width: 855px;
  height: 480px;
  background-color: #202020;
  border-radius: 16px;
}

.close---role---form---button {
  position: fixed;
  top: 64px;
  right: 64px;
}
.table---buttons---container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.table---top {
  display: flex;
  margin-left: 32px;
  margin-right: 32px;
  justify-content: space-between;
}

.table---heading {
  display: flex;
  font-size: 18px;
  color: #a0a0a0;
  margin-left: 32px;
  padding-top: 32px;
}
.table---content {
  height: 250px;
  overflow-y: scroll;
}

.table---heading---item {
  width: 200px;
  text-align: start;
}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: #202020;

  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background-color: #e4e4e4;

  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  border-radius: 100px;
}

.table---searchbox {
  left: 0;
  margin-top: 0 !important;
}
</style>
