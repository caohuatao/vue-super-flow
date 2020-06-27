<!--
 * User: CHT
 * Date: 2020/6/27
 * Time: 15:55
-->
<template>
  <canvas
    class="super-flow__mark-line"
    :width="width"
    :height="height">
  </canvas>
</template>

<script>
  export default {
    props: {
      width: {
        type: Number,
        default: 0
      },
      height: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  .super-flow__mark-line {
    position : absolute;
    z-index  : 0;
  }
</style>
