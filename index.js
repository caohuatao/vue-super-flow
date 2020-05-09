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

import {prefixCls} from './src/types'
import {getOffset} from './src/utils'

export default {
  props: {
    nodeList: {
      type: Array,
      default: () => []
    },
    relationList: {
      type: Array,
      default: () => []
    },
    menuList: {
      type: Array,
      default: () => [
        [
          {
            label: '开始节点',
            type: 'start'
          },
          {
            label: '结束节点',
            type: 'end'
          }
        ]
      ]
    }
  },
  data() {
    return {
      moveNodeConf: {
        isDown: false,
        offset: {
          x: 0,
          y: 0
        },
        node: null
      },
      menuConf: {
        visible: false,
        x: 0,
        y: 0
      },
      graph: new Graph({
        nodeList: this.nodeList,
        relationList: this.relationList
      })
    }
  },
  mounted() {
    document.addEventListener('mouseup', this.docMouseup)
  },
  beforeDestroy() {
    document.removeEventListener('mouseup', this.docMouseup)
  },
  methods: {
    renderNode(h) {
      return this.graph.nodeList.map(node =>
        h(flowNode, {
            props: {
              x: node.x,
              y: node.y,
              width: node.width,
              height: node.height
            },
            attrs: {
              'data-node-type': node.meta.type
            },
            on: {
              nodeMouseDown: offset => this.nodeMouseDown(offset, node)
            }
          },
          this.$scopedSlots.node
            ? this.$scopedSlots.node({node})
            : h('div', {})
        ))
    },
    renderMenu(h) {
      return h(flowMenu, {
        props: {
          visible: this.menuConf.visible,
          menuList: this.menuList,
          x: this.menuConf.x,
          y: this.menuConf.y
        },
        on: {
          'update:visible': val => this.menuConf.visible = !!val,
          'item-click': options => this.graph.appendNode(options)
        }
      })
    },
    
    menuOpen(evt) {
      const {x, y} = getOffset(evt)
      
      this.menuConf.visible = true
      this.menuConf.x = x
      this.menuConf.y = y
      evt.preventDefault()
    },
    
    docMouseup() {
      this.moveNodeConf.isDown = false
    },
    
    viewMousemove(evt) {
      const {
        clientX,
        clientY
      } = evt
      
      if (this.moveNodeConf.isDown) {
        this.moveNode(clientX, clientY)
      }
    },
    
    nodeMouseDown(offset, node) {
      this.moveNodeConf.isDown = true
      this.moveNodeConf.offset = offset
      this.moveNodeConf.node = node
    },
    
    moveNode(clientX, clientY) {
      const {node, offset} = this.moveNodeConf
      node.x = clientX - offset.x
      node.y = clientY - offset.y
    }
  },
  render(h) {
    return h('div',
      {
        staticClass: prefixCls,
        on: {
          contextmenu: this.menuOpen,
          mousemove: this.viewMousemove
        }
      },
      [
        ...this.renderNode(h),
        this.renderMenu(h)
      ]
    )
  }
}
