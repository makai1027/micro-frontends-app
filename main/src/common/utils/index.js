function routerGo(href = '/', title = null, stateObj = {}) {
    window.history.pushState(stateObj, title, href);
}

export {
    routerGo // 跨应用路由跳转
}