<template>
  <div class="about">
    <div class="container">
      <AnotherGames />
      <Match />
    </div>
  </div>
</template>

<script>
import Match from "@/components/Match.vue";
import AnotherGames from "@/components/AnotherGames.vue";

export default {
    name:'ChampionshipGame',
    components: {
      Match,
      AnotherGames
    },
    methods: {},
    data() {
      return {}
    },
    mounted() {

    },
    methods: {

    },
    computed:{
      
    },
    watch:{

    }
}
</script>
<style lang="scss" scoped>

</style>