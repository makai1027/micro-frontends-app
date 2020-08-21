<style lang='sass' scoped>
    @import '@/common/sass/variable.sass'
    .wrapper
        width: 100%
        height: $header-height
        background: $menuBg
        color: white
        font-size: 30px
        line-height: $header-height
        .el-header
            display: flex
            align-items: center
            p
                flex: 1
</style>
<template lang='pug'>
    div.wrapper 
        el-header
            p 主应用的App header
            el-button(size='small',type='primary',@click='layout') 退出

</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {
            layout() {
                this.$store.dispatch('layout').then(() => {
                    this.$router.replace('/login')
                })
            }
        }
    }
</script>