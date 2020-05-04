<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <HomeGame />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGame from "@/components/HomeGame.vue";

export default {
  name: "Home",
  components: {
    HomeGame
  },
  methods: {

  },
  data(){
    return {
      
    }
  }
};
</script>
 