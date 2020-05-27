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

      <graph-menu
        :visible.sync="menuConf.visible"
        :position="menuConf.position"
        :list="menuConf.list"
        @select="menuSelect">
      </graph-menu>

    </div>

  </div>
</template>

<script>

  import Graph from './Graph'
  import GraphMenu from './menu'
  import {getOffset} from '../packages/utils'

  export default {
    props: {
      menuList: {
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
        menuConf: {
          visible: false,
          position: [0, 0],
          list: []
        }
      }
    },
    components: {GraphMenu},
    created() {
    },
    mounted() {
      this.scrollCenter()
    },
    methods: {
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
        const {
          position,
          list
        } = this.menuConf
        position.splice(0, position.length, ...getOffset(evt, this.$refs['flow-canvas']))
        list.splice(0, list.length, ...this.menuList.map(subList => {
          return subList.map(item => {
            let disable
            switch (typeof item.disable) {
              case 'boolean':
                disable = item.disable
                break
              case 'function':
                disable = item.disable(this.graph)
                break
              case 'number':
                disable = Boolean(item.disable)
                break
              default:
                disable = false
                break
            }
            return {
              ...item,
              disable
            }
          })
        }))
        this.menuConf.visible = true
      },

      menuSelect(opts) {
        const {
          meta,
          position
        } = opts

        this.$emit('menu-item-select', {
          meta,
          position,
          createPoint: this.createPoint
        })

        this.menuConf.visible = false
      },

      createPoint() {
        console.log(this)
        this.graph.createPoint()
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
