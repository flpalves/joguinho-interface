<template>
  <div>
      <h3>Classificação Geral</h3> 
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "Standings",
  components: {},
  methods: {},
  data() {
    return {
      items: [
        {
          name: "Seropédica",
          position: "1º",
          matchs: "3",
          won: "3",
          lost: "0",
          drawn: "0",
          percentage: "100%",
          goalsFor: "13",
          goalsAgainst: "2",
          points: "9"
        },
        {
          name: "Grêmio Km49",
          position: "2º",
          matchs: "3",
          won: "3",
          lost: "0",
          drawn: "0",
          percentage: "100%",
          goalsFor: "10",
          goalsAgainst: "3",
          points: "9"
        },
        {
          name: "Esperança FC",
          position: "3º",
          matchs: "3",
          won: "3",
          lost: "0",
          drawn: "0",
          percentage: "100%",
          goalsFor: "13",
          goalsAgainst: "2",
          points: "9"
        },
      ]
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