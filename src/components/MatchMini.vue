<template>
  <div>
    
    <div v-for="(play,index) in this.match.jogoObj.plays" :key="index"> 
        <h4>{{play}}</h4>
    </div>
    <b-button @click="startGame">começa porra</b-button>
  </div>
</template>

<script>
import GameObj from "@/engine/GameObj.js";
import Clubs from "@/mocks/Club.js";
import Formations from "@/engine/Formations.js";

export default {
  name: "MatchMini",
  components: {},
  props: ["game"],
  methods: {},
  data() {
    return {
      match: {
          homeTeam : {
            teamId : ''
          },
          awayTeam : {
            teamId : ''
          },
          jogoObj : {
              plays: []
          }
      }
    };
  },
  mounted() {
    this.getTeams(); 
  },
  methods: {
    mountMatch: function() {
       this.match = GameObj.GameObj.mountMatch(this.match);
       this.getMatch();
    },
    getTeams: function() {
      this.getFullHomeTeam();
      this.getFullAwayTeam();
      this.mountMatch();
    },
    getMatch: function() {
    //   this.match.jogoObj = { ...this.$GameEngine };
      this.match.jogoObj = Object.assign({}, this.$GameEngine);
    //   this.match.jogoObj = $.extend(true, [], this.$GameEngine);
      this.match.jogoObj = this.match.jogoObj.setJogo(
        this.match.homeTeam,
        this.match.awayTeam
      );
    },
    startGame: function() {
      var interval = setInterval(foo, 2000);
      var self = this;
      this.started = true;
      function foo() {
        if (self.match.jogoObj.jogo.encerrado) {
          clearInterval(interval);
        }
        self.match.jogoObj.controlaJogo();
        // console.log(self.match.jogoObj.plays);
        
      }
    },
    getFullHomeTeam: function() {
      let teamName = this.game.homeTeam.teamId;
      let fullTeam = Clubs[teamName]();
      this.match.homeTeam = fullTeam;
      
      this.insertPositionsInPlayers(this.match.homeTeam);
    },
    getFullAwayTeam: function() {
      let teamName = this.game.awayTeam.teamId;
      let fullTeam = Clubs[teamName]();
      this.match.awayTeam = fullTeam;
      
      this.insertPositionsInPlayers(this.match.awayTeam);
    },
    insertPositionsInPlayers: function(fullTeam) {
      let formationName = fullTeam.selectedFormation;
      let formation = Formations.getFormationByName(formationName);
      
      console.log(formation);

      fullTeam.starting11.map((player, index) => {
        player.role = formation.defaultPositions[index];
      });
    }
  },
  computed: {},
  watch: {
    // match.jogoObj.plays: function(){

    // }
  }
};
</script>
<style lang="scss" scoped>
</style>