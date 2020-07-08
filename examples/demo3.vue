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
        @mousedown="evt => nodeItemMouseDown(evt, item)">
        {{item.label}}
      </span>
    </div>
    <div class="flow-container">
      <super-flow
        ref="superFlow"
        :graph-menu="graphMenu"
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
        graphMenu: [
          [
            {
              label: '节点1',
              disable(graph) {
                return !!graph.nodeList.find(node => node.meta.label === '1')
              },
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  coordinate,
                  meta: {
                    label: '1',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            },
            {
              label: '节点2',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  coordinate,
                  meta: {
                    label: '2',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            },
            {
              label: '节点3',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  coordinate,
                  meta: {
                    label: '3',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            }
          ],
          [
            {
              label: '节点4',
              selected(graph, coordinate) {
                graph.addNode({
                  width: 120,
                  height: 40,
                  coordinate,
                  meta: {
                    label: '4',
                    value: [1, 2, 3, 4]
                  }
                })
              }
            }
          ],
          [
            {
              label: '全选',
              selected: graph => {
                graph.selectAll()
              }
            }
          ]
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
      this.$once('hook:beforeDestroy', ()=> {
        document.removeEventListener('mousemove', this.docMousemove)
        document.removeEventListener('mouseup', this.docMouseup)
      })
    },
    methods: {
      flowNodeClick(meta) {
        console.log(`编辑 ${meta.label}`)
      },
      docMousemove() {

      },
      docMouseup() {

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

        Object.assign(this.dragConf, {
          offsetLeft: clientX - left,
          offsetTop: clientY - top,
          info,
          ele: currentTarget,
          isDown: true
        })
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

      > .node-item {
        display          : inline-block;
        height           : 40px;
        width            : 120px;
        margin-top       : 20px;
        background-color : #FFFFFF;
        line-height      : 40px;
        box-shadow       : 1px 1px 4px rgba(0, 0, 0, 0.3);
        border-radius    : 4px;
        cursor           : pointer;
        user-select      : none;

        &:hover {
          box-shadow : 1px 1px 8px rgba(0, 0, 0, 0.4);
        }
      }
    }

    > .flow-container {
      width  : calc(100% - @list-width);
      float  : left;
      height : 100%;
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
  }
</style>
