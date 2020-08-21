<style lang='sass' scoped>
    .wrapper
        position: fixed
        left: 0
        top: 0
        z-index: 1001
        background: white
        width: 100%
        height: 100%
        background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')
        background-size: cover
        display: flex
        align-items: center
        .el-card
            width: 700px
            height: 360px
            margin: 0 auto
            .left,.right
                display: inline-block
                width: 50%
                height: 320px
                vertical-align: top
            .left
                padding-top: 50px
                text-align: center
                .logo
                    width: 150px
                .desc
                    line-height: 4
                    font-size: 18px
            .right
                .title
                    line-height: 4
                    font-size: 22px
                    text-align: center
</style>
<template lang='pug'>
    div.wrapper
        el-card(shadow='always')
            .left 
                img.logo(src='@/assets/logo.png')
                .desc 联蔚科技微前端

            .right
                .title 联蔚科技微前端
                el-form(:rules='rules',ref='form',:model='formdata',label-width='80px')
                    el-form-item(label='账号：',prop='username')
                        el-input(maxlength='20', clearable, placeholder='请输入用户名',v-model='formdata.username')
                    el-form-item(label='密码：',prop='password')
                        el-input(maxlength='20', type='password',clearable, placeholder='请输入密码',v-model='formdata.password')
                    el-form-item()
                        el-button(:loading="loading",type='primary',@click='submitData') 立即登录
</template>

<script>
    export default {
        data() {
            return {
                formdata: {
                    username: 'admin',
                    password: 'admin'
                },
                rules: {
                    username:[{trigger: 'blur', required: true, message:'请输入用户名'}],
                    password:[{trigger: 'blur', required: true, message:'请输入密码'}]
                },
                loading: false
            }
        },
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        methods: {
            submitData() {
                this.$refs.form.validate(valid => {
                    if(valid) {
                        this.loading = true
                        this.$store.dispatch('loginIn', this.formdata).then(() => {
                            this.loading = false
                            this.$router.push({ path: '/' })
                        }).catch(() => {
                            console.log('errrr')
                            this.loading = false
                        })
                    }
                })
            }
        }
    }
</script>