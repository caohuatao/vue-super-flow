<!--
 * User: CHT
 * Date: 2020/6/28
 * Time: 17:48
-->
<template>
  <div class="super-flow-demo1">
    <super-flow
      ref="superFlow"
      :width="1000"
      :height="800"
      :graph-menu="graphMenu"
      :node-menu="nodeMenu"
      :link-menu="linkMenu">
      <template v-slot:node="{meta}">
        <div
          class="flow-node">
          {{meta.label}}
        </div>
      </template>
    </super-flow>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        graphMenu: [
          [
            {
              label: '节点1',
              disable(graph) {
                return !!graph.nodeList.find(node => node.meta.label === '1')
              },
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
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
              label: '节点4',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  coordinate,
                  meta: {
                    label: '4',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            }
          ],
          [
            {
              label: '全选',
              selected: graph => {
                graph.selectAll()
              }
            }
          ]
        ],
        nodeMenu: [
          [
            {
              label: '删除',
              selected: node => {
                node.remove()
              }
            },
            {
              label: '编辑',
              selected: node => {
                this.flowNodeClick(node.meta)
              }
            }
          ]
        ],
        linkMenu: [
          [
            {
              label: '删除',
              selected: link => {
                link.remove()
              }
            }
          ]
        ]
      }
    },
    methods: {
      flowNodeClick(meta) {
        console.log(`编辑 ${meta.label}`)
      }
    }
  }
</script>

<style lang="less">
  .super-flow-demo1 {
    width    : 100%;
    height   : auto;
    margin   : 0 auto;
    overflow : auto;

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
