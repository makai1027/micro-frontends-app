import Vue from 'vue'
import VueRouter from 'vue-router'
import WhiteList from './white'
Vue.use(VueRouter)

const routes = [
    ...WhiteList
]

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})