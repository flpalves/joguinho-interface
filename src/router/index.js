import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SelectTeams from '../views/SelectTeams.vue'
import HomeSelectTatics from '../views/HomeSelectTatics.vue'
import AwaySelectTatics from '../views/AwaySelectTatics.vue'
import Friendly from '../views/Friendly.vue'
import ChampionshipGame from '../views/ChampionshipGame.vue'
import GameDay from '../views/GameDay.vue'
import RoundDay from '../views/RoundDay.vue'
import NewChampionship from '../views/NewChampionship.vue'
import Fixtures from '../views/Fixtures.vue'
import NextRound from '../views/NextRound.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select-teams',
    name: 'SelectTeams',
    component: SelectTeams
  },
  {
    path: '/home-team-tatics',  
    name: 'HomeTeamTatics',
    component: HomeSelectTatics
  },
  {
    path: '/away-team-tatics',
    name: 'AwayTeamTatics',
    component: AwaySelectTatics
  },
  {
    path: '/friendly',
    name: 'Friendly',
    component: Friendly 
  },
  {
    path: '/match',
    name: 'ChampionshipGame',
    component: ChampionshipGame
  },
  {
    path: '/gameday',
    name: 'GameDay',
    component: GameDay
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/new-championship',
    name: 'NewChampionship',
    component: NewChampionship
  },
  {
    path: '/fixtures',
    name: 'Fixtures',
    component: Fixtures
  },
  {
    path: '/next-round',
    name: 'NextRound',
    component: NextRound
  },
  {
    path: '/round-day',
    name: 'RoundDay',
    component: RoundDay
  },
  
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'abstract',
  base: process.env.BASE_URL,
  routes
})

export default router
