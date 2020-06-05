import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    match : {
      homeTeam : {},
      awayTeam : {}
    },
    championship:{
      
    },
    myTeam:{},
    champGames:[]
  },
  mutations: {
    INSERTTEAMS(state, payload){
      state.match = payload;
      localStorage.setItem('match',JSON.stringify(state.match));
    },
    LOADBYSTORAGE(state){
      let storageMatch = localStorage.getItem('match');
      if(storageMatch){
        storageMatch = JSON.parse(storageMatch);
        state.match = storageMatch;
      }
    },
    DESTROYSTORAGE(){
      localStorage.removeItem('match');
    },
    INSERTHOMETEAM(state, payload){
      state.match.homeTeam = payload;
      localStorage.setItem('match',JSON.stringify(state.match));
    },
    INSERTAWAYTEAM(state, payload){
      state.match.awayTeam = payload;
      localStorage.setItem('match',JSON.stringify(state.match));
    },
    SAVECHAMP(state, payload){
      state.championship = payload;
      localStorage.setItem('championship',JSON.stringify(state.championship));
    },
    LOADCHAMP(state){
      let storageChamp = localStorage.getItem('championship');
      if(storageChamp){
        storageChamp = JSON.parse(storageChamp);
        state.championship = storageChamp;
      }
    },
    SAVEMYTEAM(state, payload){
      state.myTeam = payload;
      localStorage.setItem('myTeam',JSON.stringify(state.myTeam));
    },
    LOADMYTEAM(state){
      let storageMyTeam = localStorage.getItem('myTeam');
      if(storageMyTeam){
        storageMyTeam = JSON.parse(storageMyTeam);
        state.myTeam = storageMyTeam;
      }
    },
    SAVECHAMPGAMES(state, payload){
      state.champGames = payload;
      localStorage.setItem('champGames',JSON.stringify(state.champGames));
    },
    LOADCHAMPGAMES(state){
      let storageChampGames = localStorage.getItem('champGames');
      if(storageChampGames){
        storageChampGames = JSON.parse(storageChampGames);
        state.champGames = storageChampGames; 
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
