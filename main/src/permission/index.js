import router from '@/router'
import npg from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入
import store from '@/store'
import cookie from '@/common/utils/cookie'
import Conf from '@/config'
import local from '@/common/utils/local'
import { filterRouter } from '@/common/utils/filterRouter'
import initSubApp from '@/permission/initSubApp'

/**
 * 由于菜单是由系统配置的，router部分只做token的检查
 **/
router.beforeEach((to, from, next) => {
    npg.start()
    // next()
    const token = cookie.get(Conf.baseKey['token']) || ''
    if (token) {
        if (to.path === '/login') {
            next({ path: '/index', replace: true })
            return
        }
        const menu = local.get(Conf.baseKey['menu']) || []
        if (!menu || !menu.length) {
            cookie.remove(Conf.baseKey['token'])
            next('/login')
        } else {
            if (!store.getters.menu || !store.getters.menu.length) {
                store.dispatch('setMenu', menu)
            }
            console.log(to.path, '0000-----00000')
            // 有cookie 但是没有state说明刷新了
            if (!store.getters.hasSigned) {
                const _m = menu.filter(el => el.module === 'main')
                const list = filterRouter(_m[0].children)
                router.addRoutes(list)
                initSubApp(menu)
                store.dispatch('setSigned', true).then(() => {
                    if (!to.path.includes(Conf.mainApp)) {
                        npg.done()
                    }
                    next()
                })
                
            } else {
                next()
            }
        }
    } else {
        if (to.path === '/login') {
            next({replace: true})
        } else {
            if (to.path === '/404') {
                next()
            } else {
                next({ path: '/login', replace: true })
            }
        }
    }
})

router.afterEach( () => {
    npg.done()
})