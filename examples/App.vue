<template>
  <div id="app">
    <super-flow
      :graph-menu="graphMenuList"
      :node-menu="nodeMenuList">
      <template v-slot:node="{node}">
        <div>{{node.meta.prop}}</div>
        <div>{{node.width}}</div>
        <div>{{node.position}}</div>
      </template>
    </super-flow>
  </div>
</template>

<script>
  import SuperFlow from '../packages/index'

  export default {
    data() {
      return {
        graphMenuList: [
          [
            {
              prop: 'start',
              label: '开始节点',
              disable(graph) {
                return Boolean(
                  graph.pointList.find(point => point.meta.prop === 'start')
                )
              },
              selected(graph, position) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 80,
                  height: 80,
                  position: position,
                  meta: {
                    prop: 'start'
                  }
                })
              }
            },
            {
              prop: 'approval',
              label: '审批节点',
              disable: false,
              selected(graph, position) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 180,
                  height: 100,
                  position: position,
                  meta: {
                    prop: 'approval'
                  }
                })
              }
            },
            {
              prop: 'end',
              label: '结束节点',
              disable(graph) {
                return Boolean(
                  graph.pointList.find(point => point.meta.prop === 'end')
                )
              },
              selected(graph, position) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 80,
                  height: 80,
                  position: position,
                  meta: {
                    prop: 'end'
                  }
                })
              }
            }
          ],
          [
            {
              prop: 'vertical',
              label: '竖向对齐',
              selected(graph, position) {}
            },
            {
              type: 'horizontal',
              label: '横向对齐',
              selected(graph, position) {}
            }
          ]
        ],
        nodeMenuList: [
          [
            {
              prop: 'remove',
              label: '删除',
              disable: false,
              hidden(node) {
                return node.meta.prop === 'start'
              },
              selected(node, position) {
                node.remove()
              }
            }
          ]
        ]
      }
    },
    mounted() {
    },
    methods: {},
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
