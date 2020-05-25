<!--
 * User: CHT
 * Date: 2020/5/25
 * Time: 9:12
-->
<template>
  <ul
    tabindex="-1"
    class="super-flow__menu"
    @blur="$emit('update:visible', false)"
    @contextmenu.prevent.stop
    :style="style">
    <template v-for="subList in menuList">
      <li
        class="super-flow__menu-item"
        v-for="subItem in subList"
        @click="menuItemClick(subItem)">
        <slot>
          <span class="super-flow__menu-item-icon"></span>
          <span class="super-flow__menu-item-content">
            {{subItem.label}}
          </span>
        </slot>
      </li>
      <li class="super-flow__menu-line"></li>
    </template>
  </ul>
</template>

<script>
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
      style() {
        return {
          display: this.visible ? 'block' : 'none',
          top: this.y + 'px',
          left: this.x + 'px'
        }
      }
    },
    methods: {
      menuItemClick(item) {
        if (item.isHandler) {
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
      },
    },
    watch: {
      visible() {
        if (this.visible) {
          this.$nextTick(() => this.$el.focus())
        }
      }
    },
  }
</script>

<style lang="less">

</style>
