<style lang='sass' scoped>

</style>
<template lang='pug'>
    div.wrapper
        el-calendar
            template(slot="dateCell", slot-scope="{date, data}")
                p(:class="data.isSelected ? 'is-selected' : ''") {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
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
        methods: {}
    }
</script>