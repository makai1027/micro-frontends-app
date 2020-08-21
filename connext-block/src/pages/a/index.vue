<style lang='sass' scoped>

</style>
<template lang='pug'>
    div.wrapper 页面a
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            data: Object,
            state: Object,
            msg: String,
            message: String
        },
        beforeCreate() {},
        created() {
            // console.log('父级传过来的state', this.msg, this.data)
            // console.log('父级传过来的data', this.message, this.state)
            // console.log('所有的props', this.$props)
        },
        beforeMount() {},
        mounted() {},
        methods: {}
    }
</script>