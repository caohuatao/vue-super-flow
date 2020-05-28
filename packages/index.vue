<!--
 * User: CHT
 * Date: 2020/5/27
 * Time: 9:52
-->
<template>
  <div
    class="super-flow">
    <div
      ref="flow-canvas"
      :style="{width: width + 'px', height: height + 'px'}"
      @contextmenu.prevent.stop="contextmenu">

      <graph-line
        v-if="temEdgeConf.visible"
        :point-list="temEdgeConf.edge.pathPointList">
      </graph-line>

      <graph-line
        v-for="(edge, idx) in graph.edgeList"
        :index="idx"
        :key="edge.key"
        :point-list="edge.pathPointList">
      </graph-line>

      <graph-node
        v-for="(node, idx) in graph.pointList"
        :index="idx"
        :node="node"
        :graph="graph"
        :is-move="node === moveNodeConf.node"
        :is-tem-edge="temEdgeConf.visible"
        @node-mousedown="nodeMousedown"
        @node-mouseenter="nodeMouseenter"
        @node-mouseleave="nodeMouseleave"
        @node-mouseup="nodeMouseup"
        @side-mousedown="sideMousedown">
      </graph-node>

      <graph-menu
        :visible.sync="menuConf.visible"
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
  import GraphLine from './line'
  import {getOffset, vector} from '../packages/utils'

  export default {
    props: {
      graphMenu: {
        type: Array,
        default: () => []
      },
      pointList: {
        type: Array,
        default: () => []
      },
      edgeList: {
        type: Array,
        default: () => []
      },
      width: {
        type: Number,
        default: 4000
      },
      height: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        graph: new Graph({
          nodeList: this.pointList,
          edgeList: this.edgeList
        }),
        nodeMenu: [],
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
          edge: null
        }
      }
    },
    components: {
      GraphMenu,
      GraphNode,
      GraphLine
    },
    created() {
      this.resetGraphMenu()
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
      resetGraphMenu() {
        this.graphMenu.forEach(subList => subList.forEach(item => {
          const type = typeof item.disable
          if (type === 'boolean') {
            const bol = item.disable
            item.disable = () => bol
          }
        }))
      },

      docMouseup() {
        this.moveNodeConf.isMove = false
        this.moveNodeConf.node = null
        this.moveNodeConf.offset = null

        this.temEdgeConf.visible = false
        this.temEdgeConf.edge = null
      },

      docMousemove(evt) {
        if (this.moveNodeConf.isMove) {
          this.moveNodeConf.node.position =
            vector(this.moveNodeConf.offset)
              .differ(getOffset(evt, this.$refs['flow-canvas']))
              .end
        }

        if(this.temEdgeConf.visible) {
          this.temEdgeConf.edge.movePosition
            = getOffset(evt, this.$refs['flow-canvas'])
        }

      },

      scrollCenter() {
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

      contextmenu(evt) {
        this.$set(this.menuConf, 'position', getOffset(evt, this.$refs['flow-canvas']))
        this.$set(this.menuConf, 'list', this.graphMenu)
        this.$set(this.menuConf, 'source', this.graph)
        this.menuConf.visible = true
      },

      nodeMousedown(node, offset) {
        this.moveNodeConf.isMove = true
        this.moveNodeConf.node = node
        this.moveNodeConf.offset = offset
      },

      nodeMouseenter(evt, node, endAt, endDirection) {
        const edge = this.temEdgeConf.edge
        edge.end = node
        edge.endAt = endAt
        edge.endDirection = endDirection
      },

      nodeMouseleave() {
        this.temEdgeConf.edge.end = null
      },

      nodeMouseup() {
        this.graph.insertEdge(this.temEdgeConf.edge)
      },

      sideMousedown(evt, node, startAt, startDirection) {
        const edge = this.graph.createEdge({
          start: node,
          startDirection,
          startAt
        })
        edge.movePosition = getOffset(evt, this.$refs['flow-canvas'])
        this.$set(this.temEdgeConf, 'edge', edge)
        this.temEdgeConf.visible = true
      },

      menuItemSelect() {
        this.menuConf.visible = false
      }
    },

    watch: {
      pointList() {
        this.graph.initPoint(this.pointList)
      },
      edgeList() {
        this.graph.initEdge(this.edgeList)
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
    .scrollBar(8px);

    > div {
      position : relative;
    }
  }
</style>
