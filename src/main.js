import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


/*game engines methods*/
import GameEngine from "@/engine/Engine.js";
Vue.prototype.$GameEngine = GameEngine.GameEngine;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
