<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Preparativos para o jogo</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img alt="Team Kit" :src="getImgUrl(this.match.homeTeam.teamId)" />
          <h2>{{match.homeTeam.name}}</h2>
          <b-card :header="this.match.homeTeam.selectedFormation">
            <b-list-group>
              <b-list-group-item
                v-for="(player, index) in this.match.homeTeam.starting11"
                :key="index"
              >{{player.name}}</b-list-group-item>
            </b-list-group>
            <p class="card-text mt-2">
              <strong>No Banco:</strong>
              <span
                v-for="(player, index) in this.match.homeTeam.beach"
                :key="index"
              >{{player.name}},</span>
            </p>
            <b-button variant="outline-primary" to="/home-team-tatics">Táticas time mandante</b-button>
          </b-card>
        </div>
        <div class="col-md-4">
          <b-button-group>
            <b-button variant="outline-danger" to="select-teams">< Voltar ao menu principal</b-button>
            <b-button variant="outline-success" to="/match">Iniciar Partida ></b-button>
          </b-button-group>
        </div>
        <div class="col-md-4">
          <img alt="Team Kit" :src="getImgUrl(this.match.awayTeam.teamId)" />
          <h2>{{match.awayTeam.name}}</h2>
          <b-card :header="this.match.awayTeam.selectedFormation">
            <b-list-group>
              <b-list-group-item
                v-for="(player, index) in this.match.awayTeam.starting11"
                :key="index"
              >{{player.name}}</b-list-group-item>
            </b-list-group>
            <p class="card-text mt-2">
              <strong>No Banco:</strong>
              <span
                v-for="(player, index) in this.match.awayTeam.beach"
                :key="index"
              >{{player.name}},</span>
            </p>
            <b-button variant="outline-primary" to="/away-team-tatics">Táticas time visitante</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Clubs from "@/mocks/Club.js";
import Formations from "@/engine/Formations.js";

export default {
  name: "GameDay",
  components: {},
  data() {
    return {
      match: {}
    };
  },
  methods: {
    getMatch: function() {
      this.match = this.$store.state.match;
    },
    getFullHomeTeam: function() {
      let teamName = this.match.homeTeam.name;
      let fullTeam = Clubs[teamName]();
      this.match.homeTeam = fullTeam;
      this.insertPositionsInPlayers(this.match.homeTeam);
      this.$store.commit("INSERTHOMETEAM", this.match.homeTeam);
    },
    getFullAwayTeam: function() {
      let teamName = this.match.awayTeam.name;
      let fullTeam = Clubs[teamName]();
      this.match.awayTeam = fullTeam;
      this.insertPositionsInPlayers(this.match.awayTeam);
      this.$store.commit("INSERTAWAYTEAM", this.match.awayTeam);
    },
    insertPositionsInPlayers: function(fullTeam) {
      let formationName = fullTeam.selectedFormation;
      let formation = Formations.getFormationByName(formationName);
      console.log(formation);

      fullTeam.starting11.map((player, index) => {
        player.role = formation.defaultPositions[index];
      });
    },
    getImgUrl: function(img) {
      return require("../assets/logos/" + img + ".png");
    }
  },
  mounted() {
    this.$store.commit("LOADBYSTORAGE");
    this.getMatch();
    if (!this.match.homeTeam.starting11) {
      console.log("faixa rosa");
      this.getFullHomeTeam();
    }
    if (!this.match.awayTeam.starting11) {
      console.log("faixa preta");
      this.getFullAwayTeam();
    }
  }
};
</script>