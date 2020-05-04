import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SelectTeams from '../views/SelectTeams.vue'
import HomeSelectTatics from '../views/HomeSelectTatics.vue'
import AwaySelectTatics from '../views/AwaySelectTatics.vue'
import Match from '../views/Match.vue'
import GameDay from '../views/GameDay.vue'

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
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
