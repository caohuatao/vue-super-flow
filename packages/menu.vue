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
    <template v-for="subList in list">
      <li
        class="super-flow__menu-item"
        v-for="subItem in subList"
        :class="{'is-disabled': subItem.disable(source)}"
        @click="select(subItem)">
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
      list: {
        type: Array,
        default: () => []
      },
      position: {
        type: Array,
        default: () => [0, 0]
      },
      source: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      style() {
        return {
          display: this.visible ? 'block' : 'none',
          left: this.position[0] + 'px',
          top: this.position[1] + 'px'
        }
      }
    },
    methods: {
      select(subItem) {
        if (subItem.disable(this.source)) return
        this.$emit('update:visible', false)
        subItem.selected(this.source, this.position)
      }
    },
    watch: {
      visible() {
        if (this.visible) {
          this.$nextTick(() => this.$el.focus())
        }
      }
    }
  }
</script>

<style lang="less">
  .super-flow__menu {
    @menu-width      : 180px;
    @height          : 26px;

    position         : absolute;
    outline          : none;
    width            : @menu-width;
    padding          : 4px 0;
    border           : 1px solid rgb(180, 180, 180);
    box-shadow       : 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    overflow         : hidden;
    border-radius    : 3px;
    z-index          : 10;
    background-color : #ffffff;
    margin           : 0;


    &-item {
      @padding    : 4px;
      @width      : @menu-width - 2px - @padding * 2;
      @icon-size  : @height;


      user-select : none;
      box-sizing  : content-box;

      width       : @width;
      min-height  : @height;

      cursor      : pointer;
      font-size   : 0;
      position    : relative;
      padding     : 0 @padding;

      display     : flex;

      &:last-child {
        margin : 0;

        &:after {
          display : none;
        }
      }

      &:hover {
        background-color : #eeeeee;
      }

      &-icon {
        float  : left;
        width  : @icon-size;
        height : @icon-size;
      }

      &-content {
        float       : left;
        display     : inline-block;
        color       : #333333;
        font-size   : 14px;
        line-height : @height;
        width       : @width - @icon-size;
      }

      > div {
        position : absolute;
        top      : 0;
        left     : 0;
        right    : 0;
        bottom   : 0;
      }

      &.is-disabled {
        cursor : no-drop;

        > span {
          color : #999999;
        }

        &:hover {
          background-color : transparent;
        }
      }
    }

    &-line {
      width         : 100%;
      margin        : 4px 0;
      border-bottom : 1px solid rgb(180, 180, 180);
      height        : 0;

      &:last-child {
        display : none;
      }
    }
  }
</style>
