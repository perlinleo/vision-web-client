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
        <div class="table---heading---item">Время прохода</div>
        <div class="table---heading---item">Проходящий</div>
      </div>
      <div class="table---content">
        <div v-for="passage in data" :key="passage.fullname">
          <PassagesTableCell
            v-if="searchRegex(passage.fullname)"
            :type="0"
            :actor="passage.fullname"
            :date="passage.time.slice(0, 10)"
            :time="passage.time.slice(11, 19)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PassagesTableCell from "@/components/PassagesTableCell.vue";
import IconHeading from "@/components/IconHeading.vue";
import InputField from "@/components/InputField.vue";
import { passagesRequest } from "@/network/declaration";

@Options({
  components: {
    PassagesTableCell,
    IconHeading,
    InputField,
  },
  data() {
    return {
      search: "",
      data: [],
    };
  },
  mounted() {
    passagesRequest().then((result) => {
      console.log(result);
      this.data = result;
    });
  },
  methods: {
    searchRegex(data: string) {
      const r = new RegExp(`.*${this.search}.*`);
      return r.test(data);
    },
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
.table---content {
  height: 250px;
  overflow-y: scroll;
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
