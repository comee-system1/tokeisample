import Vue from 'vue'
import Router from 'vue-router'
import MainWorld from './components/MainWorld.vue'
import MainAdmin from './components/MainAdmin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/mainadmin', name:MainAdmin, component: MainAdmin},
    { path: '/mainworld', name:MainWorld, component: MainWorld}
  ]
})
