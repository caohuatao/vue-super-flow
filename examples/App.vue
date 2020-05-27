<template>
  <div id="app">
    <super-flow
      :menu-list="superFlowConf.menuList"
      @menu-item-select="menuItemSelect">
    </super-flow>
  </div>
</template>

<script>
  import SuperFlow from '../packages/index'


  export default {
    data() {
      return {
        superFlowConf: {
          menuList: [
            [
              {
                prop: 'start',
                label: '开始节点',
                disable(graph) {
                 return  Boolean(graph.pointList.find(point => point.meta.prop === 'start'))
                }
              },
              {
                prop: 'end',
                label: '结束节点',
                disable(graph) {
                  return  Boolean(graph.pointList.find(point => point.meta.prop === 'end'))
                }
              }
            ],
            [
              {
                prop: 'vertical',
                label: '竖向对齐'
              },
              {
                type: 'horizontal',
                label: '横向对齐'
              }
            ]
          ]
        }
      }
    },
    mounted() {
    },
    methods: {
      menuItemSelect({meta, position, createPoint}) {
        createPoint()
      }
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
