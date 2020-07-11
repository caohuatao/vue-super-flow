<!--
 * User: CHT
 * Date: 2020/6/28
 * Time: 17:48
-->
<template>
  <div class="super-flow-demo3">
    <div class="node-container">
      <span
        class="node-item"
        v-for="item in nodeItemList"
        @mousedown="evt => nodeItemMouseDown(evt, item.value)">
        {{item.label}}
      </span>
    </div>
    <div
      class="flow-container"
      ref="flowContainer">
      <super-flow
        ref="superFlow"
        :node-menu="nodeMenu"
        :link-menu="linkMenu">
        <template v-slot:node="{meta}">
          <div
            class="flow-node">
            {{meta.label}}
          </div>
        </template>
      </super-flow>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dragConf: {
          isDown: false,
          isMove: false,
          offsetTop: 0,
          offsetLeft: 0,
          clientX: 0,
          clientY: 0,
          ele: null,
          info: null
        },
        nodeItemList: [
          {
            label: '节点1',
            value: {
              width: 120,
              height: 40,
              meta: {
                label: '1'
              }
            }
          },
          {
            label: '节点2',
            value: {
              width: 120,
              height: 40,
              meta: {
                label: '2'
              }
            }
          },
          {
            label: '节点3',
            value: {
              width: 120,
              height: 40,
              meta: {
                label: '3'
              }
            }
          },
          {
            label: '节点4',
            value: {
              width: 120,
              height: 40,
              meta: {
                label: '4'
              }
            }
          }
        ],
        nodeMenu: [
          [
            {
              label: '删除',
              selected: node => {
                node.remove()
              }
            },
            {
              label: '编辑',
              selected: node => {
                this.flowNodeClick(node.meta)
              }
            }
          ]
        ],
        linkMenu: [
          [
            {
              label: '删除',
              selected: link => {
                link.remove()
              }
            }
          ]
        ]
      }
    },
    mounted() {
      document.addEventListener('mousemove', this.docMousemove)
      document.addEventListener('mouseup', this.docMouseup)
      this.$once('hook:beforeDestroy', () => {
        document.removeEventListener('mousemove', this.docMousemove)
        document.removeEventListener('mouseup', this.docMouseup)
      })
    },
    methods: {
      flowNodeClick(meta) {
        console.log(`编辑 ${meta.label}`)
      },

      docMousemove({clientX, clientY}) {
        const conf = this.dragConf

        if (conf.isMove) {

          conf.ele.style.top = clientY - conf.offsetTop + 'px'
          conf.ele.style.left = clientX - conf.offsetLeft + 'px'

        } else if (conf.isDown) {

          // 鼠标移动量大于 5 时 移动状态生效
          conf.isMove =
            Math.abs(clientX - conf.clientX) > 5
            || Math.abs(clientY - conf.clientY) > 5

        }
      },

      docMouseup({clientX, clientY}) {
        const conf = this.dragConf
        conf.isDown = false

        if (conf.isMove) {
          const {
            top,
            right,
            bottom,
            left
          } = this.$refs.flowContainer.getBoundingClientRect()

          // 判断鼠标是否进入 flow container
          if (
            clientX > left
            && clientX < right
            && clientY > top
            && clientY < bottom
          ) {

            // 获取拖动元素左上角相对 super flow 区域原点坐标
            const coordinate = this.$refs.superFlow.getMouseCoordinate(
              clientX - conf.offsetLeft,
              clientY - conf.offsetTop
            )

            // 添加节点
            this.$refs.superFlow.addNode({
              coordinate,
              ...conf.info
            })

          }

          conf.isMove = false
        }

        if (conf.ele) {
          conf.ele.remove()
          conf.ele = null
        }
      },

      nodeItemMouseDown(evt, info) {
        const {
          clientX,
          clientY,
          currentTarget
        } = evt

        const {
          top,
          left
        } = evt.currentTarget.getBoundingClientRect()

        const conf = this.dragConf
        const ele = currentTarget.cloneNode(true)

        Object.assign(this.dragConf, {
          offsetLeft: clientX - left,
          offsetTop: clientY - top,
          clientX: clientX,
          clientY: clientY,
          info,
          ele,
          isDown: true
        })

        ele.style.position = 'fixed'
        ele.style.margin = '0'
        ele.style.top = clientY - conf.offsetTop + 'px'
        ele.style.left = clientX - conf.offsetLeft + 'px'

        this.$el.appendChild(this.dragConf.ele)
      }
    }
  }
</script>

<style lang="less">
  .super-flow-demo3 {
    width            : 100%;
    height           : 800px;
    margin           : 0 auto;
    background-color : #f5f5f5;

    @list-width      : 200px;

    > .node-container {
      width            : @list-width;
      float            : left;
      height           : 100%;
      text-align       : center;
      background-color : #FFFFFF;
    }

    > .flow-container {
      width    : calc(100% - @list-width);
      float    : left;
      height   : 100%;
      overflow : hidden;
    }

    .super-flow__node {
      .flow-node {
        width       : 100%;
        height      : 100%;
        line-height : 40px;
        padding     : 0 6px;
        font-size   : 12px;
      }
    }


    .node-item {
      @node-item-height : 30px;

      font-size         : 14px;
      display           : inline-block;
      height            : @node-item-height;
      width             : 120px;
      margin-top        : 20px;
      background-color  : #FFFFFF;
      line-height       : @node-item-height;
      box-shadow        : 1px 1px 4px rgba(0, 0, 0, 0.3);
      cursor            : pointer;
      user-select       : none;
      text-align        : center;

      &:hover {
        box-shadow : 1px 1px 8px rgba(0, 0, 0, 0.4);
      }
    }
  }
</style>
