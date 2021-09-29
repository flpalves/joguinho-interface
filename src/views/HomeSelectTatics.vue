<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- <h1>Táticas de {{this.match.homeTeam.nome}}</h1> -->
        </div>
      </div>
      <div class="row">
        <SelectTaticsLaravel v-if="this.match.homeTeam" teamSide="home" :selectedteam="this.match.homeTeam" @savetatics="saveTatics" />
      </div>
    </div>
  </div>
</template> 
<script>
import SelectTaticsLaravel from "@/components/SelectTaticsLaravel";

export default {
  name: 'HomeSelectTatics', 
  components : {
    SelectTaticsLaravel
  },
  data() {
    return {
      match: {}
    };
  },
  methods: {
    getMatch: function() {
      this.match = this.$store.state.match;
      this.teamName = this.match.homeTeam.name;
      // console.log(this.match); 
    },
    saveTatics: function(team){
      // this.$store.commit('INSERTHOMETEAM', team);
      this.$store.commit('SAVEFORMATIONANDSTART11HOME', team);
    }
  },
  mounted() {
    this.$store.commit("LOADBYSTORAGE");
    this.getMatch();
    
  }
}
</script>