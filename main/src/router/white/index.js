/**
 * author 马凯
 * 本地路由白名单
 **/  
export default [
    { path: '/', redirect: '/index' },
    { path: '/index', component: () => import('@/pages/home') },
    { path: '/404', component: () => import('@/layout/error/404') },
    { path: '/401', component: () => import('@/layout/error/401') },
    { path: '/login', component: () => import('@/layout/login') },
    // { path: '*', redirect: '/404', hidden: true }
]