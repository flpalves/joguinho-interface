<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          
          <SelectTeam />
          
          <b-button to="fixtures">Começar Campeonato</b-button>
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

export default {
  name: "NewChampionship",
  components: {
    SelectTeam
  },
  methods: {

  },
  data(){
    return {
      
    }
  }
};
</script>
 