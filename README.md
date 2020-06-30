


# vue-super-flow

> vue-super-flow 是一款快速方便实现流程图的 vue 插件。
> [Demo](https://caohuatao.github.io/demo/)
> [文档](https://caohuatao.github.io)

> Vue-super-flow is a quick and convenient Vue plug-in to realize flow chart. 
> [Demo](https://caohuatao.github.io/demo/)
> [Docs](https://caohuatao.github.io)

## Installation

```
v1.3.0
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
|width               |`Number`           |`1000`                   | `graph` 的宽度                          |
|height              |`Number`           |`8000`                   | `graph` 的高度                          |
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


