<template>
  <div class="user-info">
    <div :class="!large ? 'fullname' : 'fullname---large'">
      {{ userFirstName }} /
      {{ userLastName }}
    </div>
    <div :class="!large ? 'user-role' : 'user-role---large'">
      {{ userRole }}
      <img
        :src="require(`../assets/icons/${typeImg}.svg`)"
        :height="!large ? 18 : 24"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import { RoleNamesArray, RoleIconArray } from "@/roles/roles";

@Options({
  data() {
    return {};
  },
  props: {
    large: Boolean,
  },
  computed: {
    ...mapGetters({
      userFirstName: "getUserFirstName",
      userLastName: "getUserLastName",
      userRole: "getUserRoleName",
      userRoleID: "getUserRoleID",
    }),
    typeImg() {
      return RoleIconArray[this.userRoleID - 1];
    },
  },
})
export default class UserInfo extends Vue {
  userFirstName!: string;
  userRole!: string;
  userLastName!: string;
  large!: boolean;
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  flex-direction: column;
}

.fullname {
  font-size: 36px;
  font-weight: bold;
}
.fullname---large {
  font-size: 48px;
  font-weight: bold;
}

.user-role {
  text-align: start;
  color: #a0a0a0;
}

.user-role---large {
  text-align: start;
  font-size: 24px;
  color: #a0a0a0;
}
</style>
