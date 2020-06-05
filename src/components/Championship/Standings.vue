<template>
  <div>
      <h3>Classificação Geral</h3> 
    <!-- <b-table striped hover :items="this.standings"></b-table> -->

    <table class="table">
      <tr>
        <th>Posição</th>
        <th>Clube</th>
        <th>Pontos</th>
        <th>Vitórias</th>
        <th>Empates</th>
        <th>Derrotas</th>
        <th>Gols Pró</th>
        <th>Gols Sofridos</th>
        <th>Saldo de Gols</th>
        <th>Forma</th>
      </tr>
      <tr v-for="(club, index) in this.standings" :key="index">
        <td>{{club.position}}</td>
        <td>{{club.team.name}}</td>
        <td>{{club.points}}</td>
        <td>{{club.won}}</td>
        <td>{{club.drawn}}</td>
        <td>{{club.lost}}</td>
        <td>{{club.goalsFor}}</td>
        <td>{{club.goalsAgainst}}</td>
        <td>{{club.goalsFor - club.goalsAgainst}}</td>
        <td>{{club.form}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Standings",
  components: {},
  methods: {},
  props : ["standings"],
  data() {
    return {
       
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
</style>