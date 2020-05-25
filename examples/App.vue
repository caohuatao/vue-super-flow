<template>
  <div id="app">
    <super-flow
      :menu="menuList">
    </super-flow>
  </div>
</template>

<script>
  import SuperFlow from '../packages/index'


  export default {
    data() {
      return {
        menuList: [
          [
            {
              type: 'start',
              label: '开始节点'
            },
            {
              type: 'end',
              label: '结束节点'
            }
          ],
          [
            {
              type: '',
              label: '竖向对齐'
            },
            {
              type: '',
              label: '横向对齐'
            }
          ]
        ]
      }
    },
    mounted() {
    },
    components: {
      SuperFlow
    }
  }
</script>

<style lang="less">
  html, body {
    width   : 100%;
    height  : 100%;
    margin  : 0;
    padding : 0;
  }

  #app {
    width  : 100%;
    height : 100%;

    > nav {
      float  : left;
      width  : 300px;
      height : 100%;
    }

    > section {
      float  : left;
      width  : calc(100% - 600px);
      height : 100%;
    }
  }
</style>
