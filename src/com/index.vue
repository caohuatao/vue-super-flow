<!--
 * User: CHT
 * Date: 2020/5/5
 * Time: 9:58
-->

<template>
  <div
    @contextmenu.prevent="contextmenu"
    @mousemove="mousemove"
    class="flow__page">
    <div>
      <flow-node
        v-for="(node, idx) in graph.nodeList"
        :key="node.id"
        :x.sync="node.x"
        :y.sync="node.y"
        :width.sync="node.width"
        :height.sync="node.height"
        :tier="downInfo.node === node ? 2 : 1"
        :is-create-line="createLineInfo.isMove && createLineInfo.index !== idx"
        :is-move-node="downInfo.isDrag"
        @node-start="offset => flowNodeLineStart(offset, node, idx)"
        @node-enter="offset => flowNodeLineEnter(offset, node, idx)"
        @node-leave="flowNodeLineLeave"
        @node-end="offset => flowNodeLineEnd(offset, node, idx)"
        @node-down="evt => flowNodeMousedown(evt, node)"
        @node-db-click="editNode.open(node)">
      </flow-node>

      <flow-menu
        :x="contextInfo.offsetX"
        :y="contextInfo.offsetY"
        :visible.sync="menuVisible"
        :menu-list="menuList"
        @item-click="addNode">
      </flow-menu>

      <flow-line
        v-for="relation in graph.relationList"
        :key="relation.id"
        :point-list="relation.canvasD"
        @dblclick="editRelation.open(relation)"
      ></flow-line>

      <flow-line
        v-show="createLineInfo.isMove"
        :point-list="createLineInfo.relation? createLineInfo.relation.canvasD : []"
      ></flow-line>

<!--      <el-drawer-->
<!--        size="600px"-->
<!--        :visible.sync="editNode.visible">-->
<!--      </el-drawer>-->

<!--      <el-drawer-->
<!--        size="600px"-->
<!--        :visible.sync="editRelation.visible">-->
<!--      </el-drawer>-->

    </div>
  </div>
</template>

<script>
  import flowNode from './flow-node'
  import flowMenu from './flow-menu'
  import flowLine from './flow-line'
  import Graph from './Graph'

  export default {
    props: {
      nodeList: {
        type: Array,
        default: () => []
      }
    },
    components: {
      flowNode,
      flowMenu,
      flowLine
    },
    data() {
      return {
        menuVisible: false,
        menuList: [
          {
            type: 'start',
            label: '开始节点'
          },
          {
            type: 'end',
            label: '结束节点'
          }
        ],
        downInfo: {
          isDrag: false,
          node: null,
          clientX: 0,
          clientY: 0,
          offsetX: 0,
          offsetY: 0
        },
        // 坐标
        createLineInfo: {
          isCreate: false,
          isMove: false,
          relation: null,
          index: 0
        },
        contextInfo: {
          clientX: 0,
          clientY: 0,
          offsetX: 0,
          offsetY: 0
        },
        graph: new Graph(),
        editNode: {
          visible: false,
          node: null,
          open(node) {
            this.node = node
            this.visible = true
          }
        },
        editRelation: {
          visible: false,
          relation: null,
          open(relation) {
            this.relation = relation
            this.visible = true
          }
        }
      }
    },
    mounted() {
      document.addEventListener('mousedown', this.docMousedown)
      document.addEventListener('mouseup', this.docMouseup)
      window.addEventListener('blur', this.docMouseup)
      this.$nextTick(this.byScroll)
    },
    beforeDestroy() {
      document.removeEventListener('mousedown', this.docMousedown)
      document.removeEventListener('mouseup', this.docMouseup)
      window.removeEventListener('blur', this.docMouseup)
    },
    methods: {
      docMousedown() {
        this.menuVisible = false
      },
      docMouseup() {
        this.downInfo.isDrag = false
        this.createLineInfo.isCreate = false
        this.createLineInfo.isMove = false
      },
      mousemove(evt) {
        const {
          currentTarget,
          clientX,
          clientY
        } = evt
        const {
          scrollTop,
          scrollLeft
        } = currentTarget
        if (this.downInfo.isDrag) {
          const {
            node,
            offsetX,
            offsetY
          } = this.downInfo

          node.x = clientX + scrollLeft + offsetX
          node.y = clientY + scrollTop + offsetY

        } else if (this.createLineInfo.isCreate) {
          const info = this.createLineInfo
          info.relation.moveInfo.x = clientX + scrollLeft
          info.relation.moveInfo.y = clientY + scrollTop
          if (!info.isMove) {
            info.isMove = true
          }
        }
      },

      flowNodeLineStart(offset, start, idx) {
        Object.assign(this.createLineInfo, {
          isCreate: true,
          index: idx,
          relation: this.graph.createRelation({start, startOffset: offset})
        })
      },

      flowNodeLineEnter(offset, node, idx) {
        this.createLineInfo.relation.endOffset = offset
        this.createLineInfo.relation.end = node
      },

      flowNodeLineLeave() {
        this.createLineInfo.relation.end = null
      },

      flowNodeLineEnd(offset, end, idx) {
        if (this.createLineInfo.relation.end) {
          this.graph.addRelation(
            this.createLineInfo.relation
          )
          this.createLineInfo.relation = null
        }
      },

      flowNodeMousedown(evt, node) {
        const {
          currentTarget,
          clientX,
          clientY
        } = evt

        const {
          top,
          left
        } = currentTarget.getBoundingClientRect()

        Object.assign(this.downInfo, {
          isDrag: true,
          node,
          offsetX: node.width / 2 - clientX + left,
          offsetY: node.height / 2 - clientY + top
        })
      },

      contextmenu(evt) {
        const {
          currentTarget,
          clientX,
          clientY
        } = evt

        const {
          scrollTop,
          scrollLeft
        } = currentTarget

        this.menuVisible = true

        Object.assign(this.contextInfo, {
          clientX,
          clientY,
          offsetX: scrollLeft + clientX,
          offsetY: scrollTop + clientY
        })
      },

      addNode(info) {
        this.graph.addNode(
          this.graph.createNode(info)
        )
      },

      byScroll() {
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
      }
    }
  }
</script>

<style lang="less">
  .flow__page {
    width    : 100%;
    height   : 100%;
    overflow : auto;

    &::-webkit-scrollbar {
      width  : 8px;
      height : 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius : 8px;
      background    : rgba(0, 0, 0, 0.3);
      box-shadow    : inset 0 0 6px rgba(0, 0, 0, 0.2);
    }

    > div {
      width    : 4000px;
      height   : 3000px;
      position : relative;
    }
  }
</style>
