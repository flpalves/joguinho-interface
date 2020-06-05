<template>
  <div>
    <h3>Rodadas</h3>
    <swiper class="swiper" :options="swiperOption" ref="round">
      <swiper-slide v-for="(round, index) in this.fixtures" :key="index">
        <h4>Rodada {{round.roundNumber}}</h4>
        <div class="partida" v-for="(game, index) in round.games" :key="index">
          <div v-if="round.finished"> 
            <p>
                {{game.homeTeam.name}}
                <strong>{{game.homeScore}}</strong> x
                <strong>{{game.awayScore}}</strong>
                {{game.awayTeam.name}}
            </p>
            <p>ver jogo</p>
            <hr>
          </div>
          
          <div v-else>
              <p>{{game.homeTeam.name}} x {{game.awayTeam.name}}</p>
              <hr>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "ResultsFixtures",
  components: {},
  methods: {},
  props: ["fixtures"],
  data() {
    return {
      swiperOption: {
        loop: false,
        keyboard: {
          enabled: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      rounds: [
        {
          roundNumber: 1,
          finished: true,
          games: [
            {
              homeTeam: {
                name: "Esperança FC",
                score: "2"
              }, //club object
              awayTeam: {
                name: "Grêmio Km49",
                score: "1"
              } //club object
            },
            {
              homeTeam: {
                name: "Tupy SC",
                score: "3"
              }, //club object
              awayTeam: {
                name: "Brasil Industrial",
                score: "0"
              } //club object
            }
          ]
        },
        {
          roundNumber: 2,
          finished: false,
          games: [
            {
              homeTeam: {
                name: "Esperança FC",
                score: ""
              }, //club object
              awayTeam: {
                name: "Grêmio Km49",
                score: ""
              } //club object
            },
            {
              homeTeam: {
                name: "Tupy SC",
                score: ""
              }, //club object
              awayTeam: {
                name: "Brasil Industrial",
                score: ""
              } //club object
            }
          ]
        },
        {
          roundNumber: 3,
          finished: false,
          games: [
            {
              homeTeam: {
                name: "Esperança FC",
                score: ""
              }, //club object
              awayTeam: {
                name: "Grêmio Km49",
                score: ""
              } //club object
            },
            {
              homeTeam: {
                name: "Tupy SC",
                score: ""
              }, //club object
              awayTeam: {
                name: "Brasil Industrial",
                score: ""
              } //club object
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
</style>