<!--
 * User: CHT
 * Date: 2020/6/17
 * Time: 8:56
-->
<template>
  <canvas class="auxiliary-line__canvas"></canvas>
</template>

<script>
  export default {
    props: {
      nodeList: {
        type: Array,
        default: () => []
      },
      moveNode: {
        type: [Object, null],
        default: () => ({})
      }
    },
    computed: {
      fixedNode() {
        return this.nodeList.filter(node => node !== this.moveNode)
      },
      moveNodeCenter() {
        if(this.moveNode) {
          return this.moveNode.center
        } else {
          return null
        }
      }
    },
    methods: {

    },
    watch: {
      moveNodeCenter() {

      }
    }
  }
</script>

<style lang="less">
  .auxiliary-line__canvas {

  }
</style>
