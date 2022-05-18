<template>
  <div>
    <div class="table">
      <div class="table---top">
        <IconHeading title="Сотрудники" icon="employees" />
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
        <div class="table---heading---item table---heading---item---x2">
          Роль
        </div>
        <div class="table---heading---item">ФИО</div>
        <div class="table---heading---item">Дата регистрации</div>
      </div>
      <div class="table---content">
        <div v-for="user in data" :key="user">
          <ProfilesTableCell
            :type="user.RoleID - 1"
            :name="user.name"
            :date="user.created.slice(0, 10)"
          />
        </div>
      </div>

      <!-- <ProfilesTableCell :type="1" name="Перлин Л.В." date="01.02.2022" /> -->
      <!-- <ProfilesTableCell :type="2" name="Перлин Л.В." date="01.02.2022" /> -->
      <!-- <ProfilesTableCell :type="3" name="Перлин Л.В." date="01.02.2022" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProfilesTableCell from "@/components/ProfilesTableCell.vue";
import IconHeading from "@/components/IconHeading.vue";
import { usersRequest } from "@/network/signup-querry";
import InputField from "@/components/InputField.vue";

@Options({
  components: {
    ProfilesTableCell,
    IconHeading,
    InputField,
  },
  data() {
    return {
      search: "",
      data: [],
    };
  },
  watch: {
    search() {
      usersRequest(this.search).then((result) => {
        this.data = result;
      });
    },
  },

  mounted() {
    usersRequest(this.search).then((result) => {
      this.data = result;
    });
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

.table---content {
  height: 250px;
  overflow-y: scroll;
}
.table---top {
  display: flex;
  margin-left: 32px;
  margin-right: 32px;
  justify-content: space-between;
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

.table---heading---item---x2 {
  width: 400px;
}

.table---searchbox {
  left: 0;
  margin-top: 0 !important;
}
</style>
