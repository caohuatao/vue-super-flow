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
    @mouseenter="nodeMouseEnter"
    @mouseleave="nodeMouseLeave"
    @mouseup="nodeMouseup"
    @contextmenu.prevent.stop>
    <slot>
      <div
        v-for="(dir, key) in direction"
        :class="`node-side node-side-${key}`"
        @mousedown="evt => sideMousedown(evt, dir)">
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
    getOffset,
    pauseEvent
  } from './utils'

  export default {
    props: {
      node: Object,
      index: Number,
      menuConf: Object,
      temRelationConf: Object,
      moveNodeConf: Object
    },
    data() {
      return {
        direction,
        graph: this.node.parent
      }
    },
    computed: {
      style() {
        return {
          width: this.node.width + 'px',
          height: this.node.height + 'px',
          top: this.node.y + 'px',
          left: this.node.x + 'px'
        }
      }
    },
    methods: {
      nodeMousedown(evt) {
        const nodeList = this.graph.nodeList
        const conf = this.moveNodeConf
        nodeList.splice(nodeList.length - 1, 0, ...nodeList.splice(this.index, 1))
        conf.isDown = true
        conf.offset = getOffset(evt)
        conf.node = this.node
        this.menuConf.visible = false
        this.$emit('updateMousemoveFun', this.moveNode)
        pauseEvent(evt)
      },

      moveNode(evt) {
        const {x, y} = getOffset(evt)
        const {node, offset} = this.moveNodeConf
        node.x = x - offset.x
        node.y = y - offset.y
      },

      moveRelation(evt) {
        const {x, y} = getOffset(evt)
        const {relation} = this.temRelationConf
        this.temRelationConf.isMove = true
        relation.moveInfo.x = x
        relation.moveInfo.y = y
      },

      nodeMouseEnter(evt) {
        const conf = this.temRelationConf
        if (conf.isMove) {
          conf.relation.end = this.node
          conf.relation.endAt = this.node.getEndAt(getOffset(evt))
        }
      },

      nodeMouseLeave() {
        const conf = this.temRelationConf
        if (conf.isMove) {
          conf.relation.end = null
        }
      },

      nodeMouseup() {
        const conf = this.temRelationConf
        if (conf.isMove && conf.relation.start !== this.node) {
          this.graph.appendRelation(conf.relation)
        }
      },

      sideMousedown(evt, dir) {
        const offset = getOffset(evt)
        const conf = this.temRelationConf

        offset.direction = directionVector[dir]
        switch (dir) {
          case direction.top:
            offset.y = 0
            break
          case direction.right:
            offset.x = this.node.width
            break
          case direction.bottom:
            offset.y = this.node.height
            break
          case direction.left:
            offset.x = 0
            break
        }

        conf.visible = true
        conf.relation = this.graph.createRelation({
          start: this.node,
          startAt: offset
        })
        this.$emit('updateMousemoveFun', this.moveRelation)
        pauseEvent(evt)
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
