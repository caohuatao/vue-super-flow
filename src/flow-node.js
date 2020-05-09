/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 13:59
 */
import {prefixCls} from './types'
import {getOffset} from './utils'

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
    contextmenu(evt) {
  
      evt.stopPropagation()
      evt.preventDefault()
    }
  },
  render(h) {
    return h('div', {
      staticClass: prefixCls + '__node',
      style: {
        width: this.width + 'px',
        height: this.height + 'px',
        top: this.y + 'px',
        left: this.x + 'px'
      },
      on: {
        mousedown: this.mousedown,
        contextmenu: this.contextmenu
      }
    }, this.$slots.default)
  }
}
