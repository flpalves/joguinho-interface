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
      fixtures:[
        {
          games:[
            {
              homeTeam :{}, //club object
              awayTeam :{}, //club object
            }
          ],
          standingAfterRound:{} //standing object
        }
      ],
      standings:{
        teams:[
          {
            position : '',
            matchs : '',
            won : '',
            lost : '',
            drawn : '',
            percentage : '',
            goalsFor : '',
            goalsAgainst : '',
            points : '',
            form: [
              {
                adversario : {},
                result : '',
                scoreboard:{}
              } 
            ],
            team : {}  // club object
            
          }
        ],
        round:''
      }
    }
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
    SAVEFIXTURE(){},
    LOADFIXTUREBYROUND(){},
    LOADFIXURE(){},
    SAVESTANDINGS(){},
    LOADSTANDINGS(){},
    LOADSTANDINGSBYROUND(){}
  },
  actions: {
  },
  modules: {
  }
})
