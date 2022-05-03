<template>
  <div>
    <div class="table">
      <div class="table---top">
        <IconHeading title="Заявки" icon="declarations" />
        <InputField
          class="table---searchbox"
          name="Поиск"
          icon="search"
          placeholder="Поиск"
          :value="search"
          @input="
            (e) => {
              if (e.target) {
                search = e.target.value;
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
      <DeclarationsTableCell
        :type="1"
        creator="Перлин Л.В."
        date="01.02.2022"
      />
      <DeclarationsTableCell
        :type="1"
        creator="Перлин Л.В."
        date="01.02.2022"
      />
      <DeclarationsTableCell
        :type="1"
        creator="Перлин Л.В."
        date="01.02.2022"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DeclarationsTableCell from "@/components/DeclarationsTableCell.vue";
import IconHeading from "@/components/IconHeading.vue";
import InputField from "@/components/InputField.vue";

@Options({
  components: {
    DeclarationsTableCell,
    IconHeading,
    InputField,
  },
  data() {
    return {
      search: "",
    };
  },
})
export default class HomeView extends Vue {}
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
