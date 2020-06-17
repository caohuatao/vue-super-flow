<!--
 * User: CHT
 * Date: 2020/5/27
 * Time: 9:52
-->
<template>
  <div id="app">
    <super-flow
      :node-list="nodeList"
      :link-list="linkList"
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
  import SuperFlow from '../packages/index'

  export default {
    data() {
      return {
        graphMenuList: [
          [
            {
              label: '开始节点',
              disable(graph) {
                return !!graph.nodeList.find(node => node.meta.prop === 'start')
              },
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 100,
                  height: 80,
                  coordinate: coordinate,
                  vertex: true,
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
              label: '垂直对齐',
              selected(graph, coordinate) {
                graph.vertical()
              }
            },
            {
              label: '水平对齐',
              selected(graph, coordinate) {
                graph.horizontal()
              }
            }
          ],
          [
            {
              label: '打印数据',
              selected(graph, coordinate) {
                console.log(JSON.stringify(graph.toJSON(), null, 2))
              }
            },
            {
              label: '选中所有',
              selected(graph, coordinate) {
                graph.selectAll()
              }
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
        ],
        nodeList: [
          {
            'id': '0.efnsmp46b5o',
            'vertex': 0,
            'width': 200,
            'height': 100,
            'coordinate': [
              -204,
              -391
            ],
            'meta': {
              'prop': 'approval',
              'name': '审批节点'
            }
          },
          {
            'id': '0.0v0h61jdbmo',
            'vertex': 0,
            'width': 200,
            'height': 100,
            'coordinate': [
              -196,
              -247
            ],
            'meta': {
              'prop': 'approval',
              'name': '审批节点'
            }
          },
          {
            'id': '0.f6a3gt4j1c',
            'vertex': 0,
            'width': 200,
            'height': 100,
            'coordinate': [
              -188,
              -105
            ],
            'meta': {
              'prop': 'approval',
              'name': '审批节点'
            }
          },
          {
            'id': '0.p51pjul7l7o',
            'vertex': 0,
            'width': 200,
            'height': 100,
            'coordinate': [
              61,
              -376
            ],
            'meta': {
              'prop': 'cc',
              'name': '抄送节点'
            }
          },
          {
            'id': '0.e4cjvkamf1',
            'vertex': 0,
            'width': 200,
            'height': 100,
            'coordinate': [
              70,
              -211
            ],
            'meta': {
              'prop': 'cc',
              'name': '抄送节点'
            }
          },
          {
            'id': '0.ghl6ar1lf5g',
            'vertex': 1,
            'width': 100,
            'height': 80,
            'coordinate': [
              -395,
              -212
            ],
            'meta': {
              'prop': 'start',
              'name': '开始节点'
            }
          },
          {
            'id': '0.qqtd0ckfmn8',
            'vertex': 0,
            'width': 80,
            'height': 50,
            'coordinate': [
              340,
              -306
            ],
            'meta': {
              'prop': 'end',
              'name': '结束节点'
            }
          }
        ],
        linkList: [
          {
            'startId': '0.0v0h61jdbmo',
            'endId': '0.e4cjvkamf1',
            'startAt': [
              200,
              71
            ],
            'endAt': [
              0,
              58
            ],
            'meta': null
          },
          {
            'startId': '0.f6a3gt4j1c',
            'endId': '0.e4cjvkamf1',
            'startAt': [
              200,
              42
            ],
            'endAt': [
              0,
              67
            ],
            'meta': null
          },
          {
            'startId': '0.ghl6ar1lf5g',
            'endId': '0.0v0h61jdbmo',
            'startAt': [
              100,
              40
            ],
            'endAt': [
              0,
              60
            ],
            'meta': null
          },
          {
            'startId': '0.ghl6ar1lf5g',
            'endId': '0.f6a3gt4j1c',
            'startAt': [
              100,
              41
            ],
            'endAt': [
              0,
              42
            ],
            'meta': null
          },
          {
            'startId': '0.ghl6ar1lf5g',
            'endId': '0.efnsmp46b5o',
            'startAt': [
              100,
              29
            ],
            'endAt': [
              0,
              85
            ],
            'meta': null
          },
          {
            'startId': '0.efnsmp46b5o',
            'endId': '0.p51pjul7l7o',
            'startAt': [
              200,
              63
            ],
            'endAt': [
              0,
              51
            ],
            'meta': null
          },
          {
            'startId': '0.p51pjul7l7o',
            'endId': '0.qqtd0ckfmn8',
            'startAt': [
              200,
              66
            ],
            'endAt': [
              0,
              25
            ],
            'meta': null
          },
          {
            'startId': '0.e4cjvkamf1',
            'endId': '0.qqtd0ckfmn8',
            'startAt': [
              200,
              41
            ],
            'endAt': [
              0,
              36
            ],
            'meta': null
          }
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
