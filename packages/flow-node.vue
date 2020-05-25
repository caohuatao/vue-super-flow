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
    @contextmenu="showNodeMenu"
    @mouseenter="nodeMouseEnter"
    @mouseleave="nodeMouseLeave"
    @mouseup="nodeMouseup">
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
    directionVector,
    menuHandler
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
        graph: this.node.parent,
        nodeMenuList: [
          [
            {
              label: '创建连线',
              type: menuHandler.nodeConnection,
              isHandler: true
            }
          ],
          [
            {
              label: '删除',
              type: menuHandler.nodeDelete,
              isHandler: true
            }
          ]
        ]
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
        nodeList.splice(nodeList.length - 1,
          0,
          nodeList.splice(this.index, 1)[0]
        )
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

      showNodeMenu(evt) {
        this.menuConf.list = this.nodeMenuList
        this.menuConf.data = this.node
        this.menuConf.open(evt)
        pauseEvent(evt)
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

</style>
