<!--
 * User: CHT
 * Date: 2020/5/25
 * Time: 9:11
-->
<template>
  <canvas
    class="super-flow__line">
  </canvas>
</template>

<script>
  export default {
    props: {
      padding: {
        type: Number,
        default: 20
      },
      graph: Object,
      link: Object,
      linkColor: String,
      hoverColor: String
    },
    data() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        currentPointList: []
      }
    },
    mounted() {
      this.ctx = this.$el.getContext('2d')
      this.draw()
      this.graph.add('mousemove', this.rootMousemove)
    },
    beforeDestroy() {
      this.graph.remove('mousemove', this.rootMousemove)
    },
    computed: {
      inPath: {
        get() {
          return this.graph.mouseonLink === this.link
        },
        set(bol) {
          if (bol && !this.graph.mouseonNode) {
            this.graph.mouseonLink = this.link
            this.$el.style.zIndex = '1'
          } else if (this.inPath) {
            this.graph.mouseonLink = null
            this.$el.style.zIndex = '0'
          }
        }
      }
    },
    methods: {
      draw() {
        const {
          pointList,
          minX,
          minY,
          maxX,
          maxY
        } = this.link.pathPointList

        this.top = minY - this.padding
        this.right = maxX + this.padding
        this.bottom = maxY + this.padding
        this.left = minX - this.padding

        this.currentPointList = pointList.map(point => {
          return [
            Math.floor(point[0] - this.left),
            Math.floor(point[1] - this.top)
          ]
        })

        this.changeStyle()
        this.initLine()
      },

      changeStyle() {
        this.$el.width = this.right - this.left
        this.$el.height = this.bottom - this.top
        this.$el.style.top = this.top + 'px'
        this.$el.style.left = this.left + 'px'
      },

      initLine() {
        this.ctx.clearRect(0, 0, this.$el.width, this.$el.height)
        if (this.inPath) {
          const color = this.link.hoverColor || this.hoverColor
          this.drawLine(color)
          this.drawArrow(color)
        } else {
          const color = this.link.lineColor || this.linkColor
          this.drawLine(color)
          this.drawArrow(color)
        }
      },

      drawLine(strokeStyle) {
        const lineWidth = 2
        const ctx = this.ctx
        ctx.beginPath()

        if (this.link.dotted) {
          ctx.setLineDash([4, 4])
        }

        ctx.lineWidth = lineWidth
        ctx.strokeStyle = strokeStyle

        this.currentPointList.forEach((point, idx) => {
          if (idx === 0) {
            ctx.moveTo(...point)
          } else {
            ctx.lineTo(...point)
            ctx.stroke()
          }
        })
        ctx.save()
      },

      drawArrow(fillStyle) {
        const size = 4
        const len = this.currentPointList.length

        if (len < 2) return

        const start = this.currentPointList[len - 2]
        const end = this.currentPointList[len - 1]
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
          ctx.rotate(Math.PI - ang) // 加个180度，反过来
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

      isPointInStroke(evt) {
        const [x, y] = this.getCoordinates(evt)
        return this.link.isPointInLink([this.left + x, this.top + y])
      },

      rootMousemove({evt}) {
        this.inPath = this.isPointInStroke(evt)
        return this.inPath
      }
    },
    watch: {
      'link.pathPointList'() {
        this.draw()
      },
      inPath() {
        this.initLine()
      }
    }
  }
</script>

<style lang="less">
  .super-flow__line {
    position : absolute;
    z-index  : 0;

    &.inPath {
      cursor : pointer;
    }
  }
</style>
