<style lang='sass' scoped>

</style>
<template lang='pug'>
    div.wrapper 主页面
        el-button(@click='change') click
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
            change() {
                window.history.pushState({}, '子应用', '/block');
                return
                this.$router.push({
                    path: '/main/a'
                })
            }
        }
    }
</script>