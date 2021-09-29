<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Escolha os times</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <SelectTeamSlider
            :teamsList="teamsList"
            @selectedTeam="selectedHomeTeam"
          />
          <b-form-checkbox switch v-model="homeControlled"
            >Controlado pelo CPU</b-form-checkbox
          >
        </div>
        <div class="col-md-6">
          <SelectTeamSlider
            :teamsList="teamsList"
            @selectedTeam="selectedAwayTeam"
          />
          <b-form-checkbox switch v-model="awayControlled"
            >Controlado pelo CPU</b-form-checkbox
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-button
            variant="outline-primary"
            v-if="homeTeam && awayTeam"
            @click="goToGameDay"
            >Avançar para o jogo</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SelectTeamSlider from "@/components/SelectTeamSlider";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import * as fb from "@/firebase";

export default {
  name: "SelectTeams",
  components: {
    SelectTeamSlider,
  },
  data() {
    return {
      homeTeam: "",
      awayTeam: "",
      homeControlled: false,
      awayControlled: false,
      teamsList: [
        {
          country: "Brasil",
          leagues: [
            {
              leagueName: "Carioca",
              teams: [
                {
                  name: "Flamengo",
                  teamId: "Flamengo",
                },
                {
                  name: "Fluminense",
                },
                {
                  name: "Vasco",
                  teamId: "Vasco",
                },
                {
                  name: "Botafogo",
                },
              ],
            },
            {
              leagueName: "Paulista",
              teams: [
                {
                  name: "Corinthians",
                },
                {
                  name: "São Paulo",
                },
                {
                  name: "Palmeiras",
                },
                {
                  name: "Santos",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectedHomeTeam: function (team) {
      console.log(team.name);
      this.homeTeam = team;
    },
    selectedAwayTeam: function (team) {
      console.log(team.name);
      this.awayTeam = team;
    },
    goToGameDay: function () {
      let match = {};
      match.homeTeam = this.homeTeam;
      match.awayTeam = this.awayTeam;
      this.$store.commit("INSERTTEAMS", match);
      this.$router.push("/gameday");
    },
    async loadDB() {
      this.teamsList = [
        {
          country: "Brasil",
          leagues: [
            {
              leagueName: "Carregado do banco",
            },
            {
              leagueName: "Firebase",
            },
          ],
        },
      ];

      var self = this;

      let ret = await axios
        .get("http://localhost/api/liga/1/clubes")
        .then(function (response) {
          // handle success
          // debugger;
          console.log(response);
          self.teamsList[0].leagues[0].teams = response.data;
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
  },
  mounted() {
    this.$store.commit("DESTROYSTORAGE");
    this.loadDB();
  },
};
</script>
