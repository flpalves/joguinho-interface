<template>
  <div class="about">
    <h1>O Joguinho</h1>
    <p>O Joguinho é uma abstração em javascript de um pequeno jogo de futebol de dados.</p>
    <p>A ação de cada jogador em campo depende de suas ações, que são definidas pela sua posição no campo. Cada jogador tem um nível de habilidade para cara ação, podendo variar de 1 a 20. </p>
    <p>O campo é unidimensional, tendo 8 casas, cada jogador ocupa uma delas. Cada time tem que avançar pelo campo, até chegar em uma posição em que é possível efetuar um chute, que é a partir casa 5. Quanto mais próximo do gol, maiores são as chances de se atingir a meta. </p>
    <p>Cada jogador pode, tocar a bola (avança a bola 1 casa), lançar a bola (a bola avança até 2 casas), correr com a bola (o jogador e a bola avançam 1 casa), chutar a bola (tenta o chute a partir da casa 5, ou se livra da bola se tiver antes disso) e tentar driblar um oponente (se tiver sucesso ele já emenda com uma ação perfeita depois).</p>    <p>Além destas ações, os jogadores oponentes poderão tentar tomar a posse de bola, com uma ação de carrinho ou disputa.</p>
    <p>Antes de cada partida, o técnico poderá ajustar a formação, de modo a povoar mais uma área do campo que queira, e escolher a função mais adequada a cada jogador.</p>
    <p>Após 90 ações, vence quem fizer mais gols.</p>
  </div>
</template>
 <script>
// @ is an alias to /src

export default {
  name: "About",
  components: {
    
  },
  methods: {

  },
  data(){
    return {
      
    }
  }
};
</script>