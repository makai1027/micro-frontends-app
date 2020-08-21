import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    component: () => import('@/components/HelloWorld'),
    name: '欢迎页',
    meta: {
        icon: '',
        name: '欢迎页'
    },
    path: '/'
}]

export default routes;
