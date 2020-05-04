<template>
  <div class="field">
    <img class="pitch" alt="Vue logo" src="../assets/soccer-field.jpg">
    <div class="players">
      <Player v-for="(player, index) in players" :name="player.name" :side="drawingSelectFormation.positions[index].side" :line="drawingSelectFormation.positions[index].line" photo="" :role="player.role" :key="index" />   
    </div> 
  </div> 
</template>



<script>
import Player from "@/components/Player";

export default {
  name: 'Field',
  props: ['formation','players'],
  components: {
    Player
  },
  data() {
    return {
      drawingFormation: [
        {
          name : '4-4-2Losango',
          positions:[
            { side:"center", line:"goal" },
            { side:"right-center", line:"defensive" },
            { side:"left-center", line:"defensive" },
            { side:"right", line:"defensive" },
            { side:"left", line:"defensive" },
            { side:"center", line:"back-midfield" },
            { side:"right-center", line:"midfield" },
            { side:"left-center", line:"midfield" },
            { side:"center", line:"front-midfield" },
            { side:"right-center", line:"forward" },
            { side:"left-center", line:"forward" },
          ]
        },
        {
          name : '4-4-2Quadrado',
          positions:[
            { side:"center", line:"goal" },
            { side:"right-center", line:"defensive" },
            { side:"left-center", line:"defensive" },
            { side:"right", line:"defensive" },
            { side:"left", line:"defensive" },
            { side:"left-center", line:"back-midfield" },
            { side:"right-center", line:"back-midfield" },
            { side:"left-center", line:"midfield" },
            { side:"right-center", line:"midfield" },
            { side:"right-center", line:"forward" },
            { side:"left-center", line:"forward" },
          ]
        },
        {
          name : '4-4-2Ofensivo',
          positions:[
            { side:"center", line:"goal" },
            { side:"right-center", line:"defensive" },
            { side:"left-center", line:"defensive" },
            { side:"right", line:"defensive" },
            { side:"left", line:"defensive" },
            { side:"left-center", line:"midfield" },
            { side:"center", line:"midfield" },
            { side:"right-center", line:"midfield" },
            { side:"center", line:"front-midfield" },
            { side:"right-center", line:"forward" },
            { side:"left-center", line:"forward" },
          ]
        },
        {
          name : '4-3-3Padrao', 
          positions:[
            { side:"center", line:"goal" },
            { side:"right-center", line:"defensive" },
            { side:"left-center", line:"defensive" },
            { side:"right", line:"defensive" },
            { side:"left", line:"defensive" },
            { side:"center", line:"midfield" },
            { side:"right-center", line:"midfield" },
            { side:"left-center", line:"midfield" },
            { side:"right-center", line:"forward" },
            { side:"left-center", line:"forward" },
            { side:"center", line:"forward" },
          ]
        },
        {
          name : '4-3-3Ofensivo', 
          positions:[
            { side:"center", line:"goal" },
            { side:"right-center", line:"defensive" },
            { side:"left-center", line:"defensive" },
            { side:"right", line:"defensive" },
            { side:"left", line:"defensive" },
            { side:"center", line:"midfield" },
            { side:"right-center", line:"midfield" },
            { side:"left-center", line:"midfield" },
            { side:"right-center", line:"forward" },
            { side:"left-center", line:"forward" },
            { side:"center", line:"forward" },
          ]
        },
        {
          name : '3-5-2Alas', 
          positions:[
            { side:"center", line:"goal" },
            { side:"right-center", line:"defensive" },
            { side:"center", line:"defensive" },
            { side:"left-center", line:"defensive" },
            { side:"right", line:"defensive" },
            { side:"left", line:"defensive" },
            { side:"right-center", line:"midfield" },
            { side:"left-center", line:"midfield" },
            { side:"center", line:"midfield" },
            { side:"left-center", line:"forward" },
            { side:"right-center", line:"forward" },
          ]
        },
        {
          name : '3-5-2SemAlas', 
          positions:[
            { side:"center", line:"goal" },
            { side:"right-center", line:"defensive" },
            { side:"center", line:"defensive" },
            { side:"left-center", line:"defensive" },
            { side:"center", line:"back-midfield" },
            { side:"right-center", line:"midfield" },
            { side:"center", line:"midfield" },
            { side:"left-center", line:"midfield" },
            { side:"center", line:"front-midfield" },
            { side:"left-center", line:"forward" },
            { side:"right-center", line:"forward" },
          ]
        }
      ]
    };
  },
  computed:{
    drawingSelectFormation : function(){
     
      return this.drawingFormation.find( (formation) => {
        if(formation.name == this.formation){
         return formation;
       }
      })

    }

  }
  
}
</script>
          

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

  .field{
    width:100%;
    height:auto;
    position: relative;
    .pitch{
      width: 100%;
      height: auto;
    }
    .players{
      position: absolute;
      width: 100%;
      height:100%;
      top:0;
      .player{
          width: 100px;
          transform: rotate(-89.9deg);
          position: absolute;
          margin-top: -63px;
          
          
          &.center{
            top: 50%;
          }
          &.right{
            top: 90%;
          }
          &.left{
            top: 10%;
          }
          &.right-center{
            top: 65%;
          }
          &.left-center{
            top: 35%;
          }

          &.goal{
            left: 10%;
          }
          &.defensive{
            left: 20%;
          }
          &.back-midfield{
            left: 30%;
          }
          &.midfield{
            left: 45%;
          }
          &.front-midfield{
            left: 55%;
          }
          &.forward{
            left: 75%;
          }
          &.back{
            margin-left: -5%;
          }
          &.front{
            margin-left: 5%;
          }
          &.very-front{
            margin-left: 8%;
          }
          &.very-back{
            margin-left: 8%;
          }
          


        img{
          width:80px;
        }
        span{
          display: block;
          z-index:1;
          // position: relative;
          &.name{
            margin-top:-15px;
            padding-top:20px;
            background:#d3d3d3;
            color:#000;
            font-size:13px;
            border-radius: 5px 5px 0 0;
          }
          &.role{
            background:#323232;
            color:#FFF;
            font-size:12px;
            border-radius: 0 0 5px 5px;
          }
          
        }
      }
    }
  }
</style>
