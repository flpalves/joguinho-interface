<template>
  <div class="hello">
    <h1>Bem vindo ao Joguinho</h1>
    <p>O Joguinho é um pequeno simulador de partidas de futebol </p>
    <b-button class="mx-4" variant="outline-primary" to="/select-teams">Novo Jogo</b-button>
    <b-button class="mx-4" variant="outline-primary" to="/gameday">Continuar Jogo</b-button>
    <b-button class="mx-4" variant="outline-primary" to="/new-championship">Novo Campeonato</b-button>
  </div>
</template>

<script>
export default {
  name: 'HomeGame',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
