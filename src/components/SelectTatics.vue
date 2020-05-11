<template>
  <div class="about">
    <div class="row">
      <div class="col-md-12">
        <!-- {{selectedTeam}} -->
        <Field :formation="this.selectedFormation" :players="this.starting11" @click="reload" :teamId="this.club.teamId" class="mb-4" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-8">
            <b-card header-tag="header">
              <template v-slot:header>
                <b-form-select v-model="selectedFormation">
                  <b-form-select-option
                    v-for="(formation, index) in formations"
                    :value="formation.name"
                    :key="index"
                  >{{formation.name}}</b-form-select-option>
                </b-form-select>
              </template>
              <b-list-group>
                <draggable class="list-group" :list="starting11" group="homePlayers">
                  <b-list-group-item v-for="(element, index) in starting11" :key="element.name">
                    <div class="form-group row">
                      <div class="col-sm-7">
                        <b-button block variant="outline-secondary">
                          {{element.name}}
                          <b-badge>{{index+1}}</b-badge>
                        </b-button>
                      </div>
                      <div class="col-sm-5">
                        <b-form-select v-model="element.role">
                          <b-form-select-option
                            v-for="(role, index2) in functionsInSelectedFormation.positions[index]"
                            :value="role"
                            :key="index2"
                          >{{role}}</b-form-select-option>
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
                  :list="this.beach"
                  :move="checkMove"
                  group="homePlayers"
                >
                  <div
                    v-for="element in this.beach"
                    :key="element.name"
                    class="list-group-item"
                  >{{element.name}}</div>
                </draggable>
              </b-list-group>
            </b-card>
            <b-button block class="mt-4" @click="saveTatics" variant="outline-primary">Salvar</b-button>
            <b-button block class="mt-4" to="/gameday" variant="link">Voltar</b-button>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolores accusantium beatae aut, quam laboriosam atque voluptatum esse dignissimos, explicabo eius nisi corporis repellat vel inventore harum eligendi, magni unde!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import draggable from "vuedraggable";
import Field from "@/components/Field";
import Formations from "@/engine/Formations.js";
// import Clubs from "@/mocks/Club.js";

export default {
  name: "Tatics",
  components: { draggable, Field },
  props : ['teamSide','selectedTeam'],
  data() {
    return {
      
      club : {},
      formations: [],
      selectedFormation: '',
      name: '',
      starting11: [],
      beach: [],
      teamId:''
      
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
        selectedFormation : this.selectedFormation,
        name : this.name,
        starting11 : this.starting11, 
        beach : this.beach,
        colors : this.colors,
        teamId: this.teamId
      };
      this.$emit('saveTatics', team);
      // this.$router.push('/gameday')
    },
    reload: function(){
      this.club = this.selectedTeam;
      this.colors = this.colors;
      this.selectedFormation = this.club.selectedFormation;
      this.name = this.club.name;
      this.starting11 = this.club.starting11;
      this.beach = this.club.beach;
      this.teamId = this.club.teamId;
    }
  },
  watch: {
    selectedTeam : function(){
      this.club = this.selectedTeam;
      this.selectedFormation = this.club.selectedFormation;
      this.name = this.club.name;
      this.starting11 = this.club.starting11;
      this.beach = this.club.beach;
      this.colors = this.club.colors;
      this.teamId = this.club.teamId; 
      console.log('eita');
    }
  },
  mounted() {
      this.formations = Formations.formations;
  },
  computed: {
    functionsInSelectedFormation: function() {
      return this.formations.find(formation => {
        if (formation.name == this.selectedFormation) {
          return formation;
        }
      });
    }
  }
};
</script>