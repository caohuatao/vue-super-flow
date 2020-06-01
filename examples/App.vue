<template>
  <div id="app">
    <div class="container">

      <header>

      </header>

      <nav>
        <el-form
          size="small"
          label-position="left"
          label-width="80px">

          <el-form-item label="width：">
            {{conf.width}}
          </el-form-item>

          <el-form-item label="height：">
            {{conf.height}}
          </el-form-item>

          <el-form-item label="origin：">
            {{conf.origin.toString()}}
          </el-form-item>
        </el-form>
      </nav>

      <section>
        <super-flow
          :graph-menu="graphMenuList"
          :node-menu="nodeMenuList"
          :width="conf.width"
          :height="conf.height"
          :origin="conf.origin"
          :enter-intercept="enterIntercept"
          :output-intercept="outputIntercept">
          <template v-slot:node="{node}">
            <div :class="`flow-node flow-node-${node.meta.prop}`">
              <header>
                {{node.meta.name}}
              </header>
              <section></section>
            </div>
          </template>
        </super-flow>
      </section>

    </div>

  </div>
</template>

<script>
  import SuperFlow from '../packages/index'

  export default {
    data() {
      return {
        graphMenuList: [
          [
            {
              prop: 'start',
              label: '开始节点',
              disable(graph) {
                return !!graph.nodeList.find(
                  point => point.meta.prop === 'start'
                )
              },
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 100,
                  height: 80,
                  coordinate: coordinate,
                  meta: {
                    prop: 'start',
                    name: '开始节点'
                  }
                })
              }
            },
            {
              prop: 'approval',
              label: '审批节点',
              disable: false,
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 200,
                  height: 100,
                  coordinate: coordinate,
                  meta: {
                    prop: 'approval',
                    name: '审批节点'
                  }
                })
              }
            },
            {
              prop: 'cc',
              label: '抄送节点',
              disable: false,
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 200,
                  height: 100,
                  coordinate: coordinate,
                  meta: {
                    prop: 'cc',
                    name: '抄送节点'
                  }
                })
              }
            },
            {
              prop: 'end',
              label: '结束节点',
              disable(graph) {
                return !!graph.nodeList.find(point => point.meta.prop === 'end')
              },
              selected(graph, coordinate) {
                graph.addNode({
                  id: Math.random().toString(32),
                  width: 80,
                  height: 50,
                  coordinate: coordinate,
                  meta: {
                    prop: 'end',
                    name: '结束节点'
                  }
                })
              }
            }
          ],
          [
            {
              prop: 'vertical',
              label: '竖向对齐',
              selected(graph, coordinate) {}
            },
            {
              type: 'horizontal',
              label: '横向对齐',
              selected(graph, coordinate) {

              }
            }
          ]
        ],
        nodeMenuList: [
          [
            {
              prop: 'remove',
              label: '删除',
              disable: false,
              hidden(node) {
                return node.meta.prop === 'start'
              },
              selected(node, coordinate) {
                node.remove()
              }
            }
          ]
        ],
        conf: {
          origin: [2000, 1500],
          width: 4000,
          height: 3000
        }
      }
    },
    mounted() {
    },
    methods: {
      enterIntercept(formNode, toNode, graph) {
        const formType = formNode.meta.prop
        switch (toNode.meta.prop) {
          case 'start':
            return false
          case 'approval':
            return [
              'start',
              'approval',
              'cc'
            ].includes(formType)
          case 'end':
            return [
              'approval',
              'cc'
            ].includes(formType)
          default:
            return true
        }
      },
      outputIntercept(node, graph) {
        return true
      }
    },
    components: {
      SuperFlow
    }
  }
</script>

<style lang="less">
  html, body {
    width   : 100%;
    height  : 100%;
    margin  : 0;
    padding : 0;
  }

  #app {
    width  : 100%;
    height : 100%;

    > .container {

      @header-height : 50px;
      @nav-width     : 300px;
      width          : 100%;
      height         : 100%;

      > header,
      > nav,
      > section {
        box-sizing : border-box;
      }

      > header {
        float         : left;
        width         : 100%;
        border-bottom : 1px solid #dddddd;
        height        : @header-height;
      }

      > nav {
        float        : left;
        width        : @nav-width;
        height       : calc(100% - @header-height);
        border-right : 1px solid #dddddd;
        overflow     : auto;

        > .el-form {
          padding : 20px 30px;
        }
      }

      > section {
        float  : left;
        width  : calc(100% - @nav-width);
        height : calc(100% - @header-height);
      }

      .super-flow__node {
        .flow-node {
          > header {
            font-size        : 14px;
            height           : 32px;
            line-height      : 32px;
            padding          : 0 12px;
            color            : #ffffff;

          }

          &.flow-node-start {
            >header {
              background-color : #55abfc;
            }
          }

          &.flow-node-approval {
            >header {
              background-color : rgba(188, 181, 58, 0.76);
            }
          }

          &.flow-node-cc {
            >header {
              background-color : #30b95c;
            }
          }

          &.flow-node-end {
            >header {
              height: 50px;
              line-height: 50px;
              background-color : rgb(0, 0, 0);
            }
          }
        }
      }
    }
  }


</style>
