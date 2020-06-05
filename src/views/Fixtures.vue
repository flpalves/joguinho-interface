<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Campeonato Intermunicipal</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <Standings :standings="this.championship.standings" />
        </div>
        <div class="col-md-4">
          <ResultsFixtures :fixtures="this.championship.fixtures" />
          <!-- <HomeGame /> -->
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <b-button to="next-round">Próximo jogo</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Standings from "@/components/Championship/Standings.vue";
import ResultsFixtures from "@/components/Championship/ResultsFixtures.vue";

export default {
  name: "Fixtures",
  components: {
    Standings,
    ResultsFixtures
  },
  methods: {
    getChampionship : function(){
      this.championship = this.$store.state.championship;
    }
  },
  data(){
    return {
      championship : {}
    }
  },
  mounted(){
    this.$store.commit("LOADCHAMP");
    this.getChampionship();
  }
};
</script>
 