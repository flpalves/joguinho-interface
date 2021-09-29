<template>
  <div class="about">
    <div class="row">
      <div class="col-md-12">
        <!-- {{selectedteam}} -->
        <FieldLaravel
          :formation="this.selectedformation"
          :players="this.starting11"
          @click="reload"
          :homekit="this.kits.home_kit"
          class="mb-4"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-8">
            <b-card header-tag="header">
              <template v-slot:header>
                <b-form-select v-model="selectedformation">
                  <b-form-select-option
                    v-for="(formation, index) in formations"
                    :value="formation.name"
                    :key="index"
                    >{{ formation.name }}</b-form-select-option
                  >
                </b-form-select>
              </template>
              <b-list-group>
                <draggable
                  class="list-group list-starting"
                  :list="starting11"
                  group="homePlayers"
                >
                  <b-list-group-item
                    v-for="(element, index) in starting11"
                    :key="element.nome"
                  >
                    <div class="form-group row">
                      <div class="col-sm-7">
                        <b-button block variant="outline-secondary">
                          {{ element.nome }}
                          <b-badge>{{ index + 1 }}</b-badge>
                        </b-button>
                      </div>
                      <div class="col-sm-5">
                        <b-form-select v-model="element.role">
                          <b-form-select-option
                            v-for="(
                              role, index2
                            ) in functionsInselectedFormation.positions[index]"
                            :value="role"
                            :key="index2"
                            >{{ role }} [{{ getRoleInfos(role)['position'] }}] </b-form-select-option
                          >
                        </b-form-select>
                      </div>
                    </div>
                  </b-list-group-item>
                </draggable>
              </b-list-group>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card header="Banco">
              <b-list-group>
                <draggable
                  class="list-group"
                  :list="this.selectedteamx.beach"
                  :move="checkMove"
                  group="homePlayers"
                >
                  <div
                    v-for="element in this.selectedteamx.beach"
                    :key="element.nome"
                    class="list-group-item"
                  >
                    {{ element.nome }}
                  </div>
                </draggable>
              </b-list-group>
            </b-card>
            <b-button
              block
              class="mt-4"
              @click="saveTatics"
              variant="outline-primary"
              >Salvar</b-button
            >
            <b-button block class="mt-4" to="/gameday" variant="link"
              >Voltar</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import draggable from "vuedraggable";
import FieldLaravel from "./../components/FieldLaravel";
import Formations from "./../engine/Formations.js";
import Axios from 'axios';

// import Clubs from "@/mocks/Club.js";

export default {
  name: "TaticsLaravel",
  components: { draggable, FieldLaravel },
  props : ['selectedteam','selectedformation',],
  data() {
    return {
      club : {},
      formations: [],
      selectedformation: '',
      name: '',
      starting11: [],
      beach: [],
      teamId:'',
      kits: {},
      selectedteamx : {
        jogadores : []
      }
      
    };
  },
  methods: {
    checkMove: function(e) {
      if (this.starting11.length > 10) {
        console.log("cancelado!");
        return false;
      }
    },
    saveTatics :function(){
      let team = {
        selectedformation : this.selectedformation,
        name : this.name,
        starting11 : this.starting11, 
        beach : this.beach,
        colors : this.colors,
        teamId: this.teamId
      };
      this.selectedteamx.starting11 = team.starting11;
      this.$emit('savetatics', team);
      debugger
      // this.$router.push('/gameday')
    },
    reload: function(){
      this.club = this.selectedteamx;
      this.colors = this.colors;
      this.selectedformation = this.selectedteamx.selectedformation;
      this.name = this.club.name;
      this.starting11 = this.club.starting11;
      this.beach = this.club.beach;
      this.teamId = this.club.teamId;
    },
    idToPlayer : function(){
      // debugger
      var ids = this.selectedteamx.starting11;

      for (let index = 0; index < ids.length; index++) {
        var jogador = this.selectedteamx.starting11.filter( (p) => p.id == ids[index].id )[0];
        jogador.role = ids[index].role;
        this.starting11.push( jogador );
        this.starting11[index];
        
      }
    },
    getRoleInfos : function(role){
      return Formations.getPositionByRole(role);
    },
    async getTeamAssets(){ 
      
      var self = this;
      let ret = await Axios
        .get(`http://localhost/api/clube/${this.selectedteamx.id}/assets`)
        .then(function (response) {
          // handle success
          debugger; 
          console.log(response.data);
          self.kits = response.data;
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
  watch: {
    selectedteamx : function(){
      console.log('a'); 
      this.club = this.selectedteamx;
      this.selectedformation = this.selectedteamx.selected_formation;
      this.name = this.club.name;
      this.starting11 = this.club.starting11;
      this.beach = this.club.beach;
      this.colors = this.club.colors;
      this.teamId = this.club.teamId;  
      console.log('eita porra');
      // debugger
    }
  },
  mounted() {
      this.formations = Formations.formations;
      //  
      // this.selectedteam
      this.selectedteamx = this.selectedteam;
      // debugger 
      this.selectedteamx.starting11 = JSON.parse(this.selectedteamx.starting11);
      this.selectedteamx.jogadores = this.selectedteamx.starting11;
      this.selectedteamx.beach = JSON.parse(this.selectedteamx.beach);
      // debugger
      this.getTeamAssets();
      
      this.idToPlayer();
      
  },
  computed: {
    functionsInselectedFormation: function() {
      //debugger;
      if(this.selectedformation== null){
        this.selectedformation = "4-4-2Losango";
      }
      return this.formations.find(formation => {
        if (formation.name == this.selectedformation) {
          return formation;
        }
      });
    }
  }
};
</script>
<style>
  .list-starting{
    background: rgb(170, 226, 198);
    padding: 20px 10px;
  }
</style>