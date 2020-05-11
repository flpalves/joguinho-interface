<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <h4>{{jogoObj.jogo.tempo.minuto || 0}}' <small>{{jogoObj.jogo.tempo.etapa}}º tempo</small> </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <h2>{{match.homeTeam.nome}}</h2>
        </div>
        <div class="col-md-6">
          <h1>{{jogoObj.jogo.timeHome.placar}} x {{jogoObj.jogo.timeAway.placar}}</h1>
          <b-button @click="startGame" variant="outline-primary">Começar</b-button>
        </div>
        <div class="col-md-3">
          <h2>{{match.awayTeam.nome}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="homeGoals">
            <p v-for="(goal, index) in this.jogoObj.goals.timeHome" :key="index">{{goal.text}} {{goal.minute}}</p>
          </div>
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-3">
          <div class="awayGoals">
            <p v-for="(goal, index) in this.jogoObj.goals.timeAway" :key="index">{{goal.text}} {{goal.minute}}</p>
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
            <li v-for="(player, index) in this.match.homeTeam.jogadores" :key="index">
              <b-badge>{{index+1}}</b-badge>
              {{player.name}}
              <br />
              <small>{{player.role}}</small>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          
          <div v-for="(play,index) in this.jogoObj.plays"  :key="index">
            <p class="main-play" v-if="index == 0" :style="`background:${play.bg1}; color:${play.bg2}; border: 1px solid ${play.bg2}`">{{play.minute}}- {{play.text}} ({{play.fieldPosition}})</p>
            <p class="play" v-if="index != 0" :style="`background:${play.bg1}; color:${play.bg2}; border: 1px solid ${play.bg2}`" >{{play.minute}}- {{play.text}} ({{play.fieldPosition}})</p>
          </div>
        </div>
        <div class="col-md-3">
          <ul>
            <li v-for="(player, index) in this.match.awayTeam.jogadores" :key="index">
              <b-badge>{{index+1}}</b-badge>
              {{player.name}}
              <br />
              <small>{{player.role}}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Match",
  components: {},
  data() {
    return {
      match: {
        homeTeam: {
          placar: 0,
          nome: "",
          inicial: [],
          jogadores: [],
          cores: {
            principal: "",
            secundaria: ""
          }
        },
        awayTeam: {
          placar: 0,
          nome: "",
          inicial: [],
          jogadores: [],
          cores: {
            principal: "",
            secundaria: ""
          }
        }
      },
      jogoObj: {}
    };
  },
  methods: {
    getMatch: function() {
      this.jogoObj = this.$GameEngine.setJogo(
        this.match.homeTeam,
        this.match.awayTeam
      );
    },
    startGame: function() {
      var interval = setInterval(foo, 2000);
      var self = this;
      function foo() {
        if (self.jogoObj.jogo.encerrado) {
          clearInterval(interval);
        }
        self.jogoObj.controlaJogo();
      }
    },
    fillPositionAndAttsByRole: function(player) {
      let position = "";
      let atts = {};
      switch (player.role) {
        case "Goleiro":
          atts = {
            "1": "defende",
            "2": "defende",
            "3": "espalma",
            "4": "espalma",
            "5": "espalmaFora",
            "6": "espalmaFora"
          };
          position = "1";

          break;
        case "Zagueiro Cobertura":
          atts = {
            "1": "carrinho",
            "2": "disputa",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "1";
          break;
        case "Zagueiro Combate":
          atts = {
            "1": "carrinho",
            "2": "disputa",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "2";

          break;
        case "Lateral Recuado":
          atts = {
            "1": "carrinho",
            "2": "disputa",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "2";

          break;
        case "Lateral":
          atts = {
            "1": "carrinho",
            "2": "corrida",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "2";
          break;
        case "Ala":
          atts = {
            "1": "carrinho",
            "2": "corrida",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "3";
          break;
        case "Ala Ofensivo":
          atts = {
            "1": "carrinho",
            "2": "corrida",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "4";
          break;
        case "Cabeça de Área":
          atts = {
            "1": "carrinho",
            "2": "disputa",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "3";
          break;
        case "Volante Recuado":
          atts = {
            "1": "carrinho",
            "2": "toque",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "3";
          break;
        case "Volante":
          atts = {
            "1": "carrinho",
            "2": "toque",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "4";
          break;

        case "Meia Central":
          atts = {
            "1": "carrinho",
            "2": "toque",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "5";
          break;
        case "Meia Avançado":
          atts = {
            "1": "carrinho",
            "2": "toque",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "6";
          break;
        case "Armador Recuado":
          atts = {
            "1": "carrinho",
            "2": "lancamento",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "4";
          break;
        case "Armador":
          atts = {
            "1": "carrinho",
            "2": "lancamento",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "5";
          break;

        case "Armador Avançado":
          atts = {
            "1": "carrinho",
            "2": "lancamento",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "6";
          break;
        case "Segundo Atacante":
          atts = {
            "1": "carrinho",
            "2": "chute",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "7";
          break;
        case "Centrovante":
          atts = {
            "1": "carrinho",
            "2": "chute",
            "3": "toque",
            "4": "drible",
            "5": "chute",
            "6": "corrida"
          };
          position = "8";
          break;

        default:
          atts = {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": ""
          };
          position = "9";
          break;
      }
      return {
        position,
        atts
      };
    },
    mountMatch: function() {
      let match = this.$store.state.match;
      match.homeTeam.starting11.map((player, index) => {
        let dynamicsAtts = this.fillPositionAndAttsByRole(player);
        player.posicao = dynamicsAtts.position;
        player.acoes = dynamicsAtts.atts;
        player.camisa = index +1 ;
        player.nome = player.name ;

        this.match.homeTeam.jogadores.push(player);
        this.match.homeTeam.inicial.push(player);
        this.match.homeTeam.cores.principal = match.homeTeam.colors.primary;
        this.match.homeTeam.cores.secundaria = match.homeTeam.colors.secondary;
      });

      this.match.homeTeam.nome = match.homeTeam.name;

      match.awayTeam.starting11.map((player, index) => {
        let dynamicsAtts = this.fillPositionAndAttsByRole(player);
        player.posicao = dynamicsAtts.position;
        player.acoes = dynamicsAtts.atts;
        player.camisa = index +1;
        player.nome = player.name ;

        this.match.awayTeam.jogadores.push(player);
        this.match.awayTeam.inicial.push(player);
        this.match.awayTeam.cores.principal = match.awayTeam.colors.primary;
        this.match.awayTeam.cores.secundaria = match.awayTeam.colors.secondary; 
      });
      this.match.awayTeam.nome = match.awayTeam.name;

      this.getMatch();
    }
  },
  mounted() {
    this.$store.commit("LOADBYSTORAGE");
    this.mountMatch();
    
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
};
p.play{
  font-size:13px;
  margin-bottom:5px;
}
p.main-play{
  font-size:16px;
  padding:15px 10px;
}
</style>