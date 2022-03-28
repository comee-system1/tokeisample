import Vue from 'vue'
import Router from 'vue-router'
import MainWorld from './components/MainWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: MainWorld}
  ]
})
