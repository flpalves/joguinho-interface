<template>
  <div class="about">
    <div class="row">
      <div class="col-md-12">
        <!-- {{selectedTeam}} -->
        <Field :formation="this.selectedFormation" :players="this.starting11" @click="reload" class="mb-4" />
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
// import Clubs from "@/mocks/Club.js";

export default {
  name: "Tatics",
  components: { draggable, Field },
  props : ['teamSide','selectedTeam'],
  data() {
    return {
      
      club : {},
      formations: [
        {
          name: "4-4-2Losango",
          defaultPositions:["Goleiro","Zagueiro Cobertura","Zagueiro Combate","Lateral","Ala","Cabeça de Área","Volante","Armador Recuado","Meia Avançado","Segundo Atacante","Centrovante"],
          positions: [
            ["Goleiro"],
            ["Zagueiro Cobertura"],
            ["Zagueiro Combate"],
            ["Lateral Recuado", "Lateral", "Ala"],
            ["Lateral Recuado", "Lateral", "Ala"],
            ["Cabeça de Área"],
            [
              "Volante Recuado",
              "Volante",
              "Meia Central",
              "Armador Recuado",
              "Armador"
            ],
            [
              "Volante",
              "Meia Central",
              "Meia Avançado",
              "Armador Recuado",
              "Armador",
              "Armador Avançado"
            ],
            ["Meia Avançado", "Armador Avançado"],
            ["Segundo Atacante"],
            ["Centrovante"]
          ]
        },
        {
          name: "4-4-2Quadrado",
          defaultPositions:["Goleiro","Zagueiro Cobertura","Zagueiro Combate","Ala","Ala Ofensivo","Cabeça de Área","Volante Recuado","Armador","Meia Avançado","Segundo Atacante","Centrovante"],
          positions: [
            ["Goleiro"],
            ["Zagueiro Cobertura"],
            ["Zagueiro Combate"],
            ["Ala", "Ala Ofensivo"],
            ["Ala", "Ala Ofensivo"],
            ["Cabeça de Área"],
            ["Cabeça de Área", "Volante Recuado"],
            ["Meia Central", "Armador"],
            ["Meia Avançado", "Armador Avançado"],
            ["Segundo Atacante"],
            ["Centrovante"]
          ]
        },
        {
          name: "4-4-2Ofensivo",
          defaultPositions:["Goleiro","Zagueiro Cobertura","Zagueiro Combate","Lateral","Ala","Volante","Meia Central","Armador","Meia Avançado","Segundo Atacante","Centrovante"],
          positions: [
            ["Goleiro"],
            ["Zagueiro Cobertura"],
            ["Zagueiro Combate"],
            ["Lateral", "Ala"],
            ["Lateral", "Ala"],
            ["Volante", "Meia Central", "Armador Recuado", "Armador"],
            ["Volante", "Meia Central", "Armador Recuado", "Armador"],
            [
              "Volante",
              "Meia Central",
              "Armador Recuado",
              "Armador",
              "Meia Avançado",
              "Armador Avançado"
            ],
            ["Meia Avançado", "Armador Avançado"],
            ["Segundo Atacante"],
            ["Centrovante"]
          ]
        },
        {
          name: "4-3-3Padrao",
          defaultPositions:["Goleiro","Zagueiro Cobertura","Zagueiro Combate","Lateral","Ala","Volante","Meia Central","Meia Avançado","Segundo Atacante","Segundo Atacante","Centrovante"],
          positions: [
            ["Goleiro"],
            ["Zagueiro Cobertura"],
            ["Zagueiro Combate"],
            ["Lateral", "Ala", "Ala Ofensivo"],
            ["Lateral", "Ala", "Ala Ofensivo"],
            ["Volante", "Meia Central", "Armador Recuado", "Armador"],
            [
              "Volante",
              "Meia Central",
              "Meia Avançado",
              "Armador Recuado",
              "Armador",
              "Armador Avançado"
            ],
            ["Meia Avançado", "Armador Avançado"],
            ["Segundo Atacante"],
            ["Segundo Atacante", "Centrovante"],
            ["Centrovante"]
          ]
        },
        {
          name: "3-5-2Alas",
          defaultPositions:["Goleiro","Zagueiro Cobertura","Zagueiro Combate","Zagueiro Combate","Ala","Ala Ofensivo","Volante","Meia Central","Meia Avançado","Segundo Atacante","Centrovante"],
          positions: [
            ["Goleiro"],
            ["Zagueiro Cobertura"],
            ["Zagueiro Combate"],
            ["Zagueiro Cobertura", "Zagueiro Combate"],
            ["Lateral", "Ala", "Ala Ofensivo"],
            ["Lateral", "Ala", "Ala Ofensivo"],
            ["Volante", "Meia Central", "Armador Recuado", "Armador"],
            ["Meia Central", "Meia Avançado", "Armador", "Armador Avançado"],
            ["Meia Avançado", "Armador Avançado"],
            ["Segundo Atacante"],
            ["Centrovante"]
          ]
        },
        {
          name: "3-5-2SemAlas",
          defaultPositions:["Goleiro","Zagueiro Cobertura","Zagueiro Combate","Zagueiro Combate","Cabeça de Área","Volante Recuado","Volante","Meia Central","Meia Avançado","Segundo Atacante","Centrovante"],
          positions: [
            ["Goleiro"],
            ["Zagueiro Cobertura"],
            ["Zagueiro Combate"],
            ["Zagueiro Cobertura", "Zagueiro Combate"],
            ["Cabeça de Área"],
            ["Cabeça de Área", "Volante Recuado", "Volante", "Armador Recuado"],
            [
              "Cabeça de Área",
              "Volante Recuado",
              "Meia Central",
              "Volante",
              "Armador Recuado",
              "Armador"
            ],
            ["Meia Central", "Meia Avançado", "Armador", "Armador Avançado"],
            ["Meia Avançado", "Armador Avançado"],
            ["Segundo Atacante"],
            ["Centrovante"]
          ]
        }
      ],
      selectedFormation: '',
      name: '',
      starting11: [],
      beach: [],
      
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
        colors : this.colors
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
      console.log('eita');
    }
  },
  mounted() {

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