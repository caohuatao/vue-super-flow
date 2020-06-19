# vue-super-flow

## Installation

```npm

npm install vue-super-flow

yran add vue-spuer-flow

```



## Example

```js

import SuperFlow from 'vue-super-flow'
import "vue-super-flow/index.css"

Vue.use(SuperFlow)

```

```vue
<!--
 * User: CHT
 * Date: 2020/5/27
 * Time: 9:52
-->
<template>
  <div id="app">
    <super-flow
      ref="superFlow"
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
  export default {
    data() {
      return {
        nodeList: [
          {
            'id': 'nodeni9QOqT3mI7hsMau',
            'width': 200,
            'height': 100,
            'vertex': 0,
            'coordinate': [
              -442,
              -283
            ],
            'meta': {
              'prop': 'condition',
              'name': '条件节点'
            }
          },
          {
            'id': 'node7WXbwOR6kSFD53Hf',
            'width': 200,
            'height': 100,
            'vertex': 0,
            'coordinate': [
              -442,
              -133
            ],
            'meta': {
              'prop': 'condition',
              'name': '条件节点'
            }
          },
          {
            'id': 'nodeG3WeFnzCI15X58Qw',
            'width': 200,
            'height': 100,
            'vertex': 0,
            'coordinate': [
              -442,
              17
            ],
            'meta': {
              'prop': 'condition',
              'name': '条件节点'
            }
          },
          {
            'id': '0.ghl6ar1lf5g',
            'width': 100,
            'height': 80,
            'vertex': 1,
            'coordinate': [
              -642,
              -123
            ],
            'meta': {
              'prop': 'start',
              'name': '开始节点'
            }
          },
          {
            'id': 'nodeZBK0ZPpgMe1exezE',
            'width': 200,
            'height': 100,
            'vertex': 0,
            'coordinate': [
              -142,
              -283
            ],
            'meta': {
              'prop': 'approval',
              'name': '审批节点'
            }
          },
          {
            'id': 'nodefHsy9uJObPtdHZv1',
            'width': 200,
            'height': 100,
            'vertex': 0,
            'coordinate': [
              -142,
              -133
            ],
            'meta': {
              'prop': 'approval',
              'name': '审批节点'
            }
          },
          {
            'id': 'node0aiA9VuhjkiAdZCs',
            'width': 200,
            'height': 100,
            'vertex': 0,
            'coordinate': [
              -142,
              17
            ],
            'meta': {
              'prop': 'approval',
              'name': '审批节点'
            }
          },
          {
            'id': 'nodeqkK9zjcDz53xKRlK',
            'width': 200,
            'height': 100,
            'vertex': 0,
            'coordinate': [
              158,
              -208
            ],
            'meta': {
              'prop': 'cc',
              'name': '抄送节点'
            }
          },
          {
            'id': 'nodeDhVU6w2KbEnJCjZs',
            'width': 80,
            'height': 50,
            'vertex': 0,
            'coordinate': [
              458,
              -108
            ],
            'meta': {
              'prop': 'end',
              'name': '结束节点'
            }
          },
          {
            'id': 'nodesyxisLH1hJDdPsxx',
            'width': 200,
            'height': 100,
            'vertex': 0,
            'coordinate': [
              158,
              -58
            ],
            'meta': {
              'prop': 'cc',
              'name': '抄送节点'
            }
          }
        ],
        linkList: [
          {
            'id': 'linkQfGI6apBdZm4qHe3',
            'startId': '0.ghl6ar1lf5g',
            'endId': 'nodeni9QOqT3mI7hsMau',
            'startAt': [
              100,
              40
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'linkJalC4dAzpQfu5WMi',
            'startId': '0.ghl6ar1lf5g',
            'endId': 'node7WXbwOR6kSFD53Hf',
            'startAt': [
              100,
              40
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'linkjUVmbLfRhxPfFISJ',
            'startId': '0.ghl6ar1lf5g',
            'endId': 'nodeG3WeFnzCI15X58Qw',
            'startAt': [
              100,
              40
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'linkP3zJNvSKHutesZs4',
            'startId': 'nodeni9QOqT3mI7hsMau',
            'endId': 'nodeZBK0ZPpgMe1exezE',
            'startAt': [
              200,
              50
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'linkYlzpeKssBYwxQdLr',
            'startId': 'node7WXbwOR6kSFD53Hf',
            'endId': 'nodefHsy9uJObPtdHZv1',
            'startAt': [
              200,
              50
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'linkOwoUKiipYyVz3CYT',
            'startId': 'nodeG3WeFnzCI15X58Qw',
            'endId': 'node0aiA9VuhjkiAdZCs',
            'startAt': [
              200,
              50
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'link3UhFce4rO4TfAL2K',
            'startId': 'nodeZBK0ZPpgMe1exezE',
            'endId': 'nodeqkK9zjcDz53xKRlK',
            'startAt': [
              200,
              50
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'linkMjaKIDuDfbgqSHoz',
            'startId': 'nodefHsy9uJObPtdHZv1',
            'endId': 'nodeqkK9zjcDz53xKRlK',
            'startAt': [
              200,
              50
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'linkdUBf9aeOoXR3X65Y',
            'startId': 'node0aiA9VuhjkiAdZCs',
            'endId': 'nodesyxisLH1hJDdPsxx',
            'startAt': [
              200,
              50
            ],
            'endAt': [
              0,
              50
            ],
            'meta': null
          },
          {
            'id': 'link02lGIqBJZWrTlCFv',
            'startId': 'nodeqkK9zjcDz53xKRlK',
            'endId': 'nodeDhVU6w2KbEnJCjZs',
            'startAt': [
              200,
              50
            ],
            'endAt': [
              0,
              25
            ],
            'meta': null
          },
          {
            'id': 'link3i9b2ZsNM8wyjRop',
            'startId': 'nodesyxisLH1hJDdPsxx',
            'endId': 'nodeDhVU6w2KbEnJCjZs',
            'startAt': [
              200,
              50
            ],
            'endAt': [
              0,
              25
            ],
            'meta': null
          }
        ],
        graphMenuList: [
          [
            {
              label: '开始节点',
              disable(graph) {
                return !!graph.nodeList.find(node => node.meta.prop === 'start')
              },
              selected: (graph, coordinate) => {
                graph.addNode({
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
              label: '条件节点',
              disable: false,
              selected: (graph, coordinate) => {
                graph.addNode({
                  width: 200,
                  height: 100,
                  coordinate: coordinate,
                  meta: {
                    prop: 'condition',
                    name: '条件节点'
                  }
                })
              }
            },
            {
              label: '审批节点',
              disable: false,
              selected: (graph, coordinate) => {
                graph.addNode({
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
              selected: (graph, coordinate) => {
                graph.addNode({
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
              selected: (graph, coordinate) => {
                graph.addNode({
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
              selected: (graph, coordinate) => {
                graph.vertical()
              }
            },
            {
              label: '水平对齐',
              selected: (graph, coordinate) => {
                graph.horizontal()
              }
            }
          ],
          [
            {
              label: '打印数据',
              selected: (graph, coordinate) => {
                console.log(graph.toJSON())
                // console.log(this.$refs.superFlow.toJSON())
              }
            },
            {
              label: '选中所有',
              selected: (graph, coordinate) => {
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
        ]
      }
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
              'condition',
              'cc'
            ].includes(formType)
          case 'condition':
            return [
              'start',
              'approval',
              'condition',
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
        return !(node.meta.prop === 'end')
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

        &.flow-node-condition {
          > header {
            background-color : #BC1D16;
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

## Attributes


### nodeList:


### linkList:


### graphMenu:


### nodeMenu:

### 
