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
          <SelectTeamSlider :teamsList="teamsList" @selectedTeam="selectedHomeTeam" />
          <b-form-checkbox switch v-model="homeControlled">Controlado pelo CPU</b-form-checkbox>
        </div>
        <div class="col-md-6">
          <SelectTeamSlider :teamsList="teamsList" @selectedTeam="selectedAwayTeam" />
          <b-form-checkbox switch v-model="awayControlled">Controlado pelo CPU</b-form-checkbox>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button v-if="homeTeam && awayTeam" @click="goToGameDay">Avançar para o jogo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SelectTeamSlider from "@/components/SelectTeamSlider";
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Home",
  components: {
    SelectTeamSlider
  },
  data() {
    return {
      homeTeam: "",
      awayTeam: "",
      homeControlled : false,
      awayControlled : false,
      teamsList: [
        {
          country: "Brasil",
          leagues: [
            {
              leagueName: "Carioca",
              teams: [
                {
                  name: "Flamengo"
                },
                {
                  name: "Fluminense"
                },
                {
                  name: "Vasco"
                },
                {
                  name: "Botafogo"
                }
              ]
            },
            {
              leagueName: "Paulista",
              teams: [
                {
                  name: "Corinthians"
                },
                {
                  name: "São Paulo"
                },
                {
                  name: "Palmeiras"
                },
                {
                  name: "Santos"
                }
              ]
            }
          ]
        },
        {
          country: "Argentina",
          leagues: [
            {
              leagueName: "Argentinão",
              teams: [
                {
                  name: "Boca"
                },
                {
                  name: "River"
                },
                {
                  name: "San Lorenzo"
                },
                {
                  name: "Velez"
                }
              ]
            },
            {
              leagueName: "Argentinho",
              teams: [
                {
                  name: "Huracan"
                },
                {
                  name: "Independiente"
                },
                {
                  name: "Racing"
                },
                {
                  name: "Lanus"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    selectedHomeTeam: function(team) {
      console.log(team.name);
      this.homeTeam = team;
    },
    selectedAwayTeam: function(team) {
      console.log(team.name);
      this.awayTeam = team;
    },
    goToGameDay: function(){
      let match = {};
      match.homeTeam = this.homeTeam;
      match.awayTeam = this.awayTeam;
      this.$store.commit('INSERTTEAMS', match);
      this.$router.push('/gameday')
    },
    
  },
  mounted() {
    this.$store.commit("DESTROYSTORAGE");
  }
};
</script>
