/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */


import GraphNode from './GraphNode'
import GraphRelation from './GraphRelation'
import { find } from './utils'

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

  appendNode(options) {
    const node = options.constructor === GraphNode
      ? options
      : this.createNode(options)

    this.nodeList.push(node)
  }

  appendRelation(options) {
    const relation = options.constructor === GraphRelation
      ? options
      : this.createRelation(options)

    const currentRelation = find(this.relationList, item=> {
      return item.start === relation.start && item.end === relation.end
    })

    if(currentRelation) {
      currentRelation.startAt = relation.startAt
      currentRelation.endAt = relation.endAt
    } else {
      this.relationList.push(relation)
    }

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
