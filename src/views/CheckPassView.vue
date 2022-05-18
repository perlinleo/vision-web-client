<template>
  <div class="check---pass">
    <div v-if="data.access">
      <div class="accept---header">Проход разрешен!</div>
      <img src="@/assets/accept.gif" width="300" />
      <div class="data---container">
        <div class="data---caption">ФИО</div>
        <div class="data---value">{{ data.owner_name }}</div>
      </div>
      <div class="data---container">
        <div class="data---caption">Роль</div>
        <div class="data---value">{{ data.user_role_id }}</div>
      </div>
      <div class="data---container">
        <div class="data---caption">Почта</div>
        <div class="data---value">{{ data.user_email }}</div>
      </div>
      <div class="data---container">
        <div class="data---caption">Зарегистрирован</div>
        <div class="data---value">{{ data.user_created.slice(0, 10) }}</div>
      </div>
      <div class="data---container">
        <div class="data---caption">Пропуск №</div>
        <div class="data---value">{{ data.pass_id }}</div>
      </div>
      <div class="data---container">
        <div class="data---caption">Активен до</div>
        <div class="data---value">{{ data.expiration_date.slice(0, 10) }}</div>
      </div>
      <div class="data---container">
        <div class="data---caption">Выдан</div>
        <div class="data---value">{{ data.issue_date.slice(0, 10) }}</div>
      </div>
    </div>
    <div v-if="!data.access">
      <div class="denied---header">Проход запрещен!</div>
      <img src="@/assets/denied.gif" width="300" />
      <div class="data---container">
        <div class="data---caption">Ошибка</div>
        <div class="data---value">{{ data.error }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { checkPassRequest } from "@/network/passes";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},

  data() {
    return {
      data: {},
    };
  },
  methods: {},
  mounted() {
    // alert("hello");
    checkPassRequest(this.$route.query.data).then((result) => {
      this.data = result;
    });
  },
})
export default class Check extends Vue {}
</script>

<style scoped>
.profile---view {
  display: flex;
  width: 100%;
  margin-left: 32px;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .profile---view {
    display: flex;
    width: 100%;
    margin-left: 0px;
    justify-content: center;
  }
}

.check---pass {
  display: flex;
  width: 100%;
  justify-content: center;
}
.close---role---form---button {
  position: fixed;
  top: 64px;
  right: 64px;
}

.data---container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}
.denied---header {
  margin-top: 36px;
  font-size: 36px;
  color: #eb3743;
}

.accept---header {
  margin-top: 36px;
  font-size: 36px;
  color: #1ee3b2;
}

.data---caption {
  font-size: 18px;
  color: #a0a0a0;
}

.data---value {
  font-size: 24px;
  color: #ffffff;
}
</style>
