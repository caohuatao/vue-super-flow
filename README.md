


# vue-super-flow

> vue-super-flow 是一款快速方便实现流程图的 vue 插件。
> [Demo](https://caohuatao.github.io/demo/)
> [文档](https://caohuatao.github.io)

> Vue-super-flow is a quick and convenient Vue plug-in to realize flow chart. 
> [Demo](https://caohuatao.github.io/demo/)
> [Docs](https://caohuatao.github.io)

## Installation

```
v1.3.1
```

```npm

npm install vue-super-flow

yran add vue-spuer-flow

```
```js

import SuperFlow from 'vue-super-flow'
import 'vue-super-flow/lib/index.css'

Vue.use(SuperFlow)

```

## Attributes

|属性                |类型                |默认值                   |描述                                     | 
|----                | ----              |----                     |----                                     |
|draggable           |`Boolean`          |`true`                   | 是否开启节点拖拽                         |
|linkAddable         |`Boolean`          |`true`                   | 是否开启快捷创建 `link`                  |
|linkEditable        |`Boolean`          |`true`                   | `link` 是否可编辑                       |
|hasMarkLine         |`Boolean`          |`true`                   | 是否开启拖拽辅助线                       |
|lineColor           |`String`           |`#666666`                | 连线颜色                                |
|onLineColor         |`String`           |`#FF0000`                | 鼠标靠近连线时颜色                       |
|markLineColor       |`String`           |`#55abfc`                | 辅助线颜色                               |
|origin              |`Array`            |`[0, 0]`                 | `graph` 的二维坐标系原点                 |
|nodeList            |`Array`            |`[]`                     | 初始化节点列表                           |
|linkList            |`Array`            |`[]`                     | 初始化连线列表                           |
|graphMenu           |`Array`            |`[]`                     | `graph` 的右键菜单列表配置               |
|nodeMenu            |`Array`            |`[]`                     | `node` 右键菜单列表配置                  |
|linkMenu            |`Array`            |`[]`                     | `link` 右键菜单配置                      |
|enterIntercept      |`Function`         |`() => true`             | 创建连线进入节点限制                     |
|outputIntercept     |`Function`         |`() => true`             | 节点生成连线限制函数                     |

## Methods

|方法名               |说明                                          |参数                                     | 
|----                | ----                                        |----                                     |
|selectedAll         | 选中所有进行拖拽修改 `origin`                 |----                                     |
|toJSON              | 将 `graph` 对象转为普通 json 对象             |----                                     |
|getMouseCoordinate  | 获取当前鼠标在 `graph` 坐标系的坐标            |clientX, clientY                         |
|addNode             | 添加节点                                      |options                                 |


## Examples

- `graphMenu` 自由配置右键创建节点菜单

```js
[
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
]
```

- `nodeMenu` 配置节点右键菜单

```js
[
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
]
```

- `linkMenu` 配置连线右键菜单

```js
[
  [
    {
      label: '删除',
      selected: link => {
        link.remove()
      }
    }
  ]
]
```

![例1](https://s1.ax1x.com/2020/07/11/UQ3IsJ.gif)



![例2](https://s1.ax1x.com/2020/07/11/UQ37ZR.gif)


![例3](https://s1.ax1x.com/2020/07/11/UQ3oL9.gif)
