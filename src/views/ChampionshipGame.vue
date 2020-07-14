<template>
  <div class="about">
    <div class="container">
      <AnotherGames ref="champGames"/>
      <Match @initMatch="initMatch" @endGame="endGame" ref="mainGame"/>
    </div>
  </div>
</template>

<script>
import Match from "@/components/Match.vue";
import AnotherGames from "@/components/AnotherGames.vue";

export default {
    name:'ChampionshipGame',
    components: {
      Match,
      AnotherGames
    },
    methods: {},
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      initMatch : function(){
        // console.log('eita lele');
        this.$refs.champGames.startMatches();
        
        
      },
      endGame: function(){
        // debugger;
        this.calculateMatchResults();
        
      },
      calculateMatchResults : function(){
        //debugger
        //let matches = JSON.parse(JSON.stringify(this.$refs.champGames.$refs.matches));
        console.log('agua, coca, latão');
        let matchesArray = [];
        this.$refs.champGames.$refs.matches.forEach(element => {
          let matchObj = {};
          matchObj.goals = element.match.jogoObj.goals;
          matchObj.homeTeam = element.match.homeTeam;
          matchObj.awayTeam = element.match.awayTeam;
          matchesArray.push(matchObj); 
        });
        console.log(matchesArray);
        let matchObj = {};
        matchObj.goals = this.$refs.mainGame.jogoObj.goals;
        matchObj.homeTeam = this.$refs.mainGame.match.homeTeam;
        matchObj.awayTeam = this.$refs.mainGame.match.awayTeam;
        
        
       this.$store.commit('SAVECHAMPGAMES', matchesArray);
       this.$store.commit('SAVEMATCH', matchObj);
      }
    },
    computed:{
      
    },
    watch:{

    }
}
</script>
<style lang="scss" scoped>

</style>