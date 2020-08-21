import Conf from '@/config'
const loadView = view => {
    if (view.includes('layout')) {
        return
    }
    return () => import(`@/pages/${view}/index.vue`)
}

export const filterRouter = routers => {
    if (routers && Array.isArray(routers) && routers.length) {
        return routers.map(el => {
            el.path = '/' + Conf.mainApp + el.path
            if (el.component) {
                el.component = loadView(el.component)
            }
            if (el.children && el.children.length) {
                el.children = filterRouter(el.children)
            }
            return el
        })
    } else {
        return []
    }
}