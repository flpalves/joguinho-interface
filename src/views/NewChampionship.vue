<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          
          <SelectTeam @chooseTeam="SelectTeam" :teams="Teams" />
          
          <b-button @click="createChampionship">Começar Campeonato</b-button>
          <!-- <b-button to="fixtures">Começar Campeonato</b-button> -->
          (ação de sortear rodadas)
          <!-- <HomeGame /> -->
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
// @ is an alias to /src
import SelectTeam from "@/components/Championship/SelectTeam.vue";
import FlpChampionshipCalendar from "@/modules/FlpChampionshipCalendar/FlpChampionshipCalendar.js";

export default {
  name: "NewChampionship",
  components: {
    SelectTeam
  },
  methods: {
    SelectTeam : function(team){
      this.SelectedTeam = team;
    },
    createChampionship: function(){

      let champOptions = {
        participants : this.Teams,
        turns : 2
      };

      this.championship = FlpChampionshipCalendar.createChampionship(champOptions);

      this.$store.commit('SAVECHAMP', this.championship);
      this.$store.commit('SAVEMYTEAM', this.SelectedTeam);

      this.$router.push('/fixtures');
      
    }
  },
  data(){
    return {
      SelectedTeam: {},
      championship: {},
      Teams : [
        {
          name: "Esperança FC",
          teamId: "esperancaFc",
          color: {
            primary: "green",
            secondary: "white"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "Seropedica AC",
          teamId: "seropedicaAc",
          color: {
            primary: "white",
            secondary: "red"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "Grêmio Km49",
          teamId: "gremioKm49",
          color: {
            primary: "white",
            secondary: "black"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "Tupy SC",
          teamId: "tupySc",
          color: {
            primary: "green",
            secondary: "black"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "Brasil Industrial EC",
          teamId: "biecPbi",
          color: {
            primary: "red",
            secondary: "white"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        },
        {
          name: "AC Ecologia",
          teamId: "ecologiaAc",
          color: {
            primary: "#900",
            secondary: "white"
          },
          description:"lorem ipsum dolor emet hue heuheu heuh eueh uehuehuehudhue heu hdueh ueh ude he hed hded hdeh uedh ueh ueh ue"
        }
      ]
    }
  }
};
</script>
 