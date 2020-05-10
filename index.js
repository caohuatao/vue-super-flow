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
import { getOffset } from './src/utils'

export default {
  props: {
    nodeProto: {
      type: Array,
      default: () => [
        {
          type: 'start',
          label: '开始节点',
        },
        {
          type: 'end',
          label: '结束节点',
        }
      ]
    },
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
        []
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
        node: null,
        reset: () => {
          this.moveNodeConf.isDown = false
        }
      },
      menuConf: {
        list: [
          this.nodeProto,
          [
            {
              label: '竖向对齐',
              type: '',
              isHandler: true
            },
            {
              label: '横向对齐',
              type: '',
              isHandler: true
            }
          ]
        ],
        visible: false,
        x: 0,
        y: 0
      },
      temRelationConf: {
        isMove: false,
        visible: false,
        relation: null,
        reset: () => {
          const that = this.temRelationConf
          that.isMove = false
          that.visible = false
          that.relation = null
        }
      },
      graph: new Graph({
        nodeList: this.nodeList,
        relationList: this.relationList
      })
    }
  },
  mounted() {
    document.addEventListener('mouseup', this.docMouseup)
    this.$nextTick(this.scrollBy)
  },
  beforeDestroy() {
    document.removeEventListener('mouseup', this.docMouseup)
  },
  methods: {
    scrollBy() {
      if (this.$el) {
        const {
          clientHeight,
          clientWidth,
          scrollHeight,
          scrollWidth
        } = this.$el

        this.$el.scrollTop = Math.ceil((scrollHeight - clientHeight) / 2)
        this.$el.scrollLeft = Math.ceil((scrollWidth - clientWidth) / 2)
      }
    },

    menuOpen(evt) {
      const {x, y} = getOffset(evt)

      this.menuConf.visible = true
      this.menuConf.x = x
      this.menuConf.y = y
      evt.preventDefault()
    },

    docMouseup() {
      this.moveNodeConf.reset()
      this.temRelationConf.reset()
    },

    viewMousemove(evt) {
      const {x, y} = getOffset(evt)
      if (this.moveNodeConf.isDown) {
        this.moveNode(x, y)
      } else if (this.temRelationConf.visible) {
        this.moveRelation(x, y)
      }
    },

    nodeMouseDown(offset, node, idx) {
      const nodeList = this.graph.nodeList
      const conf = this.moveNodeConf
      nodeList.splice(nodeList.length - 1,
        0,
        nodeList.splice(idx, 1)[0]
      )
      conf.isDown = true
      conf.offset = offset
      conf.node = node
    },

    nodeMouseEnter(offset, node) {
      const conf = this.temRelationConf
      if (conf.isMove) {
        conf.relation.end = node
        conf.relation.endAt = node.getEndAt(offset)
      }
    },

    nodeMouseLeave() {
      const conf = this.temRelationConf
      if (conf.isMove) {
        conf.relation.end = null
      }
    },

    nodeMouseup(node) {
      const conf = this.temRelationConf
      if (conf.isMove && conf.relation.start !== node) {
        this.graph.appendRelation(conf.relation)
      }
    },

    nodeSideMousedown(node, offset) {
      const conf = this.temRelationConf
      conf.visible = true
      conf.relation = this.graph.createRelation({
        start: node,
        startAt: offset
      })
    },

    moveNode(x, y) {
      const {node, offset} = this.moveNodeConf
      node.x = x - offset.x
      node.y = y - offset.y
    },

    moveRelation(x, y) {
      const {relation} = this.temRelationConf
      this.temRelationConf.isMove = true
      relation.moveInfo.x = x
      relation.moveInfo.y = y
    },

    handler(info) {

    },

    renderNode(h) {
      return this.graph.nodeList.map((node, idx) =>
        h(flowNode, {
            props: {
              x: node.x,
              y: node.y,
              width: node.width,
              height: node.height
            },
            class: {
              isSelect: this.moveNodeConf.node === node
            },
            attrs: {
              'data-node-type': node.meta.type
            },
            on: {
              nodeMouseDown: offset => this.nodeMouseDown(offset, node, idx),
              nodeMouseEnter: offset => this.nodeMouseEnter(offset, node),
              nodeMouseLeave: this.nodeMouseLeave,
              nodeMouseup: ()=> this.nodeMouseup(node),
              nodeSideMousedown: offset => this.nodeSideMousedown(node, offset)
            }
          },
          this.$scopedSlots.node
            ? this.$scopedSlots.node({node})
            : h('div', {})
        ))
    },

    renderLine(h) {
      const conf = this.temRelationConf
      const relationList = [
        h(flowLine, {
          style: {
            display: conf.isMove ? 'block' : 'none'
          },
          props: {
            pointList: conf.relation ? conf.relation.pathPointList : []
          }
        })
      ]
      this.graph.relationList.forEach(relation => {
        relationList.push(
          h(flowLine, {
            props: {
              pointList: relation.pathPointList
            }
          })
        )
      })
      return relationList
    },

    renderMenu(h) {
      const conf = this.menuConf
      return h(flowMenu, {
        props: {
          visible: conf.visible,
          menuList: conf.list,
          x: conf.x,
          y: conf.y
        },
        on: {
          'update:visible': val => this.menuConf.visible = !!val,
          'item-click': options => this.graph.appendNode(options),
          handler: this.handler
        }
      })
    },
  },
  render(h) {
    return h('div',
      {
        staticClass: prefixCls,
      },
      [
        h('div',
          {
            on: {
              contextmenu: this.menuOpen,
              mousemove: this.viewMousemove
            }
          },
          [
            ...this.renderNode(h),
            ...this.renderLine(h),
            this.renderMenu(h)
          ]
        )
      ]
    )
  }
}
