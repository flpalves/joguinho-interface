import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SelectTeams from '../views/SelectTeams.vue'
import HomeSelectTatics from '../views/HomeSelectTatics.vue'
import AwaySelectTatics from '../views/AwaySelectTatics.vue'
import Match from '../views/Match.vue'
import GameDay from '../views/GameDay.vue'
import NewChampionship from '../views/NewChampionship.vue'
import Fixtures from '../views/Fixtures.vue'
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
    path: '/match',
    name: 'Match',
    component: Match
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
  
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'abstract',
  base: process.env.BASE_URL,
  routes
})

export default router
