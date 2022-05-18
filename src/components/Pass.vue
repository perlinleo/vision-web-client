<template>
  <div class="card-body" ref="card">
    <div
      class="card-header"
      :style="{ 'background-position': `${percentage}% ${percentage}%` }"
    >
      <div class="card-header-icon"></div>
      <div class="card-header-label">
        {{ card.companyName }}
      </div>
    </div>
    <div class="owner">
      <div class="owner-label">имя владельца</div>
      <div class="owner-name">
        {{ card.ownerFirstName }} / {{ card.ownerLastName }}
      </div>
    </div>
    <div style="background-color: white">
      <qrcode-vue
        v-if="!unknownQr"
        :value="`https://vision.leonidperl.in/check?data=${secureData}`"
        size="280"
        level="L"
      />
      <img
        v-else
        :src="require(`@/assets/icons/unknown-qr.svg`)"
        height="320"
      />
    </div>
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
      secureData: this.secureData,
      percentage: this.percentage,
    };
  },
  props: {
    card: Object as () => { value: Card },
    unknownQr: Boolean,
    secureData: String,
    percentage: String,
  },
  components: {
    QrcodeVue,
  },
  mounted() {
    this.$refs.card.style.transform = "translateY(100px);";
    console.log(this.$refs.card.style.transform);
  },
  watch: {
    percentage() {
      console.log(this.percantage);
    },
  },
})
export default class InputField extends Vue {
  card!: Card;
  unknownQr!: boolean;
  secretValue!: string;
  percentage!: number;
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
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  height: 64px;
  display: flex;
  background-color: red;
  background: linear-gradient(
    90deg,
    #fffb00 0%,
    #08fa00 25%,
    #00ff11 50.01%,
    #fffb00 75%,
    #08fa00 100%
  );
  background-size: 400% 400%;
  border-radius: 16px 16px 0 0;
  align-items: center;
  justify-content: center;
}

.card-header-label {
  font-size: 18px;
}
</style>
