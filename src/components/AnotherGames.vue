<template>
  <div>
    <!-- <b-button class="mb-2" variant="primary" @click="startMatches">Show toast</b-button> -->
    <MatchMini v-for="(match, index) in this.matches" :game="match" :key="index" />
    <b-button class="mb-2" variant="primary" @click="makeToast('secondary')">Show toast</b-button>
  </div>
</template> 

<script>
import GameObj from "@/engine/GameObj.js";
import GameEngine from "@/engine/Engine.js";
import MatchMini from "@/components/MatchMini";


export default {
  name: "AnotherGames",
  components: {MatchMini},
  methods: {},
  data() {
    return {
      matches: []
    };
  },
  mounted() {
    this.$store.commit("LOADCHAMPGAMES");
    this.matches = this.$store.state.champGames;
    // this.createMatchs();
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast("Gol de fulano, Flamengo 1x0 Grêmio", {
        title: `Tem gol!`,
        variant: variant,
        solid: false
      });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
</style>