<template>
  <div>
    <MatchMini v-for="(match, index) in this.matches" :game="match" :key="`${componentKey}-${index}`" ref="matches" />
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
      matches: [],
      componentKey : 0,
    };
  },
  mounted() {
    this.$store.commit("LOADCHAMPGAMES");
    this.matches = this.$store.state.champGames;

    window.addEventListener('goal', (event) => {
        let eventData = {
            text : `${event.detail.minute}" do ${event.detail.half}º tempo, ${event.detail.text} marca, ${event.detail.scoreBoard.homeTeam} ${event.detail.scoreBoard.placarHome}x${event.detail.scoreBoard.placarAway  } ${event.detail.scoreBoard.awayTeam}`,
            title : `Tem gol, ${event.detail.team}!`
        };
        this.makeToast('secondary', eventData);
    }, false);

    window.addEventListener('endGame', (event) => { 
        let eventData = {
            text : `${event.detail}`,
            title : `Fim de jogo`
        };
        this.makeToast('secondary', eventData);
    }, false);

    window.addEventListener('halfTime', (event) => { 
        let eventData = {
            text : `${event.detail}`,
            title : `Intervalo`
        };

        this.makeToast('secondary', eventData);
    }, false);
    
  },
  methods: {
    makeToast(variant = null, eventData = {title:'???',text: 'segue o jogo'}) {
      this.$bvToast.toast( eventData.text, {
        title: eventData.title,
        variant: variant,
        solid: false
      });
    },
    startMatches : function(){
      console.log('start matches');
      
        this.$refs.matches.forEach( (match) => match.startGame() );
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
</style>