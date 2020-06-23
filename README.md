


# vue-super-flow

vue-super-flow 是一款快速方便实现流程图的 vue 插件。Demo地址 ：https://caohuatao.github.io/demo/；
Vue-super-flow is a quick and convenient Vue plug-in to realize flow chart. Demo address: https://caohuatao.github.io/demo/ ;

## Installation

```npm

npm install vue-super-flow

yran add vue-spuer-flow

```

 * [Example](#example)
    * [Demo](#demo)
 * [Attributes](#example)
    * [width](#width)
    * [height](#height)
    * [origin](#origin)
    * [nodeList](#nodelist)
    * [graphMenu](#graphmenu)
    * [nodeMenu](#nodemenu)
    * [linkMenu](#linkmenu)
    * [enterIntercept](#enterintercept)
    * [outputIntercept](#outputintercept)
 * [Params](#params)   
    * [graph](#graph)   
    * [node](#node) 
    * [link](#link) 
    * [link](#link) 
 * [Methods](#methods)   
 * [Slots](#slots)   

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
      <!--      <template v-slot:menuItem="{item}">-->
      <!--        <span>{{item.label}}</span>-->
      <!--      </template>-->
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


### Demo
 
 [文档地址](https://caohuatao.github.io)
    
 [查看以上代码 demo](https://caohuatao.github.io/demo/)

## Attributes

### width

* 类型：number

* 默认值：4000

* 描述：图宽度



### height

* 类型：number

* 默认值：3000

* 描述：图高度



### origin

* 类型：number[]

* 默认值：[ width / 2, height / 2 ]

* 描述：图原点坐标



### nodeList

* 类型：object[]

* 默认值：[]

* 描述：初始节点列表

* item参数说明：

|参数             |说明                             |类型             |可选值           |默认值            |
|----             |----                             |----             |----             |----             |
|id               |节点id                           |string/number    |——————           |"随机字符串"      |
|width            |节点宽度                         |number           |——————           |200              |
|height           |节点高度                         |number           |——————           |100              |    
|vertex           |是否是顶节点                      |0/1              |——————           |0                |
|coordinate       |节点左上角与[origin](#origin)向量 |array            |——————           |[0, 0]           |
|meta             |节点携带数据                      |any              |——————           |null             |   
    
```json5
[
    {                                                      
      "id": "node7WXbwOR6kSFD53Hf", 
      "width": 200,                 
      "height": 100,              
      "vertex": 0,                  
      "coordinate": [],          
      "meta": {}           
    }
]
```

### linkList

* 类型：object[]

* 默认值：[]

* 描述：初始链接列表

* item参数说明：

|参数             |说明                            |类型             |可选值           |默认值            |
|----             |----                           |----             |----             |----             |
|id               |链接id                         |string/number    |——————           |——————           |
|startId          |起始节点的id                    |string/number    |——————           |——————           |
|endId           |结束节点的id                     |string/number    |——————           |——————           |    
|startAt         |起始坐标-起始节点左上角的向量     |array            |——————           |——————           |
|endAt           |结束坐标-结束节点左上角的向量     |array            |——————           |——————           |
|meta            |链接携带数据                     |any              |——————           |null             |    

```json5
[
    {                                                      
      "id": "node7WXbwOR6kSFD53Hf",     
      "startId": "nodeni9QOqT3mI7hsMau",  
      "endId": "nodeZBK0ZPpgMe1exezE",   
      "startAt": [100, 40],               
      "endAt": [0, 50],                 
      "meta": null                 
    }
]
```

### graphMenu

* 类型：object[][]

* 默认值：[]

* 描述：图的操作菜单配置  二维数组 将菜单进行分组

* 菜单 item 说明：

|参数            |说明                  |类型                                            |可选值          |默认值            |
|----            |----                 |----                                            |----            |----             |
|label           |菜单选项文本          |string                                          |——————          |——————           |
|disable         |是否禁用选项          |boolean/Function(graph: object):boolean         |——————          |false            |
|hidden          |是否隐藏选项          |boolean/Function(graph: object):boolean         |——————          |false            |   
|selected        |选项选中时调用函数    |Function(graph: object, coordinate: array):void  |——————         |()=>{}           |    

graph 参考 [params](#params) graph 说明 

```js
[
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
]
```

### nodeMenu

* 类型：object[][]

* 默认值：[]

* 描述：节点的操作菜单配置  二维数组 将菜单进行分组

* 菜单 item 说明：

|参数            |说明                  |类型                                            |可选值          |默认值            |
|----            |----                 |----                                            |----            |----             |
|label           |菜单选项文本          |string                                          |——————          |——————           |
|disable         |是否禁用选项          |boolean/Function(node: object):boolean         |——————          |false            |
|hidden          |是否隐藏选项          |boolean/Function(node: object):boolean         |——————          |false            |   
|selected        |选项选中时调用函数    |Function(node: object, coordinate: array):void  |——————         |()=>{}           |   

node 参考 [params](#params) node 说明 

```js
[
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
]

```


### linkMenu

* 类型：object[]

* 默认值：[]

* 描述：链接操作菜单配置

* 菜单 item 说明：

|参数            |说明                  |类型                                            |可选值          |默认值            |
|----            |----                 |----                                            |----            |----             |
|label           |菜单选项文本          |string                                          |——————          |——————           |
|disable         |是否禁用选项          |boolean/Function(link: object):boolean         |——————          |false            |
|hidden          |是否隐藏选项          |boolean/Function(link: object):boolean         |——————          |false            |   
|selected        |选项选中时调用函数    |Function(link: object, coordinate: array):void  |——————         |()=>{}           |   

link 参考 [params](#params) link 说明 

```js
[
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
]
```

### enterIntercept

* 类型：Function
    
``` 
enterIntercept(formNode: object, toNode: object, graph: object): boolean
```

* 默认值：() => true

* 描述：拖拽连线进入节点时拦截函数接受 boolean 类型返回值  false 阻止连接节点

* 参数：formNode, toNode 参考 [params](#params) 中 node 说明

### outputIntercept

* 类型：Function 

```
outputIntercept(node: object, graph: object): boolean
```

* 默认值：() => true

* 描述：从节点创建连线时拦截函数接受 boolean 类型返回值  false 阻止创建

* 

## Params

### graph
   
   - nodeList: 当前节点列表 
   
   - linkList: 当前链接列表
    
   - addNode: 添加节点
   
   - addLink: 添加链接
   
   - horizontal: 水平排列节点
   
   - vertical: 垂直排列节点
   
   - toJSON: 转 graph 转 json
     
   - selectAll: 选中所有节点 可进行拖拽 修改 origin  
     
### node

   - width: 节点宽度
   
   - height: 节点高度
   
   - coordinate: 节点左上角与 origin 向量
   
   - meta: 携带数据
   
   - remove: 删除当前节点

### link
 
   - start: 起始节点
   
   - end: 结束节点
   
   - startAt: 开始位置与开始节点  coordinate 的向量
   
   - endAt: 结束位置与结束节点 coordinate 的向量
    
   - remove: 删除当前链接 
    
   - meta: 携带数据


## Methods

  - toJSON
  
  - selectedAll
  
## Slots
  
  - node: 控制节点渲染添加 回传 meta  参考 [Example](#Example)
      
  - menuItem 控制菜单选项渲染 回传 item 参考 [Example](#Example)

