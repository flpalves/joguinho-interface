<template>
  <div :class="`player ${line} ${side} ${translateRoleToClassName}`" @click="clickInPlayer">
    <img alt="Team Kit" :src="this.photo">
    <span class="name">{{name}}</span>
    <span class="role">{{role}}</span>
  </div>
</template>

<script>
export default {
  name: 'PlayerLaravel', 
  props:['name','line','photo','role','side'],
  computed: {
    translateRoleToClassName : function(){
      let className = '';
      switch (this.role) {
        case 'Goleiro':
          className = 'goleiro'
          break;
        case 'Zagueiro Cobertura':
          className = 'back'
          break;
        case 'Zagueiro Combate':
          className = ''
          break;
        case 'Lateral Recuado':
          className = 'back'
          break;
        case 'Lateral':
          className = ''
          break;
        case 'Ala':
          className = 'front'
          break;
        case 'Ala Ofensivo':
          className = 'very-front'
          break;
        case 'Cabeça de Área':
          className = ''
          break;
        case 'Volante Recuado':
          className = 'back'
          break;
        case 'Volante':
          className = ''
          break;
        case 'Meia Central':
          className = ''
          break;
        case 'Meia Avançado':
          className = 'front'
          break;
        case 'Armador Recuado':
          className = 'back'
          break;
        case 'Armador':
          className = ''
          break;
        case 'Armador Avançado':
          className = 'front'
          break;
        case 'Segundo Atacante':
          className = 'back'
          break;
        case 'Centrovante':
          className = ''
          break;
        

        default:
          break;
      }
      return className
    },
    
  },
  methods:{
    clickInPlayer: function(){
      // console.log('click');
      // console.log();
      this.$emit('clickInPlayer', this.$vnode.key);
    },
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.player{
  cursor: pointer;
}
</style>
