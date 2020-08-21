import pager from '@/common/utils/broadcast'
import store from "@/store";
import childEmit from '@/common/utils/childEmit'
import { routerActive } from '@/common/utils/routerActive'
import * as parentUtils from '@/common/utils/index'
import Conf from '@/config'
// 导入乾坤函数
import {
    registerMicroApps, // 注册子应用方法
    setDefaultMountApp, // 设默认启用的子应用
    runAfterFirstMounted, // 有个子应用加载完毕回调
    start, // 启动qiankun
    addGlobalUncaughtErrorHandler, // 添加全局未捕获异常处理器
    initGlobalState, // 官方应用间通信
} from 'qiankun'
const isPro = process.env.NODE_ENV === 'production'
// 导入应用间通信介质：呼机
let msg = {
    data: store&&store.getters || {}, // 从主应用仓库读出的数据
    components: {}, // 从主应用读出的组件库
    utils: parentUtils, // 从主应用读出的工具类库
    emitFnc: childEmit, // 从主应用下发emit函数来收集子应用反馈
    pager, // 从主应用下发应用间通信呼机
    state: {
        message: "主应用的props",
        time: +new Date(),
        from: ""
    }
};

// 在主应用注册呼机
pager.subscribe(v => {
    console.log(`父级应用监听到子应用${v.from}发来消息：`, v)
    store.dispatch('setToken', v.token)
});
// 在主应用注册官方通信方案
const actions = initGlobalState(msg.state);
// 注册消息监听函数
actions.onGlobalStateChange((state, prev) => console.log(`主应用应用监听到来自${state.from}发来消息：`, state, prev));
actions.setGlobalState(msg.state);
actions.offGlobalStateChange();

const initSubApp = (menus = []) => {
    if (!menus || !Array.isArray(menus) || !menus.length) {
        throw new Error('接口没有菜单导入，无法创建子应用，请联系后端')
    }

    let defaultApp = null
    let subApps = []
    const data = (menus.filter(el => el.module !== Conf.mainApp))
    if (!data.length) return
    for (let k = 0; k < data.length; k++) {
        const el = data[k];
        if (el.defaultRegister) {
            defaultApp = el.path
        }
        subApps.push({
            name: el.module,
            entry: isPro ? el.proEntry : el.devEntry,
            container: '#app-main-wrapper',
            activeRule: routerActive(el.path),
            props: { ...msg, ROUTES: el.children, routerBase: el.path, actions }
        })   
    }
    console.log(subApps, 'subAppList')
    // return
    registerMicroApps(subApps, {
        beforeLoad: [
            app => {
                console.log("before load", app);
            }
        ],
        beforeMount: [
            app => {
                console.log("before mount", app);
            }
        ],
        afterUnmount: [
            app => {
                console.log("after unload", app);
            }
        ]
    })
    // 设置默认子应用
    if (!defaultApp) defaultApp = subApps[0].path
    // setDefaultMountApp(defaultApp);
    // 第一个子应用加载完毕回调
    runAfterFirstMounted((app) => {
        console.log(app)
    });
    // 启动微服务
    start();
    // 设置全局未捕获一场处理器
    addGlobalUncaughtErrorHandler(event => console.log(event));
}
export default initSubApp