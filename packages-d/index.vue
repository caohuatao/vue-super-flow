<!--
 * User: CHT
 * Date: 2020/5/25
 * Time: 11:21
-->
<template>
  <div class="super-flow">
    <div
      ref="flow-canvas"
      @contextmenu.prevent.stop="contextmenu"
      @mousemove="mousemoveFun">


      <flow-line
        v-show="temRelationConf.isMove"
        :point-list="temRelationConf.relation ? temRelationConf.relation.pathPointList : []">
      </flow-line>

      <flow-line
        v-for="relation in graph.relationList"
        :key="relation.key"
        :point-list="relation.pathPointList">
      </flow-line>

      <flow-menu
        :visible.sync="menuVisible"
        :list="menu"
        :position="menuPosition"
        @select="menuItemSelect">
      </flow-menu>

    </div>
  </div>
</template>

<script>

  import Graph from './Graph'
  import flowNode from './flow-node'
  import flowLine from './flow-line'
  import flowMenu from './flow-menu'

  import {
    menuHandler
  } from './types'

  import {
    getOffset,
    pauseEvent
  } from './utils'

  export default {
    props: {
      menu: {
        type: Array,
        default: () => []
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
        // 菜单位置
        menuPosition: [0, 0],
        menuVisible: false,

        moveConf: {
          isDown: false,
          position: [],
          ele: null,
        },

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
    components: {
      flowNode,
      flowLine,
      flowMenu
    },
    beforeDestroy() {
      document.removeEventListener('mouseup', this.docMouseup)
    },
    methods: {


      docMouseup() {
        this.mousemoveFun = () => null
        this.moveConf.isDown = false

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

      getGraphData() {
        return this.graph.toJson()
      },

      changeMousemoveFun(fun) {
        this.mousemoveFun = fun
      },




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
      contextmenu(evt) {
        const {x, y} = getOffset(evt, this.$refs['flow-canvas'])
        this.menuPosition[0] = x
        this.menuPosition[1] = y
        this.menuVisible = true
      },
      createNode(options) {
        return this.graph.createNode(options)
      },
      menuItemSelect(opt) {
        // todo：调用 disable
        console.log(opt)
        this.$emit('menu-item-select', opt)
        this.menuVisible = false
      }
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
      width    : 3000px;
      height   : 4000px;
      position : relative;
    }
  }

</style>
