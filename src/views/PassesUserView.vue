<template>
  <div class="passes">
    <div class="passes---viewer">
      <div
        class="passes---viewer---pass"
        v-for="pass in passes"
        :key="pass.companyName"
        :percentage="percentage"
      >
        <div
          v-if="PassSelected != pass.id"
          class="passes---viewer---pass-background"
          @click="SelectPass(pass.id)"
        >
          <Pass
            :card="{
              companyName: pass.pass_name,
              ownerFirstName: userFirstName,
              ownerLastName: userLastName,
              dueDate: pass.dueDate.slice(0, 10),
              issueDate: pass.issueDate.slice(0, 10),
            }"
            :unknownQr="!pass.is_active"
            :secureData="pass.secure_data"
            :percentage="percentage"
          />
        </div>
        <div v-else class="passes---viewer---pass---selected">
          <Pass
            :card="{
              companyName: pass.pass_name,
              ownerFirstName: userFirstName,
              ownerLastName: userLastName,
              dueDate: pass.dueDate.slice(0, 10),
              issueDate: pass.issueDate.slice(0, 10),
            }"
            :unknownQr="!pass.is_active"
            :secureData="pass.secure_data"
            :percentage="percentage"
          />
          <div class="passes---viewer---pass---selected---actions">
            <Button
              style="margin-top: 32px"
              label="Назад"
              @click="DeselectPass(pass.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Pass from "@/components/Pass.vue";
import { mapGetters } from "vuex";
import { Card } from "@/models/card";
import Button from "../components/Button.vue";
import { passesRequest } from "@/network/passes";

@Options({
  components: {
    Pass,
    Button,
  },
  data() {
    return {
      PassSelected: Number,
      passes: [],
      percentage: 0,
      lastTimeUpgraded: Number,
      componentKey: 0,
    };
  },
  computed: {
    ...mapGetters({
      userFirstName: "getUserFirstName",
      userLastName: "getUserLastName",
      userRole: "getUserRoleName",
      userRoleID: "getUserRoleID",
    }),
  },
  methods: {
    SelectPass(id: number) {
      this.PassSelected = id;
    },
    DeselectPass(id: number) {
      this.PassSelected = -1;
    },
    updateFloor() {
      var currentTime = Date.now();

      var floorStep = 10000;
      var floor = (currentTime % floorStep) / 1000;
      this.percentage = (floor / 10) * 100;
      if (this.percentage < 1 && Date.now() - this.lastTimeUpdated > 100) {
        passesRequest().then((result) => {
          this.passes = result;
          this.$forceUpdate();
        });

        console.log("update passes");
        this.lastTimeUpdated = Date.now();
        this.forceRerender();
      }
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
  mounted() {
    passesRequest().then((result) => {
      console.log(result);
      this.passes = result;
      this.lastTimeUpdated = Date.now();
    });
    setInterval(() => {
      this.updateFloor();
    }, 100);
  },
})
export default class PassView extends Vue {
  passes!: Array<Card>;
}
</script>

<style lang="css" scoped>
.passes---viewer---pass---selected---actions {
  display: flex;
  flex-direction: column;
  height: 600px;
  margin-left: 100px;
}
.passes {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: 32px;
}

.passes---viewer---pass {
  margin-left: 32px;
  margin-bottom: 32px;
}

@media only screen and (max-width: 600px) {
  .passes {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-left: 0px;
  }
  .passes---viewer---pass {
    margin-left: 0px;
    margin-bottom: 0px;
  }
}
.passes---viewer---pass-background {
  padding: 12px;
  border-radius: 16px;
  transition: 0.5s;
}
.passes---viewer---pass-background:hover {
  padding: 12px;
  background-color: #c4c4c4;
  border-radius: 16px;
  cursor: pointer;
}

.passes---viewer---pass---selected {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(1.5rem);
}

.passes---viewer {
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  border-radius: 16px;
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
</style>
