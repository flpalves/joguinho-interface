<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Preparativos para o jogo</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-button-group>
            <b-button variant="outline-danger" to="new-championship">&lt; Voltar ao menu principal</b-button>
            <b-button variant="outline-success" to="/match">Iniciar Partida ></b-button>
          </b-button-group>
        </div>
      </div>
      <GameDayComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Clubs from "@/mocks/Club.js";
import Formations from "@/engine/Formations.js";
import GameDayComponent from "@/components/GameDayComponent.vue";

export default {
  name: "GameDay",
  components: {
    GameDayComponent
  },
  
};
</script>