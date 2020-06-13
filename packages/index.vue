<!--
 * User: CHT
 * Date: 2020/5/27
 * Time: 9:52
-->
<template>
  <div class="super-flow">
    <div
      ref="flow-canvas"
      :style="{width: width + 'px', height: height + 'px'}"
      @contextmenu.prevent.stop="contextmenu">

      <graph-line
        v-if="temEdgeConf.visible"
        :graph="graph"
        :link="temEdgeConf.link">
      </graph-line>

      <graph-line
        v-for="(edge, idx) in graph.linkList"
        :graph="graph"
        :link="edge"
        :key="edge.key">
      </graph-line>

      <graph-node
        v-for="(node, idx) in graph.nodeList"
        :index="idx"
        :node="node"
        :graph="graph"
        :key="node.key"
        :is-move="node === moveNodeConf.node"
        :is-tem-edge="temEdgeConf.visible"
        :node-intercept="nodeIntercept(node)"
        @node-mousedown="nodeMousedown"
        @node-mouseenter="nodeMouseenter"
        @node-mouseleave="nodeMouseleave"
        @node-mouseup="nodeMouseup"
        @side-mousedown="sideMousedown"
        @node-contextmenu="nodeContextmenu">
        <template v-slot="{meta}">
          <slot
            name="node"
            :meta="meta">
          </slot>
        </template>
      </graph-node>

      <graph-menu
        :visible.sync="menuConf.visible"
        :graph="graph"
        :position="menuConf.position"
        :list="menuConf.list"
        :source="menuConf.source">
      </graph-menu>

    </div>

  </div>
</template>

<script>

  import Graph from './Graph'
  import GraphMenu from './menu'
  import GraphNode from './node'
  import GraphLine from './link'

  import {
    getOffset,
    isBool,
    isFun,
    vector,
    debounce
  } from '../packages/utils'

  export default {
    props: {
      nodeMenu: {
        type: Array,
        default: () => []
      },
      graphMenu: {
        type: Array,
        default: () => []
      },
      linkMenu: {
        type: Array,
        default: () => []
      },
      nodeList: {
        type: Array,
        default: () => []
      },
      linkList: {
        type: Array,
        default: () => []
      },
      enterIntercept: {
        type: Function,
        default: () => true
      },
      outputIntercept: {
        type: Function,
        default: () => true
      },
      width: {
        type: Number,
        default: 4000
      },
      height: {
        type: Number,
        default: 3000
      },
      origin: {
        type: Array,
        default() {
          return [this.width / 2, this.height / 2]
        }
      }
    },
    data() {
      return {
        graph: new Graph({
          nodeList: this.pointList,
          linkList: this.edgeList,
          width: this.width,
          height: this.height,
          origin: this.origin
        }),
        menuConf: {
          visible: false,
          position: [0, 0],
          source: null,
          list: []
        },
        moveNodeConf: {
          node: null,
          offset: null
        },
        temEdgeConf: {
          visible: false,
          link: null
        },
        scorllCenterFun: debounce(this.scrollCenter, 200)
      }
    },
    components: {
      GraphMenu,
      GraphNode,
      GraphLine
    },
    mounted() {
      document.addEventListener('mouseup', this.docMouseup)
      document.addEventListener('mousemove', this.docMousemove)
      this.scrollCenter()
    },
    beforeDestroy() {
      document.removeEventListener('mouseup', this.docMouseup)
      document.removeEventListener('mousemove', this.docMousemove)
    },
    methods: {
      initMenu(menu, source) {
        return menu.map(subList => subList
          .map(item => {
            let disable
            let hidden

            if (isFun(item.disable)) {
              disable = item.disable(source)
            } else if (isBool(item.disable)) {
              disable = item.disable
            } else {
              disable = Boolean(item.disable)
            }

            if (isFun(item.hidden)) {
              hidden = item.hidden(source)
            } else if (isBool(item.hidden)) {
              hidden = item.hidden
            } else {
              hidden = Boolean(item.hidden)
            }

            return {
              ...item,
              disable,
              hidden
            }
          })
          .filter(item => !item.hidden)
        ).filter(sublist => sublist.length)
      },

      showContextMenu(position, list, source) {
        if (!list.length) return
        this.$set(this.menuConf, 'position', position)
        this.$set(this.menuConf, 'list', list)
        this.$set(this.menuConf, 'source', source)
        this.menuConf.visible = true
      },

      docMouseup() {
        this.moveNodeConf.isMove = false
        this.moveNodeConf.node = null
        this.moveNodeConf.offset = null

        this.temEdgeConf.visible = false
        this.temEdgeConf.link = null
      },

      docMousemove(evt) {
        if (this.moveNodeConf.isMove) {
          return this.moveNodeConf.node.position =
            vector(this.moveNodeConf.offset)
              .differ(getOffset(evt, this.$refs['flow-canvas']))
              .end
        }

        if (this.temEdgeConf.visible) {
          return this.temEdgeConf.link.movePosition
            = getOffset(evt, this.$refs['flow-canvas'])
        }

        return this.graph.dispatch({
          type: 'mousemove',
          evt: evt
        }, true)
      },

      scrollCenter() {
        if (this.$el) {
          const {
            clientHeight,
            clientWidth,
            scrollHeight,
            scrollWidth
          } = this.$el
          const [x, y] = this.origin

          this.$el.scrollLeft = Math.ceil((x * 2 - clientWidth) / 2)
          this.$el.scrollTop = Math.ceil((y * 2 - clientHeight) / 2)
        }
      },

      contextmenu(evt) {
        const mouseonLink = this.graph.mouseonLink
        const position = getOffset(evt)
        let list, source
        if (mouseonLink && mouseonLink.isPointInLink(position)) {
          const link = mouseonLink.interface()
          list = this.initMenu(this.linkMenu, link)
          source = link
        } else {
          if (mouseonLink) this.graph.mouseonLink = null
          const graph = this.graph.interface()
          list = this.initMenu(this.graphMenu, graph)
          source = graph
        }

        this.showContextMenu(
          getOffset(evt, this.$refs['flow-canvas']),
          list,
          source
        )
      },

      nodeMousedown(node, offset) {
        this.moveNodeConf.isMove = true
        this.moveNodeConf.node = node
        this.moveNodeConf.offset = offset
      },

      nodeMouseenter(evt, node, offset) {
        const link = this.temEdgeConf.link
        if (this.enterIntercept(link.start, node, this.graph.interface())) {
          link.end = node
          link.endAt = offset
        }
      },

      nodeMouseleave() {
        this.temEdgeConf.link.end = null
      },

      nodeMouseup() {
        this.graph.addLink(this.temEdgeConf.link)
      },

      nodeContextmenu(evt, node) {
        node = node.interface()
        const list = this.initMenu(this.nodeMenu, node)
        if (!list.length) return
        this.$set(this.menuConf, 'position', getOffset(evt, this.$refs['flow-canvas']))
        this.$set(this.menuConf, 'list', list)
        this.$set(this.menuConf, 'source', node)
        this.menuConf.visible = true
      },

      sideMousedown(evt, node, startAt) {
        const link = this.graph.createLink({
          start: node,
          startAt
        })
        link.movePosition = getOffset(evt, this.$refs['flow-canvas'])
        this.$set(this.temEdgeConf, 'link', link)
        this.temEdgeConf.visible = true
      },

      nodeIntercept(node) {
        return () => this.outputIntercept(node, this.graph.interface())
      },

      menuItemSelect() {
        this.menuConf.visible = false
      },

      selectAll() {

      }
    },

    watch: {
      'graph.mouseonLink'() {
        if (this.graph.mouseonLink) {
          document.body.style.cursor = 'pointer'
        } else {
          document.body.style.cursor = ''
        }
      },
      nodeList() {
        this.graph.initPoint(this.nodeList)
      },
      linkList() {
        this.graph.initEdge(this.linkList)
      },
      width() {
        this.scorllCenterFun()
      },
      height() {
        this.scorllCenterFun()
      },
      origin() {
        this.scorllCenterFun()
      }
    }
  }
</script>

<style lang="less">
  .scrollBar(@width:10px, @bg: rgba(0, 0, 0, 0.3), @shadow: inset 6px rgba(0, 0, 0, 0.2)) {
    &::-webkit-scrollbar {
      width  : @width;
      height : @width;
    }

    &::-webkit-scrollbar-thumb {
      border-radius : 8px;
      background    : @bg;
      box-shadow    : @shadow;
    }
  }

  .super-flow {
    font-family      : Apple System,
    'SF Pro SC',
    'SF Pro Display',
    'Helvetica Neue',
    Arial,
    'PingFang SC',
    'Hiragino Sans GB',
    STHeiti,
    'Microsoft YaHei',
    'Microsoft JhengHei',
    'Source Han Sans SC',
    'Noto Sans CJK SC',
    'Source Han Sans CN',
    sans-serif;

    width            : 100%;
    height           : 100%;
    background-color : #F4F4F4;
    overflow         : auto;

    > div {
      position : relative;
    }
  }
</style>
