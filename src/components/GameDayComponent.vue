<template>
  <div class="row">
    <div class="col-md-4">
      <img alt="Team Kit" :src="this.kits.homeTeam.logo_clube" />
      <h2>{{ match.homeTeam.name }}</h2>
      <b-card :header="this.match.homeTeam.selected_formation">
        <b-list-group>
          <b-list-group-item
            v-for="(player, index) in JSON.parse(this.match.homeTeam.starting11)"
            :key="index"
            >{{ player.nome }}</b-list-group-item
          >
        </b-list-group>
        <p class="card-text mt-2">
          <strong>No Banco:</strong>
          <span
            v-for="(player, index) in JSON.parse(this.match.homeTeam.beach)"
            :key="index"
            >{{ player.nome }},</span
          >
        </p>
        <b-button variant="outline-primary" to="/home-team-tatics"
          >Táticas time mandante</b-button
        >
      </b-card>
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <img alt="Team Kit" :src="this.kits.awayTeam.logo_clube" />
      <h2>{{ match.awayTeam.name }}</h2>
      <b-card :header="this.match.awayTeam.selected_formation">
        <b-list-group>
          <b-list-group-item
            v-for="(player, index) in JSON.parse(this.match.awayTeam.starting11)"
            :key="index"
            >{{ player.nome }}</b-list-group-item
          >
        </b-list-group>
        <p class="card-text mt-2">
          <strong>No Banco:</strong>
          <span
            v-for="(player, index) in JSON.parse(this.match.awayTeam.beach)"
            :key="index"
            >{{ player.nome }},</span
          >
        </p>
        <b-button variant="outline-primary" to="/away-team-tatics"
          >Táticas time visitante</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
// import Clubs from "@/mocks/Club.js";
import Formations from "@/engine/Formations.js";
import Axios from 'axios';


export default {
  name: "GameDayComponent",
  components: {},
  data() {
    return {
      match: {},
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
    getMatch: function () {
      this.match = this.$store.state.match;

      this.getHomeTeamAssets();
      this.getAwayTeamAssets();
    },
    async getFullHomeTeam() {
      // let teamName = this.match.homeTeam.name;
      let teamName = this.match.homeTeam.slug;
      // let teamName = "seropedicaAc";
      // return false;
      var self = this;

      var fullTeam = JSON.parse(this.match.homeTeam.starting11);
      self.match.homeTeam = fullTeam;
      self.$store.commit("INSERTHOMETEAM", this.match.homeTeam);
      self.insertPositionsInPlayers(this.match.homeTeam);
    },
    async getFullAwayTeam() {
      // let teamName = this.match.homeTeam.name;
      let teamName = this.match.awayTeam.slug;
      // let teamName = "seropedicaAc";
      // return false;
      var self = this;

      var fullTeam = JSON.parse(this.match.awayTeam.starting11);
      self.match.awayTeam = fullTeam;
      self.$store.commit("INSERTAWAYTEAM", this.match.awayTeam);
      self.insertPositionsInPlayers(this.match.awayTeam);
    },
    insertPositionsInPlayers: function (fullTeam) {
      let formationName = fullTeam.selectedFormation;
      let formation = Formations.getFormationByName(formationName);
      console.log(formation);
      if (typeof fullTeam.starting11 == "undefined") {
        fullTeam.starting11 = [];
      }
      fullTeam.starting11.map((player, index) => {
        player.role = formation.defaultPositions[index];
      });
    },
    getImgUrl: function (img) {
      return require("../assets/logos/" + img + ".png");
    },
    async loadDBTeam(teamId, team) {
      var self = this;
    },
    getSelectTeam(teamId, collection) {
      return collection.times.find((time) => time.teamId == teamId);
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
    this.getMatch();
    if (!this.match.homeTeam.starting11) {
      console.log("faixa rosa");
      this.getFullHomeTeam();
      
    }
    if (!this.match.awayTeam.starting11) {
      console.log("faixa preta");
      this.getFullAwayTeam();
    }
  },
};
</script>
<style lang="scss" scoped>
</style>