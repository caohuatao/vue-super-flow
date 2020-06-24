<!--
 * User: CHT
 * Date: 2020/6/24
 * Time: 17:11
-->
<template>
  <div id="app">
    <super-flow
      :width="1000"
      :height="800"
      :graph-menu="graphMenu"
      :node-menu="nodeMenu"
      :link-menu="linkMenu">
    </super-flow>
  </div>
</template>

<script>
  import SuperFlow from '../packages/index'

  export default {
    data() {
      return {
        graphMenu: [
          [
            {
              label: '添加节点',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  vertex: 1,
                  coordinate,
                  meta: {}
                })
              }
            }
          ]
        ],
        nodeMenu: [
          [
            {
              label: '删除',
              selected(node, coordinate) {
                node.remove()
              }
            }
          ]
        ],
        linkMenu: [
          [
            {
              label: '删除',
              selected(link, coordinate) {
                link.remove()
              }
            }
          ]
        ]
      }
    },
    components: {SuperFlow}
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

    .super-flow__node {
      .flow-node {
      }
    }
  }
</style>
