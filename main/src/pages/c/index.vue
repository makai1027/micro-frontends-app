<style lang='sass' scoped>
    .infinite-list
        height: 300px
        padding: 0
        margin: 0
        list-style: none
        .infinite-list-item
            display: flex
            align-items: center
            justify-content: center
            height: 50px
            background: #e8f3fe
            margin: 10px
            color: #7dbcfc
</style>
<template lang='pug'>
    ul(class="infinite-list" v-infinite-scroll="load" style="overflow:auto")
        li.infinite-list-item(v-for="i in count") 我是分身{{i}}
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
</script>