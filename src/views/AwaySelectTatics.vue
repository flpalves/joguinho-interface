<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- <h1>Táticas de {{this.teamName}}</h1> -->
        </div>
      </div>
      <div class="row">
        <!-- <SelectTatics teamSide="away" :selectedTeam="this.match.awayTeam" @saveTatics="saveTatics" /> -->
        <SelectTaticsLaravel v-if="this.match.awayTeam" teamSide="away" :selectedteam="this.match.awayTeam" @savetatics="saveTatics" />
      </div>
    </div>
  </div>
</template> 
<script>
import SelectTaticsLaravel from "@/components/SelectTaticsLaravel";

export default {
  name: 'AwaySelectTatics', 
  components : {
    SelectTaticsLaravel
  },
  data() {
    return {
      match: {},
      teamName :''
    };
  },
  methods: {
    getMatch: function() {
      this.match = this.$store.state.match;
      this.teamName = this.match.awayTeam.name;
      // console.log(this.match); 
    },
    saveTatics: function(team){ 
      // this.$store.commit('INSERTAWAYTEAM', team);
      his.$store.commit('SAVEFORMATIONANDSTART11AWAY', team);
    }
  },
  mounted() {
    this.$store.commit("LOADBYSTORAGE");
    this.getMatch();
  }
}
</script>