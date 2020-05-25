<!--
 * User: CHT
 * Date: 2020/5/25
 * Time: 11:21
-->
<template>
  <div class="super-flow">
    <div
      ref="flow-canvas"
      @contextmenu="menuOpen"
      @mousemove="mousemoveFun">

      <flow-node
        v-for="(node, idx) in graph.nodeList"
        :key="node.id"
        :class="{isSelect: moveNodeConf.node === node}"
        :node="node"
        :index="idx"
        :menu-conf="menuConf"
        :tem-relation-conf="temRelationConf"
        :move-node-conf="moveNodeConf"
        :data-node-type="node.meta.type"
        @updateMousemoveFun="changeMousemoveFun">
        <slot
          name="node"
          :node="node">
        </slot>
      </flow-node>

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
        :visible.sync="menuConf.visible"
        :menu-list="menuConf.list"
        :x="menuConf.x"
        :y="menuConf.y"
        @item-click="opt => graph.appendNode(opt)"
        @handler="handler">
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
          reset: () => this.moveNodeConf.isDown = false
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
    components: {
      flowNode,
      flowLine,
      flowMenu
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

      getGraphData() {
        return this.graph.toJson()
      },

      changeMousemoveFun(fun) {
        this.mousemoveFun = fun
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
  @prefix        : super-flow;
  @bg-color      : #ffffff;
  @color         : #333333;
  @border-color  : rgb(180, 180, 180); // outside
  @z-index-base  : 0;
  @z-index-node  : 1;
  @z-index-focus : 2;
  @z-index-menu  : 10;

  .shadow(@dep: 1) {
    box-shadow : 1px 2px 8px rgba(0, 0, 0,.1 * @dep);
  }

  .useSelect(@val: none) {
    -webkit-user-select : @val;
    -moz-user-select    : @val;
    -ms-user-select     : @val;
    user-select         : @val;
  }

  .boxSizing(@val: content-box) {
    -webkit-box-sizing : @val;
    -moz-box-sizing    : @val;
    -ms-box-sizing     : @val;
    box-sizing         : @val;
  }

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

  .@{prefix} {
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

    // 关系线
    &__line {
      position : absolute;
      z-index  : @z-index-base;

      &.inPath {
        cursor : pointer;
      }
    }

    // 节点
    &__node {
      .shadow(2);
      user-select      : none;

      position         : absolute;
      background-color : @bg-color;
      border           : 1px solid @border-color;
      cursor           : move;
      z-index          : @z-index-node;
      outline          : none;

      &-header {
        background-color : green;
      }

      &-body {

      }

      .node-side {
        @size    : 10px;
        position : absolute;
        cursor   : crosshair;

        &-top {
          top    : -@size/2;
          right  : 0;
          left   : 0;

          height : @size;
        }

        &-right {
          top    : 0;
          right  : -@size/2;
          bottom : 0;

          width  : @size;
        }

        &-bottom {
          right  : 0;
          bottom : -@size/2;
          left   : 0;

          height : @size;
        }

        &-left {
          top    : 0;
          bottom : 0;
          left   : -@size/2;

          width  : @size;
        }
      }

      &:hover {
        .shadow(4)
      }

      &.isSelect {
        z-index : @z-index-focus;
      }
    }

    // 菜单
    &__menu {
      @menu-width      : 180px;
      @height          : 26px;

      position         : absolute;
      outline          : none;
      width            : @menu-width;
      padding          : 4px 0;
      border           : 1px solid @border-color;
      box-shadow       : 0 8px 16px 0 rgba(0, 0, 0, 0.3);
      overflow         : hidden;
      border-radius    : 3px;
      z-index          : @z-index-menu;
      background-color : @bg-color;
      margin           : 0;


      &-item {
        @padding    : 4px;
        @width      : @menu-width - 2px - @padding * 2;
        @icon-size  : @height;


        user-select : none;
        box-sizing  : content-box;

        width       : @width;
        min-height  : @height;

        cursor      : pointer;
        font-size   : 0;
        position    : relative;
        padding     : 0 @padding;

        display     : flex;

        &:last-child {
          margin : 0;

          &:after {
            display : none;
          }
        }

        &:hover {
          background-color : #eeeeee;
        }

        &-icon {
          float  : left;
          width  : @icon-size;
          height : @icon-size;
        }

        &-content {
          float       : left;
          display     : inline-block;
          color       : #333333;
          font-size   : 14px;
          line-height : @height;
          width       : @width - @icon-size;
        }

        > div {
          position : absolute;
          top      : 0;
          left     : 0;
          right    : 0;
          bottom   : 0;
        }
      }

      &-line {
        width         : 100%;
        margin        : 4px 0;
        border-bottom : 1px solid @border-color;
        height        : 0;

        &:last-child {
          display : none;
        }
      }
    }

  }

</style>
