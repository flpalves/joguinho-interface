<template>
  <div>
    <swiper class="swiper" :options="swiperOption" ref="country" @slideChange="onChangeCountry">
      <swiper-slide v-for="(country, index) in teamsList" :key="index" >{{country.country}}</swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <swiper class="swiper" :options="swiperOption" ref="league" @slideChange="onChangeLeague">
      <swiper-slide v-for="(league, index) in selectedCountry.leagues" :key="index">{{league.leagueName}}</swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper> 
    <swiper class="swiper" :options="swiperOption" ref="team" @slideChange="onChangeTeam">
      <swiper-slide v-for="(team, index) in selectedLeague.teams" :key="index">{{team.name}}</swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "SelectTeamSlider",
  components: {},
  props: ["teamsList"],
  data() {
    return {
      swiperOption: {
        loop: true,
        keyboard: {
          enabled: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      selectedCountry : {},
      selectedLeague : {},
      selectedTeam : {},
    };
  },
  methods: {
      onChangeCountry : function(){
          let indexCountry = (this.$refs.country.$swiper.activeIndex - 1) % this.teamsList.length;
          if(indexCountry < 0){
            indexCountry = indexCountry * (-1);
          }
          this.selectedCountry = this.teamsList[indexCountry];
          this.selectedLeague = {};
          this.selectedTeam = {};
      },
      onChangeLeague : function(){
          let indexLeague = (this.$refs.league.$swiper.activeIndex - 1) % this.selectedCountry.leagues.length;
          if(indexLeague < 0){
            indexLeague = indexLeague * (-1);
          }
          this.selectedLeague = this.selectedCountry.leagues[indexLeague];
          this.selectedTeam = {};
      },
      onChangeTeam: function(){
          let indexTeam = (this.$refs.team.$swiper.activeIndex - 1) % this.selectedLeague.teams.length;
          if(indexTeam < 0){
            indexTeam = indexTeam * (-1);
          }
          this.selectedTeam = this.selectedLeague.teams[indexTeam];
          this.$emit('selectedTeam', this.selectedTeam);
      }
  }
};
</script>