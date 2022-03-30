import Vue from 'vue'
import Router from 'vue-router'
import MainWorld from './components/MainWorld.vue'
import MainAdmin from './components/MainAdmin.vue'
import HttpRequest from './components/HttpRequest.vue'
import Custom from './components/CustomTable.vue'
import TemplateString from './components/TemplateString.vue'
import CultureString from './components/CultureString.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/mainadmin', name:MainAdmin, component: MainAdmin},
    { path: '/mainworld', name:MainWorld, component: MainWorld},
    { path: '/httprequest', name:HttpRequest, component: HttpRequest},
    { path: '/custom', name:Custom, component: Custom},
    { path: '/templatestring', name:TemplateString, component: TemplateString},
    { path: '/culturestring', name:CultureString, component: CultureString},
  ]
})
