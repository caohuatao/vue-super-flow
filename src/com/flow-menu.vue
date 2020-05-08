<!--
 * User: CHT
 * Date: 2020/5/5
 * Time: 10:24
-->
<template>
  <ul
    :style="style"
    class="flow-menu__page"
    v-show="visible">
    <li
      v-for="item in menuList"
      @mousedown.prevent.stop="itemClick(item)">
      {{item.label}}
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: true
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
    mounted() {
      this.$nextTick(() => {
        console.log(this.$el.clientHeight)
      })
    },
    computed: {
      style() {
        return {
          left: this.x + 'px',
          top: this.y + 'px'
        }
      }
    },
    methods: {
      itemClick(info) {
        this.$emit('item-click', {
          type: info.type,
          x: this.x,
          y: this.y
        })
        this.$emit('update:visible', false)
      }
    }
  }
</script>

<style lang="less">
  ul.flow-menu__page {
    @item-width      : 120px;
    @item-height     : 32px;

    background-color : #FFFFFF;
    box-shadow       : 1px 1px 6px rgba(0, 0, 0, 0.2);
    position         : absolute;
    width            : @item-width;
    /*text-align    : center;*/
    border-radius    : 4px;
    z-index          : 3;

    > li {
      width       : @item-width;
      line-height : @item-height;
      height      : @item-height;
      padding     : 0 16px;
      cursor      : pointer;

      &:hover {
        background-color : #dddddd;
      }
    }
  }
</style>
