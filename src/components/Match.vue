<template>
  <div>
    <div class="row">
      <div class="col">
        <h4 v-if="!jogoObj.jogo.encerrado">
          {{ jogoObj.jogo.tempo.minuto || 0 }}'
          <small>{{ jogoObj.jogo.tempo.etapa }}º tempo</small>
        </h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <!-- <img alt="Team Kit" :src="getImgUrl(this.match.homeTeam.teamId)" /> -->
        <h2>{{ match.homeTeam.nome }}</h2>
      </div>
      <div class="col-md-6">
        <h1>
          {{ jogoObj.jogo.timeHome.placar }} x
          {{ jogoObj.jogo.timeAway.placar }}
        </h1>
        <b-button
          v-if="!this.started"
          @click="startGame2"
          variant="outline-primary"
          >Começar</b-button
        >
        <b-button @click="finishGame">sair do jogo</b-button>
        <hr />
        <ul>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.chutes }}</span> - chutes -<span>{{ jogoObj.jogo.stats.timeAway.chutes }}</span>
          </li>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.chutesAGol }}</span> - chutes a gol -<span>{{ jogoObj.jogo.stats.timeAway.chutesAGol }}</span>
          </li>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.toquesTentados }}/{{ jogoObj.jogo.stats.timeHome.toques }} + {{ jogoObj.jogo.stats.timeHome.toquesPerfeitos }}</span> - passes tentados x concluidos -<span>{{ jogoObj.jogo.stats.timeAway.toquesTentados }}/{{ jogoObj.jogo.stats.timeAway.toques }}+{{ jogoObj.jogo.stats.timeAway.toquesPerfeitos }}</span>
          </li>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.lancamentos }}</span> - lançamentos -<span>{{ jogoObj.jogo.stats.timeAway.lancamentos }}</span>
          </li>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.lancamentosPerfeitos }}</span> - lançamentos perfeitos -<span>{{ jogoObj.jogo.stats.timeAway.lancamentosPerfeitos }}</span>
          </li>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.corridas }}</span> - corridas -<span>{{ jogoObj.jogo.stats.timeAway.corridas }}</span>
          </li>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.dribles }}</span> - dribles -<span>{{ jogoObj.jogo.stats.timeAway.dribles }}</span>
          </li>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.rifadas }}</span> - bolas rifadas -<span>{{ jogoObj.jogo.stats.timeAway.rifadas }}</span>
          </li>
          <li>
            <span>{{ jogoObj.jogo.stats.timeHome.erros }}</span> - erros -<span>{{ jogoObj.jogo.stats.timeAway.erros }}</span>
          </li>
        </ul>
        <!-- <b-button v-if="jogoObj.jogo.encerrado" @click="finishGame" >sair do jogo</b-button> -->
      </div>
      <div class="col-md-3">
        <!-- <img alt="Team Kit" :src="getImgUrl(this.match.awayTeam.teamId)" /> -->
        <h2>{{ match.awayTeam.nome }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="homeGoals">
          <p v-for="(goal, index) in this.jogoObj.goals.timeHome" :key="index">
            {{ goal.text }} {{ goal.minute }}" {{ goal.half }}º
          </p>
        </div>
      </div>
      <div class="col-md-6"></div>
      <div class="col-md-3">
        <div class="awayGoals">
          <p v-for="(goal, index) in this.jogoObj.goals.timeAway" :key="index">
            {{ goal.text }} {{ goal.minute }} {{ goal.half }}º
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <ul>
          <li
            v-for="(player, index) in this.match.homeTeam.jogadores"
            :key="index"
          >
            <b-badge>{{ index + 1 }}</b-badge>
            {{ player.nome }} [{{player.posicao}}]
            <br />
            <small>{{ player.role }}</small>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div class="game-play">
          <div class="game-play-content">
            <div v-for="(play, index) in this.jogoObj.plays" :key="index">
              <p
                class="main-play"
                v-if="index == 0"
                :style="`background:${play.bg1}; color:${play.bg2}; border: 1px solid ${play.bg2}`"
              >
                {{ play.minute }}- {{ play.text }} ({{ play.fieldPosition }})
              </p>
              <p
                class="play"
                v-if="index != 0"
                :style="`background:${play.bg1}; color:${play.bg2}; border: 1px solid ${play.bg2}`"
              >
                {{ play.minute }}- {{ play.text }} ({{ play.fieldPosition }})
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <ul>
          <li
            v-for="(player, index) in this.match.awayTeam.jogadores"
            :key="index"
          >
            <b-badge>{{ index + 1 }}</b-badge>
            {{ player.nome }} [{{player.posicao}}]
            <br />
            <small>{{ player.role }}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import GameObj from "@/engine/GameObj.js";

export default {
  name: "Match",
  components: {},
  data() {
    return {
      started: false,
      match: {
        homeTeam: {
          placar: 0,
          stats : {
            chutes : 0,
            toques : 0,
            lancamentos : 0,
            dribles : 0,
            roubos : 0,
            erros : 0,
          },
          nome: "",
          inicial: [],
          jogadores: [],
          cores: {
            principal: "",
            secundaria: ""
          },
          teamId: ""
        },
        awayTeam: {
          placar: 0,
          nome: "",
          inicial: [],
          jogadores: [],
          cores: {
            principal: "",
            secundaria: ""
          },
          teamId: ""
        }
      },
      stats: {
        homeTeam : {
            chutes : 0,
            toques : 0,
            lancamentos : 0,
            dribles : 0,
            roubos : 0,
            erros : 0,
        },
        awayTeam : {
            chutes : 0,
            toques : 0,
            lancamentos : 0,
            dribles : 0,
            roubos : 0,
            erros : 0,
        }
      },
      jogoObj: {},
      kits : {
        homeTeam : {
          home_kit : '',
          away_kit : '',
          logo_clube : ''
        },
        awayTeam : {
          home_kit : '',
          away_kit : '',
          logo_clube : ''
        }
      }
    };
  },
  methods: {
    getMatch: function() {
        this.jogoObj = {...this.$GameEngine}
        // this.jogoObj = Object.assign({}, this.$GameEngine);
        this.jogoObj = this.jogoObj.setJogo(
        this.match.homeTeam,
        this.match.awayTeam
      );
    },
    //old function
    startGame: function() {
      this.$emit('initMatch');
      var interval = setInterval(foo, 2000);
      var self = this;
      this.started = true;
      function foo() {
        if (self.jogoObj.jogo.encerrado) {
          clearInterval(interval);
        }
        self.jogoObj.controlaJogo();
      }
    },
    startGame2 : function(){
      this.$emit('initMatch');
      
      this.started = true;
      this.controle();

      
    },

    controle : function(){
      var continuarJogo = false;
      var self = this;
      debugger;
      continuarJogo = self.jogoObj.controlaJogo();
      setTimeout(() => {
        if(continuarJogo == true){
          this.controle();
        }
      }, 8000);

    },
    
    getImgUrl: function(img) {
      return require("../assets/logos/" + img + ".png");
    },
    
    finishGame : function(){
      this.$emit('endGame');
    },
    async getHomeTeamAssets(){ 
      var self = this;
      let ret = await Axios
        .get(`http://localhost/api/clube/${this.match.homeTeam.id}/assets`)
        .then(function (response) {
          // handle success
          // debugger; 
          console.log(response.data);
          self.kits.homeTeam = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

      return ret;
    },
    async getAwayTeamAssets(){ 
      var self = this;
      let ret = await Axios
        .get(`http://localhost/api/clube/${this.match.awayTeam.id}/assets`)
        .then(function (response) {
          // handle success
          // debugger;
          console.log(response.data);
          self.kits.awayTeam = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

      return ret;
    }
  },
  mounted() {
    this.$store.commit("LOADBYSTORAGE");
    
    this.match = GameObj.GameObj.mountMatch(this.$store.state.match);
    this.getMatch();



  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    small {
      font-size: 11px;
    }
  }
}
.game-play {
  height: 100%;
  .game-play-content {
    overflow-y: scroll;
    max-height: 500px;
  }
}
p.play {
  font-size: 13px;
  margin-bottom: 5px;
}
p.main-play {
  font-size: 16px;
  padding: 15px 10px;
  font-weight: bold;
}
</style>