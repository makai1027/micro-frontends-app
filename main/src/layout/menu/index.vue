<style lang='sass' scoped>

</style>
<template lang='pug'>
    el-scrollbar(wrapClass="scrollbar-wrapper")
        el-menu(mode="vertical"
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="collage"
            background-color="#304156"
            text-color="#bfcbd9")
            sidebar-item(:routes="menu")
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        components: {
            sidebarItem: () => import('./sidebaritem')
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters(['menu', 'collage'])
        },
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {}
    }
</script>