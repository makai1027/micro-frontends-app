import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout'
import subapp from './subEmit'
import Logger from 'vuex/dist/logger'
import getters from './getters'

Vue.use(Vuex)

const debuger = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    namespaced: true,
    modules: {
        layout,
        subapp
    },
    getters,
    strict: false,
    plugins: debuger ? [Logger()] : []
})