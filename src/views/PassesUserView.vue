<template>
  <div class="passes">
    <div class="passes---viewer">
      <div
        class="passes---viewer---pass"
        v-for="pass in passes"
        :key="pass.companyName"
      >
        <div
          v-if="PassSelected != pass.id"
          class="passes---viewer---pass-background"
          @click="SelectPass(pass.id)"
        >
          <Pass :card="pass" />
        </div>
        <div
          v-else
          class="passes---viewer---pass---selected"
          @click="DeselectPass(pass.id)"
        >
          <Pass :card="pass" />
          <Button
            style="margin-top: 64px"
            label="Продлить"
            icon="asktime"
            :action="apply"
          />
          <Button
            style="margin-top: 64px"
            label="Проходы"
            icon="passages"
            :action="apply"
          />
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

@Options({
  components: {
    Pass,
    Button,
  },
  data() {
    return {
      PassSelected: Number,
    };
  },
  computed: {
    ...mapGetters({
      passes: "getUserPassData",
    }),
  },
  methods: {
    SelectPass(id: number) {
      this.PassSelected = id;
    },
    DeselectPass(id: number) {
      this.PassSelected = -1;
    },
  },
})
export default class PassView extends Vue {
  passes!: Array<Card>;
}
</script>

<style lang="css" scoped>
.passes {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: 32px;
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
  background-color: #e4e4e4;
  background-image: linear-gradient(
    90deg,
    #030303 0%,
    #24262a 50%,
    #f3f3e5 100%
  );
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background-image: linear-gradient(
    90deg,
    #030303 0%,
    #24262a 50%,
    #f3f3e5 100%
  );
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  border-radius: 100px;
}
.passes---viewer---pass {
  margin-left: 32px;
  margin-bottom: 32px;
}
</style>
