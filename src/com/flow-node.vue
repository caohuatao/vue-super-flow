<!--
 * User: CHT
 * Date: 2020/5/5
 * Time: 11:13
-->
<template>
  <div
    :style="style"
    class="flow-node__page"
    :class="{isMouseOn}"
    tabindex="-1"
    @focus="flowNodeFocus"
    @blur="flowNodeBlur"
    @mouseenter="flowNodeMouseenter"
    @mouseleave="flowNodeMouseLeave"
    @mouseup="flowNodeMouseup"
    @mousedown="flowNodeMousedown"
    @dblclick="flowNodeDbClick"
    @contextmenu.prevent.stop>
    <header></header>
    <section></section>
    <div
      v-show="isFocus"
      v-for="item in 4"
      @mousedown.stop.prevent="evt => lineStart(evt, item)"
      :class="`side-line side-${item}`">
    </div>
    <span
      v-show="isFocus"
      v-for="item in 4"
      @mousedown.stop.prevent="evt => dotLineStart(evt, item)"
      :class="'side-dot dot-' + item">
      </span>
  </div>
</template>

<script>
  import flowMenu from './flow-menu'
  import { GRAPH_CONTACT_TYPES } from '@comp/flow/types'

  export default {
    props: {
      x: {
        type: Number,
        default: 0
      },
      y: {
        type: Number,
        default: 0
      },
      width: {
        type: Number,
        default: 150
      },
      height: {
        type: Number,
        default: 80
      },
      tier: {
        type: Number,
        default: 1
      },
      isCreateLine: {
        type: Boolean,
        default: false
      },
      isMoveNode: {
        type: Boolean,
        default: false
      }
    },
    components: {
      flowMenu
    },
    data() {
      return {
        menuVisible: false,
        isFocus: false,
        menuList: [
          {
            type: 'addRelation',
            label: '添加连线'
          }
        ],
        contextInfo: {
          clientX: 0,
          clientY: 0,
          offsetX: 0,
          offsetY: 0
        },
        GRAPH_CONTACT_TYPES,
        isMouseOn: false
      }
    },
    computed: {
      style() {
        return {
          width: this.width + 'px',
          height: this.height + 'px',
          left: this.x + 'px',
          top: this.y + 'px',
          zIndex: this.tier
        }
      }
    },
    mounted() {
      document.addEventListener('mousedown', this.docMousedown)
    },
    methods: {
      flowNodeFocus() {
        this.isFocus = true
      },

      flowNodeBlur() {
        this.isFocus = false
      },

      docMousedown() {
        this.menuVisible = false
      },

      lineStart(evt, idx) {
        if (!this.isFocus) return
        const {
          clientX,
          clientY,
          currentTarget
        } = evt

        const {
          top,
          left
        } = currentTarget.getBoundingClientRect()

        const result = {
          x: 0,
          y: 0
        }
        const w = this.width / 2
        const h = this.height / 2

        switch (idx) {
          case 1:
            result.y = -h
            result.x = clientX - left - w
            break
          case 2:
            result.x = w
            result.y = clientY - top - h
            break
          case 3:
            result.y = h
            result.x = clientX - left - w
            break
          case 4:
            result.x = -w
            result.y = clientY - top - h
            break
        }

        this.$emit('node-start', result)
      },

      dotLineStart(evt, idx) {
        const result = {
          x: 0,
          y: 0
        }
        const w = this.width / 2
        const h = this.height / 2

        switch (idx) {
          case 1:
            result.x = 0
            result.y = -h
            break
          case 2:
            result.x = w
            result.y = 0
            break
          case 3:
            result.x = 0
            result.y = h
            break
          case 4:
            result.x = -w
            result.y = 0
            break
        }

        this.$emit('node-start', result)
      },

      flowNodeMouseenter(evt) {
        if (this.isCreateLine) {
          const {
            clientX,
            clientY,
            currentTarget
          } = evt

          const {
            left,
            top
          } = currentTarget.getBoundingClientRect()

          const w = this.width / 2
          const h = this.height / 2
          const x = clientX - left - w
          const y = clientY - top - h

          const direction =
            Math.round(
              (((Math.atan2(x, y) * (180 / Math.PI)) + 180) / 90) + 3
            ) % 4


          const result = {
            x: 0,
            y: 0
          }

          switch (direction) {
            case 3:  // ↑
              result.x = x
              result.y = -h
              break
            case 2:  // →
              result.x = w
              result.y = y
              break
            case 1:  // ↓
              result.x = x
              result.y = h
              break
            case 0:  // ←
              result.x = -w
              result.y = y
              break
            default:
              break
          }

          this.$emit('node-enter', result)
        }
      },

      flowNodeMouseLeave() {
        this.isMouseOn = false
        if (this.isCreateLine) {
          this.$emit('node-leave')
        }
      },

      flowNodeMouseup() {
        if (this.isCreateLine) {
          this.$emit('node-end')
        }
      },

      flowNodeMousedown(evt) {
        this.$emit('node-down', evt)
      },

      flowNodeDbClick(evt) {
        this.$emit('node-db-click', evt)
      }
    }
  }
</script>

<style lang="less">
  .flow-node__page {
    transform        : translate(-50%, -50%);
    position         : absolute;
    box-shadow       : 1px 2px 6px rgba(0, 0, 0, 0.2);
    cursor           : pointer;
    border-radius    : 6px;
    background-color : #ffffff;

    &.isMouseOn {
      box-shadow : 1px 2px 6px rgba(0, 0, 0, 0.4);
    }

    &:focus {
      z-index : 2;
    }


    > header {
      @height          : 32px;
      @bg              : #1abc9c;
      @color           : #FFFFFF;

      border-radius    : 6px 6px 0 0;
      height           : @height;
      background-color : @bg;
      line-height      : @height;
      color            : @color;
    }

    > .side-line {
      @size    : 8px;
      @offset  : -5px;

      position : absolute;
      cursor   : crosshair;


      &.side-1 {
        top    : @offset;
        left   : 0;
        right  : 0;
        height : @size;
      }

      &.side-2 {
        right  : @offset;
        bottom : 0;
        width  : @size;
        top    : 0;
      }

      &.side-3 {
        bottom : @offset;
        left   : 0;
        right  : 0;
        height : @size;
      }

      &.side-4 {
        left   : @offset;
        width  : @size;
        top    : 0;
        bottom : 0;
      }
    }

    > .side-dot {
      @size            : 10px;

      position         : absolute;
      width            : @size;
      height           : @size;
      border-radius    : 50%;
      border           : 1px solid #dcdcdc;
      background-color : #ffffff;
      cursor           : crosshair;


      &.dot-1 {
        left : calc(50% - @size / 2);
        top  : -@size / 2;
      }

      &.dot-2 {
        top   : calc(50% - @size / 2);
        right : -@size / 2;
      }

      &.dot-3 {
        left   : calc(50% - @size / 2);
        bottom : -@size / 2;
      }

      &.dot-4 {
        top  : calc(50% - @size / 2);
        left : -@size / 2;
      }
    }
  }
</style>
