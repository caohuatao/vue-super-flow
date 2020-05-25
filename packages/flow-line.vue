<!--
 * User: CHT
 * Date: 2020/5/25
 * Time: 9:11
-->
<template>
  <canvas class="super-flow__line"></canvas>
</template>

<script>
  export default {
    props: {
      pointList: {
        type: Array,
        default: () => []
      },
      padding: {
        type: Number,
        default: 20
      }
    },
    data() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        inPath: false
      }
    },
    mounted() {
      this.ctx = this.$el.getContext('2d')
      this.draw()
      // document.addEventListener('mousemove', this.mousemove)
      // document.addEventListener('mouseleave', this.mouseleave)
    },
    beforeDestroy() {
      // document.removeEventListener('mousemove', this.mousemove)
      // document.removeEventListener('mouseleave', this.mouseleave)
    },
    methods: {
      draw() {
        const xList = this.pointList.map(item => item[0])
        const yList = this.pointList.map(item => item[1])


        this.top = Math.min(...yList) - this.padding
        this.right = Math.max(...xList) + this.padding
        this.bottom = Math.max(...yList) + this.padding
        this.left = Math.min(...xList) - this.padding

        this.pointList.forEach(point => {
          point[0] = Math.floor(point[0] - this.left)
          point[1] = Math.floor(point[1] - this.top)
        })

        this.changeStyle()
        this.drawLine()
        this.drawArrow()
        this.drawLine(10, 'rgba(0,0,0,0)')
      },

      changeStyle() {
        this.$el.width = this.right - this.left
        this.$el.height = this.bottom - this.top
        this.$el.style.top = this.top + 'px'
        this.$el.style.left = this.left + 'px'
      },

      drawLine(lineWidth = 2, strokeStyle = '#666666') {
        const ctx = this.ctx
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = strokeStyle
        this.pointList.forEach((point, idx) => {
          if (idx === 0) {
            ctx.moveTo(...point)
          } else {
            ctx.lineTo(...point)
            ctx.stroke()
          }
        })
        ctx.save()
      },

      drawArrow(size = 6, fillStyle = '#666666') {
        const len = this.pointList.length

        if (len < 2) return

        const start = this.pointList[len - 2]
        const end = this.pointList[len - 1]
        const ctx = this.ctx

        // 移动中心点
        ctx.translate(...end)

        // 箭头原方向垂直向下,
        // 算出直线偏离Y的角, 然后旋转 ,
        // rotate是顺时针旋转的, 所以加个负号
        let ang = Math.atan((end[0] - start[0]) / (end[1] - start[1]))
        ctx.beginPath()
        if (end[1] - start[1] >= 0) {
          ctx.rotate(-ang)
        } else {
          ctx.rotate(Math.PI - ang)// 加个180度，反过来
        }
        ctx.fillStyle = fillStyle
        ctx.lineTo(-size, -size * 2)
        ctx.lineTo(0, -size)
        ctx.lineTo(size, -size * 2)
        ctx.lineTo(0, 0)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      },

      getCoordinates(evt) {
        const {
          clientX,
          clientY
        } = evt

        const {
          top,
          left
        } = this.$el.getBoundingClientRect()
        return [clientX - left, clientY - top]
      },

      // isPointInStroke(evt) {
      //   const [x, y] = this.getCoordinates(evt)
      //   // return this.ctx.isPointInStroke(x, y)
      // },

      // mousemove(evt) {
      //   this.inPath = this.isPointInStroke(evt)
      // },
      //
      // mouseleave() {
      //   this.inPath = false
      // }
    },
    watch: {
      pointList() {
        this.draw()
      }
    },
  }
</script>

<style lang="less">

</style>
