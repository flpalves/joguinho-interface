<template>
  <div>
    <!-- <b-button @click="startGame">começa porra</b-button> -->
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
        homeTeam: {
          teamId: ""
        },
        awayTeam: {
          teamId: ""
        },
        jogoObj: {}
      },
      scores: {}
    };
  },
  mounted() {
    this.getTeams();
    this.scores = this.goals;
  },
  methods: {
    goalEvent: function() {
      console.log("goal porra!");
      return true;
    },
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
      this.match.jogoObj = { ...this.$GameEngine };
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
        self.$forceUpdate();
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
  computed: {
    goals: function() {
      return this.match.jogoObj.goals;
    }
  },
  watch: {
    scores: function() {
      this.goalEvent();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>