/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */


import GraphNode from './GraphNode'
import GraphRelation from './GraphRelation'

class Graph {
  constructor(options) {
    this.nodeList = []
    this.relationList = []
    this.init(options)
  }

  nodeMap() {
    const map = {}
    this.nodeList.forEach(node => {
      map[node.id] = node
    })
    return map
  }

  relationMap() {
    const map = {}
    this.relationList.forEach(relation => {
      map[relation.id] = relation
    })
    return map
  }

  createNode(options) {
    return new GraphNode(options)
  }

  createRelation(options) {
    return new GraphRelation(options)
  }

  init(options = {}) {
    const {
      nodeList,
      relationList
    } = options

    nodeList.forEach(node => {
      this.nodeList.push(this.createNode(node))
    })

    const nodeMap = this.nodeMap()

    relationList.forEach(relation => {
      const {
        startId = '',
        endId = '',
        label = null,
        startAt = [],
        endAt = []
      } = relation
      const start = nodeMap[startId]
      const end = nodeMap[endId]
      if (start && end) {
        this.relationList.push(
          this.createRelation({
            start,
            end,
            label,
            startAt: {
              x: startAt[0],
              y: startAt[1]
            },
            endAt: {
              x: endAt[0],
              y: endAt[1]
            }
          })
        )
      }
    })
  }
}

export default Graph
