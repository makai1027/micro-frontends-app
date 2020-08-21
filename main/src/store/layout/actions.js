import cookie from '@/common/utils/cookie'
import local from '@/common/utils/local'
import menu from '@/mock'
import Conf from '@/config'
export default {
    setCollage({ commit }, bol) {
        commit('TOGGLE_COLLAGE', bol)
    },
    setMenu({ commit }, data) {
        commit('SET_MENU', data)
    },
    setToken({ commit }, key) {
        commit('SET_TOKEN', key)
    },
    setSigned({ commit }, data) {
        commit('SET_SIGNED', data)
    },
    layout({ commit }) {
        commit('SET_SIGNED', false)
        commit('SET_TOKEN', '')
        commit('SET_MENU', [])
        cookie.remove(Conf.baseKey['token'])
        local.remove(Conf.baseKey['menu'])
    },
    loginIn({ commit }, data) {
        return new Promise((resolve, reject) => {
            if (data && data.username && data.password) {
                commit('SET_TOKEN', 'wahahaha')
                commit('SET_MENU', menu)
                cookie.set(Conf.baseKey['token'], { token: 'wahahaha', expires: 1 })
                local.set(Conf.baseKey['menu'], menu)
                resolve(menu)
            } else {
                reject("用户名密码不存在")
            }
        })
    }
}