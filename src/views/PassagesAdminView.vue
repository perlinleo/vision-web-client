<template>
  <div>
    <div class="table">
      <div class="table---top">
        <IconHeading title="Проходы" icon="passages" />
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
        <div class="table---heading---item">Тип прохода</div>
        <div class="table---heading---item">Дата прохода</div>
        <div class="table---heading---item">Составитель</div>
        <div class="table---heading---item">Проходящий</div>
      </div>
      <PassagesTableCell
        :type="1"
        actor="Перлин Л.В."
        date="01.02.2022"
        time="18:12"
      />
      <PassagesTableCell
        :type="0"
        actor="Перлин Л.В."
        date="01.02.2022"
        time="18:11"
      />
      <PassagesTableCell
        :type="1"
        actor="Перлин Л.В."
        date="01.02.2022"
        time="18:09"
      />
      <PassagesTableCell
        :type="0"
        actor="Перлин Л.В."
        date="01.02.2022"
        time="18:08"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PassagesTableCell from "@/components/PassagesTableCell.vue";
import IconHeading from "@/components/IconHeading.vue";
import InputField from "@/components/InputField.vue";

@Options({
  components: {
    PassagesTableCell,
    IconHeading,
    InputField,
  },
  data() {
    return {
      search: "",
    };
  },
})
export default class PassagesAdminView extends Vue {
  search!: string;
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
