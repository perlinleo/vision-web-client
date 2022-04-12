<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/vijn_logo_small_old.gif" />
    <Description msg="Система контроля и управления доступом" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Description from "@/components/Description.vue"; // @ is an alias to /src

@Options({
  components: {
    Description,
  },
})
export default class HomeView extends Vue {}
</script>
