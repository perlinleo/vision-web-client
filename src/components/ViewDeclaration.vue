<template>
  <div class="declaration---form---container">
    <div class="declaration---form">
      <div class="declaration---header">
        Заявка на {{ typeString }}
        <img :src="require(`../assets/icons/${typeImg}.svg`)" height="36" />
        от {{ creator }}
      </div>
      <div class="data---container">
        <div class="data---caption">дата</div>
        <div class="data---value">{{ date }}</div>
      </div>
      <div v-if="type == 2">
        <div class="data---container">
          <div class="data---caption">
            Текущая роль {{ data.currentRoleID }}
          </div>
          <div class="data---value">
            {{ roleNameFromID(data.currentRoleID) }}
            <img
              v-if="data.currentRoleID"
              :src="
                require(`../assets/icons/${roleImgFromID(
                  data.currentRoleID
                )}.svg`)
              "
              height="36"
            />
          </div>
        </div>
        <div class="data---container">
          <div class="data---caption">Желаемая роль {{ data.roleID }}</div>
          <div class="data---value">
            {{ roleNameFromID(data.roleID) }}
            <img
              v-if="data.roleID"
              :src="
                require(`../assets/icons/${roleImgFromID(data.roleID)}.svg`)
              "
              height="36"
            />
          </div>
        </div>
      </div>
      <div v-if="type == 0">
        <Pass
          v-if="data.pass"
          :card="{
            companyName: data.pass.pass_name,
            ownerFirstName: creatorFirstName,
            ownerLastName: creatorLastName,
            dueDate: data.pass.dueDate.slice(0, 10),
            issueDate: data.pass.issueDate.slice(0, 10),
          }"
          :unknownQr="!data.pass.is_active"
          :secureData="data.pass.secure_data"
          :percentage="0"
        />
      </div>
      <div
        v-if="type == 1 && data.declaration"
        style="display: flex; width: 80%; justify-content: space-around"
      >
        <Pass
          v-if="data.pass"
          :card="{
            companyName: data.pass.pass_name,
            ownerFirstName: creatorFirstName,
            ownerLastName: creatorLastName,
            dueDate: data.pass.dueDate.slice(0, 10),
            issueDate: data.pass.issueDate.slice(0, 10),
          }"
          :unknownQr="!data.pass.is_active"
          :secureData="data.pass.secure_data"
          :percentage="0"
        />
        <div class="data---caption" style="margin-top: 64px">продлить до</div>
        <div class="data---value" style="margin-top: 64px">
          {{ data.declaration.time.slice(0, 10) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/components/Button.vue";
import { EventIconArray, EventNamesArray } from "@/models/events";
import Pass from "@/components/Pass.vue";
import {
  passDeclarationRequest,
  roleDeclarationRequest,
  timeDeclarationRequest,
} from "@/network/declaration";
import { getUserRoleName, RoleIconArray, RoleNamesArray } from "@/roles/roles";

@Options({
  components: {
    Button,
    Pass,
  },
  props: {
    type: Number,
    innerID: Number,
    creator: String,
    date: String,
  },
  methods: {
    apply() {
      alert("apply");
    },
    roleNameFromID(id: number) {
      return getUserRoleName(id);
    },
    roleImgFromID(id: number) {
      return RoleIconArray[id - 1];
    },
  },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    typeString() {
      return EventNamesArray[this.type];
    },

    typeImg() {
      return EventIconArray[this.type];
    },
    creatorFirstName() {
      return this.creator.split(" ")[0];
    },
    creatorLastName() {
      return this.creator.split(" ")[1];
    },
  },

  mounted() {
    if (this.type == 2) {
      roleDeclarationRequest(this.innerID).then((result) => {
        this.data = result;
      });
    }
    if (this.type == 0) {
      passDeclarationRequest(this.innerID).then((result) => {
        this.data = result;
      });
    }
    if (this.type == 1) {
      timeDeclarationRequest(this.innerID).then((result) => {
        this.data = result;
      });
    }
  },
})
export default class ViewDeclaration extends Vue {}
</script>

<style scoped>
.form---content {
  height: 90%;
  width: 100%;
}
.apply---button {
  display: flex;
  width: 95%;
  justify-content: flex-end;
}
.declaration---form---container {
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

.declaration---form {
  background-color: #202020;
  border-radius: 16px;
  width: 850px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.declaration---header {
  font-size: 36px;
  margin-top: 24px;
}

.data---caption {
  font-size: 18px;
  color: #a0a0a0;
}

.data---value {
  font-size: 24px;
  color: #ffffff;
}

.data---container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  width: 600px;
}
</style>
