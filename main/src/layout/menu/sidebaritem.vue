<style lang='sass' scoped>

</style>
<template lang='pug'>
    div.wrapper
        template(v-for='el in routes', v-if='!el.hidden&&el.children && el.children.length')
            el-menu-item(v-if='hasOneShowingChildren(el.children) && !el.children[0].children', :index="el.path+el.children[0].path", :key='el.children[0].name', @click="goToUrl(el.module, el.path, el.children[0].path)")
                span(v-if="el.children[0].meta&&el.children[0].meta.icon" :class="el.children[0].meta.icon")
                span(v-if="el.children[0].meta&&el.children[0].name" slot="title") {{el.children[0].name}}
            el-submenu(v-else :index="el.name||el.path" :key="el.name")
                template(slot='title')
                    span(v-if="el.meta&&el.meta.icon" :class="el.meta.icon")
                    span(v-if="el.meta&&el.name" slot="title") {{el.name}}
                template(v-for="child in el.children" v-if="!child.hidden")
                    el-menu-item(:index="el.path+child.path", :key="child.name", @click="goToUrl(el.module, el.path, child.path)")
                        span(v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon")
                        span(v-if="child.meta&&child.name" slot="title") {{child.name}}
</template>

<script>
    import { routerGo } from '@/common/utils/index'
    import Conf from '@/config'
    import _ from 'lodash'
    let ME = null
    export default {
        props: {
            routes: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                
            }
        },
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {
            ME = this
        },
        methods: {
            hasOneShowingChildren(children) {
                const showingChildren = children.filter(item => {
                    return !item.hidden
                })
                if (showingChildren.length === 1) {
                    return true
                }
                return false
            },
            goToUrl: _.debounce((title, herf, shref) => {
                if (title.includes(Conf.mainApp)) {
                    ME.$router.push({
                        path: herf+shref
                    })
                    return
                }
                routerGo(herf + shref, title)
            }, 300)
        }
    }
</script>