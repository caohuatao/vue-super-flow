/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 11:25
 */

import './src/index.less'
import Graph from './src/Graph'
import flowNode from './src/flow-node'
import flowLine from './src/flow-line'
import flowMenu from './src/flow-menu'

import { prefixCls } from './src/types'

export default {
  props: {
    nodeList: {
      type: Array,
      default: () => []
    },
    relationList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menuConf: {
        visible: false,
        open(evt) {
          this.visible = true
        }
      },
      graph: new Graph({
        nodeList: this.nodeList,
        relationList: this.relationList
      })
    }
  },
  methods: {
    renderNode(h) {
      return this.graph.nodeList.map(node =>
        h(flowNode, {
            props: {
              x: node.x,
              y: node.y,
              width: node.width,
              height: node.height,
            },
            on: {
              nodeMouseDown: this.nodeMouseDown
            }
          },
          this.$scopedSlots.node
            ? this.$scopedSlots.node({node})
            : h('div', {})
        ))
    },
    renderMenu(h) {
      return h(flowMenu)
    },

    nodeMouseDown(offset) {
      console.log(this)
      console.log(offset)
    }
  },
  render(h) {
    return h('div',
      {
        staticClass: prefixCls,
        on: {
          '&contextmenu': this.menuConf.open
        }
      },
      [
        ...this.renderNode(h)
      ]
    )
  }
}
