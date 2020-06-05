<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h1>{{nextRound.roundNumber}}º Rodada</h1>
          <div v-for="(game, index) in nextRound.games" :key="index">
            <h3>{{game.homeTeam.name}} x {{game.awayTeam.name}}</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-button @click="this.mountRoundGames" variant="outline-primary">Ir para Jogo</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "NextRound",
  components: {
    
  },
  methods: {
    getChampionship : function(){
      this.championship = this.$store.state.championship;
      this.getNextRound();  
    },
    getMyTeam : function(){
      this.myTeam = this.$store.state.myTeam;
      this.getGameofMyTeam();
      this.getAnotherGames();
    },
    getNextRound : function(){
      this.nextRound = this.championship.fixtures.find( round => round.finished == false);
    },
    getGameofMyTeam : function(){
      this.gameOfMyTeam = this.nextRound.games.find( (game) => {
        if(game.homeTeam.name == this.myTeam.name || game.awayTeam.name == this.myTeam.name){
          return game;
        }
      });
    },
    getAnotherGames : function(){
      this.anotherGames = this.nextRound.games.filter( (game) => {
        if(game.homeTeam.name != this.myTeam.name && game.awayTeam.name != this.myTeam.name){
          return game;
        }
      });
    },
    mountRoundGames : function(){
      let match = {};
      match.homeTeam = this.gameOfMyTeam.homeTeam;
      match.awayTeam = this.gameOfMyTeam.awayTeam;
      this.$store.commit('INSERTTEAMS', match);

      this.mountAnotherGames();

      this.$router.push('/round-day');
    },
    mountAnotherGames : function(){
      let games = [];

      this.anotherGames.forEach((game) => {
        let match = {};
        match.homeTeam = game.homeTeam;
        match.awayTeam = game.awayTeam;
        games.push(match);
      });

      
      this.$store.commit('SAVECHAMPGAMES', games);
    }
  },
  data(){
    return {
      championship : {},
      nextRound:'',
      gameOfMyTeam:{},
      myTeam : {},
      anotherGames : []
    }
  },
  mounted(){
    this.$store.commit("LOADCHAMP");
    this.$store.commit("LOADMYTEAM");
    this.getChampionship();
    this.getMyTeam();
  }
};
</script>
 