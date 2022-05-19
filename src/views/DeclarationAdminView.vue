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

      <div v-for="declaration in data" :key="declaration">
        <DeclarationsTableCell
          v-if="
            !(declaration.accepted || declaration.denied) &&
            searchRegex(declaration.creator)
          "
          :type="declaration.type"
          :creator="declaration.creator"
          :date="declaration.created.slice(0, 10)"
          :innerID="declaration.innerID"
          @accept="updateData"
          @deny="updateData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DeclarationsTableCell from "@/components/DeclarationsTableCell.vue";
import IconHeading from "@/components/IconHeading.vue";
import InputField from "@/components/InputField.vue";
import { declarationsRequest } from "@/network/declaration";

@Options({
  components: {
    DeclarationsTableCell,
    IconHeading,
    InputField,
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
    updateData() {
      declarationsRequest().then((result) => {
        this.data = result;
      });
    },
    searchRegex(data: string) {
      const r = new RegExp(`.*${this.search}.*`);
      return r.test(data);
    },
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
