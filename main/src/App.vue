<style lang='sass' scoped>
    @import '@/common/sass/variable.sass'
    #root
        height: 100%
        overflow: hidden
        #root-content
            height: calc(100% - 60px)
            overflow: hidden
            .app-main
                display: inline-block
                width: calc(100% - 180px)
                height: 100%
                margin-left: 180px
                padding: 20px
                box-sizing: border-box
            &.hideSidebar
                .app-main
                    width: calc(100% - 36px)
                    margin-left: 36px

</style>
<template lang='pug'>
    #root
        c-header
        #root-content(:class='collage ? "hideSidebar":""')
            c-menu.sidebar-container
            section(class='app-main')
                div(id='app-main-wrapper')
                router-view
                
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        components: {
            cHeader: () => import('@/layout/header'),
            cMenu: () => import('@/layout/menu'),
            // content: () => import('./content')
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters(['collage'])  
        },
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {}
    }
</script>
<style>
#root {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    overflow: hidden;
}
html, body {
    width: 100%;
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
}

</style>