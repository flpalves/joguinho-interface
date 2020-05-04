<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Táticas de {{this.teamName}}</h1>
        </div>
      </div>
      <div class="row">
        <SelectTatics teamSide="home" :selectedTeam="this.match.homeTeam" @saveTatics="saveTatics" />
      </div>
    </div>
  </div>
</template> 
<script>
import SelectTatics from "@/components/SelectTatics";

export default {
  name: 'HomeSelectTatics', 
  components : {
    SelectTatics
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
      this.teamName = this.match.homeTeam.name;
      // console.log(this.match); 
    },
    saveTatics: function(team){
      this.$store.commit('INSERTHOMETEAM', team);
    }
  },
  mounted() {
    this.$store.commit("LOADBYSTORAGE");
    this.getMatch();
  }
}
</script>