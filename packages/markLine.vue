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
      },
      markLine: Array,
      markColor: String
    },
    mounted() {
      const ctx = this.$el.getContext('2d')


      const {top, left} = this.$el.getBoundingClientRect()
      const translateX = left.toString().split('.')[1] || 0
      const translateY = top.toString().split('.')[1] || 0
      console.log(top, left)
      console.log(
        top % 2 === 0 ? -0.5 : 0,
        left % 2 === 0 ? -0.5 : 0
      )
      ctx.translate(
        top % 2 === 0 ? -0.5 : 0,
        left % 2 === 0 ? -0.5 : 0
      )

      this.draw()
    },
    methods: {
      draw() {
        const ctx = this.$el.getContext('2d')
        ctx.clearRect(0, 0, this.width, this.height)
        ctx.strokeStyle = this.markColor
        ctx.lineWidth = 1
        ctx.setLineDash([4, 2])

        this.markLine.forEach(([start, end]) => {
          ctx.beginPath()
          ctx.moveTo(...start)
          ctx.lineTo(...end)
          ctx.stroke()
        })
      }
    },
    watch: {
      markLine() {
        this.draw()
      }
    }
  }
</script>

<style lang="less">
  .super-flow__mark-line {
    position : absolute;
    z-index  : 0;
  }
</style>
