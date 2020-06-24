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
      <template v-slot:node="{meta}">
        <div class="flow-node">
          {{meta.label}}
        </div>
      </template>
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
              label: '节点1',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  vertex: 1,
                  coordinate,
                  meta: {
                    label: '1',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            },
            {
              label: '节点2',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  coordinate,
                  meta: {
                    label: '2',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            },
            {
              label: '节点3',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  coordinate,
                  meta: {
                    label: '3',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            }
          ],
          [
            {
              label: '加入花名册',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  coordinate,
                  meta: {
                    label: '花名册',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            }
          ],
          [
            {
              label: '全选',
              selected: (graph, coordinate) => {
                graph.selectAll()
              }
            },
            {
              label: '垂直',
              selected: (graph, coordinate) => {
                graph.vertical()
              }
            },
            {
              label: '水平',
              selected: (graph, coordinate) => {
                graph.horizontal()
              }
            }
          ]
        ],
        nodeMenu: [
          [
            {
              label: '删除',
              selected: (node, coordinate) => {
                node.remove()
              }
            },
            {
              label: '编辑',
              selected: (node, coordinate) => {
                this.flowNodeClick(node.meta)
              }
            }
          ]
        ],
        linkMenu: [
          [
            {
              label: '删除',
              selected: (link, coordinate) => {
                link.remove()
              }
            }
          ]
        ]
      }
    },
    components: {SuperFlow},
    methods: {
      flowNodeClick(meta) {
        console.log(`编辑 ${meta.label}`)
      }
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

    .super-flow__node {
      .flow-node {
        width       : 100%;
        height      : 100%;
        line-height : 40px;
        padding     : 0 6px;
        font-size   : 12px;
      }
    }
  }
</style>
