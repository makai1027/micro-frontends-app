/**
 * 路由监听
 * @param {String} routerPrefix 路由前缀
 */
function routerActive(routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix);
  }
  
  
  export {
    routerActive
  }