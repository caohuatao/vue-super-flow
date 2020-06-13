# vue-super-flow

## Installation



## Example

```vue
<template>
  <div id="app">
    <super-flow
      :graph-menu="graphMenuList"
      :node-menu="nodeMenuList"
      :link-menu="linkMenuList"
      :width="4000"
      :height="3000"
      :origin="[2000, 1500]"
      :enter-intercept="enterIntercept"
      :output-intercept="outputIntercept">
      <template v-slot:node="{meta}">
        <div :class="`flow-node flow-node-${meta.prop}`">
          <header>
            {{meta.name}}
          </header>
          <section></section>
        </div>
      </template>
    </super-flow>
  </div>
</template>

<script>
  import SuperFlow from 'vue-super-flow'

  export default {
    data() {
      return {
        graphMenuList: [
          [
            {
              label: '开始节点',
              disable(graph) {
                return !!graph.nodeList.find(
                  point => point.meta.prop === 'start'
                )
              },
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 100,
                  height: 80,
                  coordinate: coordinate,
                  meta: {
                    prop: 'start',
                    name: '开始节点'
                  }
                })
              }
            },
            {
              label: '审批节点',
              disable: false,
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 200,
                  height: 100,
                  coordinate: coordinate,
                  meta: {
                    prop: 'approval',
                    name: '审批节点'
                  }
                })
              }
            },
            {
              label: '抄送节点',
              disable: false,
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 200,
                  height: 100,
                  coordinate: coordinate,
                  meta: {
                    prop: 'cc',
                    name: '抄送节点'
                  }
                })
              }
            },
            {
              label: '结束节点',
              disable(graph) {
                return !!graph.nodeList.find(point => point.meta.prop === 'end')
              },
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 80,
                  height: 50,
                  coordinate: coordinate,
                  meta: {
                    prop: 'end',
                    name: '结束节点'
                  }
                })
              }
            }
          ],
          [
            {
              label: '竖向对齐',
              selected(graph, coordinate) {}
            },
            {
              label: '横向对齐',
              selected(graph, coordinate) {}
            }
          ]
        ],
        nodeMenuList: [
          [
            {
              label: '删除',
              disable: false,
              hidden(node) {
                return node.meta.prop === 'start'
              },
              selected(node, coordinate) {
                node.remove()
              }
            }
          ]
        ],
        linkMenuList: [
          [
            {
              label: '删除',
              disable: false,
              selected(link, coordinate) {
                link.remove()
              }
            }
          ]
        ]
      }
    },
    components: {
      SuperFlow
    },
    methods: {
      enterIntercept(formNode, toNode, graph) {
        const formType = formNode.meta.prop
        switch (toNode.meta.prop) {
          case 'start':
            return false
          case 'approval':
            return [
              'start',
              'approval',
              'cc'
            ].includes(formType)
          case 'end':
            return [
              'approval',
              'cc'
            ].includes(formType)
          default:
            return true
        }
      },
      outputIntercept(node, graph) {
        return true
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
        > header {
          font-size   : 14px;
          height      : 32px;
          line-height : 32px;
          padding     : 0 12px;
          color       : #ffffff;

        }

        &.flow-node-start {
          > header {
            background-color : #55abfc;
          }
        }

        &.flow-node-approval {
          > header {
            background-color : rgba(188, 181, 58, 0.76);
          }
        }

        &.flow-node-cc {
          > header {
            background-color : #30b95c;
          }
        }

        &.flow-node-end {
          > header {
            height           : 50px;
            line-height      : 50px;
            background-color : rgb(0, 0, 0);
          }
        }
      }
    }
  }

</style>

```


## 一、Attributes


##### nodeMenu

##### graphMenu

##### linkMenu

##### nodeList

##### linkList

##### enterIntercept

##### outputIntercept

##### width

##### height

##### origin



## Events


