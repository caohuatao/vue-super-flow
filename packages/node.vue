<!--
 * User: CHT
 * Date: 2020/5/25
 * Time: 9:12
-->
<template>
  <div
    tabindex="-1"
    class="super-flow__node"
    :style="style"
    @mousedown="nodeMousedown"
    @mouseenter="nodeMouseenter"
    @mouseleave="nodeMouseleave"
    @mouseup="nodeMouseup"
    @contextmenu.prevent.stop>
    <slot>
      <div
        v-for="(dir, key) in direction"
        :class="`node-side node-side-${key}`"
        @mousedown.prevent.stop="evt => sideMousedown(evt, dir)">
      </div>
    </slot>
  </div>
</template>

<script>

  import {
    direction,
    directionVector
  } from './types'

  import {
    getOffset
  } from './utils'

  export default {
    props: {
      graph: Object,
      node: Object,
      index: Number,
      isMove: Boolean,
      isTemEdge: Boolean
    },
    data() {
      return {
        direction,
        offset: []
      }
    },
    computed: {
      style() {
        const {
          position,
          width,
          height
        } = this.node
        return {
          width: width + 'px',
          height: height + 'px',
          top: position[1] + 'px',
          left: position[0] + 'px'
        }
      }
    },
    methods: {
      nodeMousedown(evt) {
        const nodeList = this.graph.pointList
        nodeList.splice(
          nodeList.length - 1, 0,
          ...nodeList.splice(this.index, 1)
        )
        this.offset = [...getOffset(evt)]
        this.$emit('node-mousedown', this.node, this.offset)
      },

      nodeMouseenter(evt) {
        if(!this.isTemEdge) return
        const {endAt, direction} = this.node.getEndAt(getOffset(evt))
        this.$emit('node-mouseenter', evt, this.node, endAt, direction)
      },

      nodeMouseleave() {
        if(!this.isTemEdge) return
        this.$emit('node-mouseleave')
      },

      nodeMouseup() {
        if(!this.isTemEdge) return
        this.$emit('node-mouseup')
      },

      sideMousedown(evt, dir) {
        const startAt = getOffset(evt)

        switch (dir) {
          case direction.top:
            startAt[1] = 0
            break
          case direction.right:
            startAt[0] = this.node.width
            break
          case direction.bottom:
            startAt[1] = this.node.height
            break
          case direction.left:
            startAt[0] = 0
            break
        }

        this.$emit('side-mousedown', evt, this.node,  startAt, directionVector[dir])
      }
    }
  }
</script>

<style lang="less">
  .super-flow__node {
    box-shadow       : 1px 2px 8px rgba(0, 0, 0, .2);
    user-select      : none;

    position         : absolute;
    background-color : #ffffff;
    border           : 1px solid rgb(180, 180, 180);
    cursor           : move;
    z-index          : 1;
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
      box-shadow : 1px 2px 8px rgba(0, 0, 0, .4);
    }

    &.isSelect {
      z-index : 2;
    }
  }
</style>
