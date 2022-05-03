<template>
  <div class="heading">
    <h1>{{ title }}</h1>
    <img :src="require(`../assets/icons/${icon}.svg`)" height="64" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    icon: String,
  },
})
export default class IconHeading extends Vue {
  title!: number;
  icon!: string;
}
</script>

<style scoped>
.heading {
  display: flex;
  align-items: center;
}
</style>
