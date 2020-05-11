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

import {
  prefixCls,
  menuHandler
} from './src/types'

import {
  getOffset,
  pauseEvent
} from './src/utils'

export default {
  props: {
    nodeProto: {
      type: Array,
      default: () => [
        {
          type: 'start',
          label: '开始节点'
        },
        {
          type: 'end',
          label: '结束节点'
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
      pageMenuList: [
        this.nodeProto,
        [
          {
            label: '竖向对齐',
            type: menuHandler.verticalAlign,
            isHandler: true
          },
          {
            label: '横向对齐',
            type: menuHandler.HorizontalAlign,
            isHandler: true
          }
        ]
      ],
      menuConf: {
        list: [],
        visible: false,
        data: null,
        x: 0,
        y: 0,
        open: (evt) => {
          const {x, y} = getOffset(evt, this.$refs['flow-canvas'])
          this.menuConf.visible = true
          this.menuConf.x = x
          this.menuConf.y = y
        }
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
      }),
      mousemoveFun: () => null
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
      this.menuConf.list = this.pageMenuList
      this.menuConf.data = null
      this.menuConf.open(evt)
      pauseEvent(evt)
    },
    
    showNodeMenu(evt, node) {
      const {x, y} = getOffset(evt, this.$refs['flow-canvas'])
      this.menuConf.list = this.nodeMenuList
      this.menuConf.data = node
      this.menuConf.open(x, y)
    },
    
    docMouseup() {
      this.mousemoveFun = () => null
      this.moveNodeConf.reset()
      this.temRelationConf.reset()
    },
    
    handler(info) {
      switch (info.type) {
        case menuHandler.verticalAlign:
          break
        case menuHandler.HorizontalAlign:
          break
        case menuHandler.nodeDelete:
          this.graph.removeNode(this.menuConf.data)
          break
        default:
          break
      }
    },
    
    renderNode(h) {
      return this.graph.nodeList.map((node, idx) =>
        h(flowNode, {
            props: {
              node: node,
              index: idx,
              menuConf: this.menuConf,
              temRelationConf: this.temRelationConf,
              moveNodeConf: this.moveNodeConf
            },
            class: {
              isSelect: this.moveNodeConf.node === node
            },
            attrs: {
              'data-node-type': node.meta.type
            },
            on: {
              updateMousemoveFun: fun => this.mousemoveFun = fun
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
    
    getGraphData() {
      return this.graph.toJson()
    }
  },
  render(h) {
    return h('div',
      {
        staticClass: prefixCls
      },
      [
        h('div',
          {
            ref: 'flow-canvas',
            on: {
              contextmenu: this.menuOpen,
              mousemove: this.mousemoveFun
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
  },
  watch: {
    nodeList() {
      this.graph.initNode(this.nodeList)
    },
    relationList() {
      this.graph.initRelation(this.relationList)
    }
  }
}
