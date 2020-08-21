<style lang="sass">
  .listbtns
    margin-top: 20px
    .item
      margin-bottom: 20px
</style>
<template>
  <div id="app">
    <p class="message">这是父应用传过来的message：{{message}}</p>
    <div class="parent-child-communication">
      <h3>父子应用通信：</h3>
      <div style="margin-bottom: 20px;">
        <span>rxjs通信方案：{{ myMsg }}</span>
        <el-button
          class="right"
          type="primary"
          size="medium"
          @click="callParentChange('rxjs')"
          >通知父应用变天了</el-button
        >
      </div>
      <div>
        <span>官方通信方案：{{ myMessage }}</span>
        <el-button
          class="right"
          type="primary"
          size="medium"
          @click="callParentChange('default')"
          >通知父应用收到</el-button
        >
      </div>
    </div>
    <div class="listbtns">
      <div class="item">
        <span class="tit">点我跳转当前应用的其他页面</span>
        <el-button type='primary' @click="navigate('default')">立即跳转</el-button>
      </div>
      <div class="item">
        <span class="tit">点我跳转其他应用：</span>
        <el-button type='primary' @click="navigate('parent')">立即跳转</el-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: {
    msg: String,
    message: String
  },
  data: () => {
    return {
      myMsg: "",
      myMessage: ""
    }
  },
  created () {
    this.myMsg = this.msg
    this.myMessage = this.message
  },
  methods: {
    navigate(type = 'default') {
      if (type === 'default') {
        const routers = ['/', '/a', '/b', '/c']
        const _cp = this.$route.path
        const _i = Math.floor(Math.random()*3)
        const ot = (routers.filter(el => el !== _cp))
        if (ot[_i] === _cp) return
        this.$router.push({
          path: ot[_i]
        })
      } else {
        this.$mainUtils.routerGo('/main/a');
      }
    },
    callParentChange(type) {
      if (type === "default") {
        this.myMessage = "子应用connext-block收到";
        this.$actions.setGlobalState({
          message: this.myMessage,
          from: "connext-block"
        });
        return;
      }
      this.myMsg = "子应用已通过rxjs收到通知";
      this.$pager.next({
        from: "connext-block",
        token: "子应用已通过rxjs收到通知"
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
