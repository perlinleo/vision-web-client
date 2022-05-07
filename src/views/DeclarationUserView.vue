<template>
  <div>
    <div class="table">
      <div class="table---top">
        <IconHeading title="Заявки" icon="declaration" />
        <InputField
          class="table---searchbox"
          name="Поиск"
          icon="search"
          placeholder="Поиск"
          :value="search"
          @input="
            (e: Event) => {
              if (e.target) {
                search = (e.target as HTMLInputElement).value;
              }
            }
          "
        />
      </div>
      <div class="table---heading">
        <div class="table---heading---item">Тип заявки</div>
        <div class="table---heading---item">Дата заявки</div>
        <div class="table---heading---item">Составитель</div>
        <div class="table---heading---item">Действия</div>
      </div>
      <DeclarationTableCell :type="1" creator="Перлин Л.В." date="01.02.2022" />
      <DeclarationTableCell :type="2" creator="Перлин Л.В." date="01.02.2022" />
      <DeclarationTableCell :type="0" creator="Перлин Л.В." date="01.02.2022" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DeclarationTableCell from "@/components/DeclarationTableCell.vue";
import IconHeading from "@/components/IconHeading.vue";
import InputField from "@/components/InputField.vue";

@Options({
  components: {
    DeclarationTableCell,
    IconHeading,
    InputField,
  },
  data() {
    return {
      search: "",
    };
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

.table---heading---item {
  width: 200px;
  text-align: start;
}

.table---searchbox {
  left: 0;
  margin-top: 0 !important;
}
</style>
