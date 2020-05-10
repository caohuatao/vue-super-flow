/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 13:59
 */

import {
  direction,
  prefixCls,
  directionVector
} from './types'

import {
  getOffset
} from './utils'

export default {
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  methods: {

    mousedown(evt) {
      this.$emit('nodeMouseDown', getOffset(evt))
    },

    nodeFocus() {
      this.$emit('nodeFocus')
    },

    contextmenu(evt) {
      evt.stopPropagation()
      evt.preventDefault()
    },

    mouseenter(evt) {
      this.$emit('nodeMouseEnter', getOffset(evt))
    },

    mouseleave(evt) {
      this.$emit('nodeMouseLeave')
    },

    mouseup(evt) {
      this.$emit('nodeMouseup')
    },

    sideMousedown(evt, dir) {
      const offset = getOffset(evt)
      offset.direction = directionVector[dir]()
      switch (dir) {
        case direction.top:
          offset.y = 0
          break
        case direction.right:
          offset.x = this.width
          break
        case direction.bottom:
          offset.y = this.height
          break
        case direction.left:
          offset.x = 0
          break
      }
      this.$emit('nodeSideMousedown', offset)
      evt.stopPropagation()
      evt.preventDefault()
    }
  },
  render(h) {
    return h('div', {
      staticClass: prefixCls + '__node',
      attrs: {
        tabindex: -1
      },
      style: {
        width: this.width + 'px',
        height: this.height + 'px',
        top: this.y + 'px',
        left: this.x + 'px'
      },
      on: {
        mousedown: this.mousedown,
        focus: this.nodeFocus,
        contextmenu: this.contextmenu,
        mouseenter: this.mouseenter,
        mouseleave: this.mouseleave,
        mouseup: this.mouseup
      }
    }, [
      this.$slots.default,
      Object.keys(direction).map(key =>
        h('div', {
          staticClass: `node-side node-side-${key}`,
          on: {
            mousedown: evt => this.sideMousedown(evt, direction[key])
          }
        })
      )
    ])
  }
}
