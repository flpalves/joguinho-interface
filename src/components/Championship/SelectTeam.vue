<template>
  <div class="row">
    <div class="col-md-6">
      <h1>Escolha seu time</h1>
      <b-form-select v-model="selected" @change="chooseTeam">
          <b-form-select-option v-for="(team, index) in teams" :value="team" :key="index">{{team.name}}</b-form-select-option>
      </b-form-select>
    </div>
    <div class="col-md-6">
        <h3>{{selected.name}}</h3>
        <p>inserir camisa</p>
        <p>inserir escudo</p>
        <p>{{selected.description}}</p>
    </div>
  </div>
</template>
 <script>
// @ is an alias to /src

export default {
  name: "SelectTeam",
  components: {},
  methods: {
    chooseTeam : function(){
      this.$emit( 'chooseTeam', this.selected );
    }
  },
  props:['teams'],
  data() {
    return {
      selected: {}
    };
  }
};
</script>