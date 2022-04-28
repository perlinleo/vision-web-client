<template>
  <div class="card-body" ref="card">
    <div class="card-header">
      <div class="card-header-icon"></div>
      <div class="card-header-label">{{ card.companyName }}</div>
    </div>
    <div class="owner">
      <div class="owner-label">имя владельца</div>
      <div class="owner-name">
        {{ card.ownerFirstName }} / {{ card.ownerLastName }}
      </div>
    </div>
    <qrcode-vue :value="secrelValue" size="320" level="H" />
    <div class="card-date">
      <div class="card-date-line">
        <div class="card-date-until-label">активен до</div>
        <div class="card-date-until-value">{{ card.dueDate }}</div>
      </div>
      <div class="card-date-line">
        <div class="card-date-until-label">выдан</div>
        <div class="card-date-until-value">{{ card.issueDate }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Card } from "../models/card";
import QrcodeVue from "qrcode.vue";

@Options({
  data() {
    return {
      secretValue: "ilyagu otsosi",
    };
  },
  props: {
    card: Object as () => { value: Card },
  },
  components: {
    QrcodeVue,
  },
  mounted() {
    this.$refs.card.style.transform = "translateY(100px);";
    console.log(this.$refs.card.style.transform);
  },
})
export default class InputField extends Vue {
  card!: Card;
}
</script>

<style lang="scss" scoped>
.card-date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  align-items: center;
}
.card-date-line {
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.card-date-until-label {
  color: #c4c4c4;
  font-size: 18px;
  font-weight: bold;
}
.card-date-until-value {
  color: #000000;
  font-size: 18px;
  font-weight: bold;
}
.owner-name {
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  text-align: start;
  margin-left: 12px;
}
.owner-label {
  color: #c4c4c4;
  text-align: start;
  margin-left: 12px;
}
.card-body {
  background-color: #ebebeb;
  width: 320px;
  height: 600px;
  position: absolute;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  height: 64px;
  display: flex;
  background-color: red;
  border-radius: 16px 16px 0 0;
  align-items: center;
  justify-content: center;
}

.card-header-label {
  font-size: 18px;
}
</style>
