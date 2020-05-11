/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 13:59
 */

import {
  direction,
  prefixCls,
  directionVector, menuHandler
} from './types'

import {
  getOffset,
  pauseEvent
} from './utils'

import flowMenu from './flow-menu'

export default {
  props: {
    node: Object,
    index: Number,
    menuConf: Object,
    temRelationConf: Object,
    moveNodeConf: Object
  },
  data() {
    return {
      graph: this.node.parent,
      nodeMenuList: [
        [
          {
            label: '创建连线',
            type: menuHandler.nodeConnection,
            isHandler: true
          }
        ],
        [
          {
            label: '删除',
            type: menuHandler.nodeDelete,
            isHandler: true
          }
        ]
      ]
    }
  },
  methods: {
    
    nodeMousedown(evt) {
      const nodeList = this.graph.nodeList
      const conf = this.moveNodeConf
      nodeList.splice(nodeList.length - 1,
        0,
        nodeList.splice(this.index, 1)[0]
      )
      conf.isDown = true
      conf.offset = getOffset(evt)
      conf.node = this.node
      this.menuConf.visible = false
      this.$emit('updateMousemoveFun', this.moveNode)
      pauseEvent(evt)
    },
  
    moveNode(evt) {
      const {x, y} = getOffset(evt)
      const {node, offset} = this.moveNodeConf
      node.x = x - offset.x
      node.y = y - offset.y
    },
  
    nodeMouseEnter(evt) {
      const conf = this.temRelationConf
      if (conf.isMove) {
        conf.relation.end = this.node
        conf.relation.endAt = this.node.getEndAt(getOffset(evt))
      }
    },
  
    nodeMouseLeave() {
      const conf = this.temRelationConf
      if (conf.isMove) {
        conf.relation.end = null
      }
    },
  
    nodeMouseup() {
      const conf = this.temRelationConf
      if (conf.isMove && conf.relation.start !== this.node) {
        this.graph.appendRelation(conf.relation)
      }
    },
    
    showNodeMenu(evt) {
      this.menuConf.list = this.nodeMenuList
      this.menuConf.data = this.node
      this.menuConf.open(evt)
      pauseEvent(evt)
    },
    
    moveRelation(evt) {
      const {x, y} = getOffset(evt)
      const {relation} = this.temRelationConf
      this.temRelationConf.isMove = true
      relation.moveInfo.x = x
      relation.moveInfo.y = y
    },
    
    sideMousedown(evt, dir) {
      const offset = getOffset(evt)
      const conf = this.temRelationConf
      
      offset.direction = directionVector[dir]
      switch (dir) {
        case direction.top:
          offset.y = 0
          break
        case direction.right:
          offset.x = this.node.width
          break
        case direction.bottom:
          offset.y = this.node.height
          break
        case direction.left:
          offset.x = 0
          break
      }
      
      conf.visible = true
      conf.relation = this.graph.createRelation({
        start: this.node,
        startAt: offset
      })
      this.$emit('updateMousemoveFun', this.moveRelation)
      pauseEvent(evt)
    }
  },
  render(h) {
    return h('div', {
      staticClass: prefixCls + '__node',
      attrs: {
        tabindex: -1
      },
      style: {
        width: this.node.width + 'px',
        height: this.node.height + 'px',
        top: this.node.y + 'px',
        left: this.node.x + 'px'
      },
      on: {
        mousedown: this.nodeMousedown,
        contextmenu: this.showNodeMenu,
        mouseenter: this.nodeMouseEnter,
        mouseleave: this.nodeMouseLeave,
        mouseup: this.nodeMouseup
      }
    }, [
      this.$slots.default,
      Object.keys(direction).map(key =>
        h('div', {
          staticClass: `node-side node-side-${key}`,
          on: {
            mousedown: evt => this.sideMousedown(evt, direction[key])
          }
        })
      )
    ])
  }
}
