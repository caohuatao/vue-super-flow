/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:18
 */
import {prefixCls} from './types'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Array,
      default: () => []
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
  computed: {
    position() {
    
    }
  },
  methods: {
    renderItem(h) {
      const list = []
      this.menuList.forEach(subList => {
        subList.forEach(item => {
          list.push(h('li', {
            staticClass: prefixCls + '__menu-item',
            on: {
              mousedown: () => {
                if(item.isHandler) {
                  this.$emit('handler', item)
                } else {
                  this.$emit('item-click', {
                    meta: item,
                    x: this.x,
                    y: this.y,
                    width: item.width,
                    height: item.height
                  })
                }
                this.$emit('update:visible', false)
              }
            }
          }, this.$slots.default || [
            h('span', {
              staticClass: prefixCls + '__menu-item-icon'
            }),
            h('span', {
              staticClass: prefixCls + '__menu-item-content'
            }, item.label)
          ]))
        })
        list.push(h('li', {
          staticClass: prefixCls + '__menu-line'
        }))
      })
      
      return list
    }
  },
  watch: {
    visible() {
      if (this.visible) {
        this.$nextTick(() => this.$el.focus())
      }
    }
  },
  render(h) {
    return h('ul', {
      staticClass: prefixCls + '__menu',
      attrs: {
        tabindex: '-1'
      },
      on: {
        blur: () => {
          if (this.visible) {
            this.$emit('update:visible', false)
          }
        }
      },
      style: {
        display: this.visible ? 'block' : 'none',
        top: this.y + 'px',
        left: this.x + 'px'
      }
    }, this.renderItem(h))
  }
}
