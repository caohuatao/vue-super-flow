/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */


import GraphNode from './GraphNode'
import GraphRelation from './GraphRelation'
import {find} from './utils'
import {direction} from './types'

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
  
  removeNode(node) {
    const idx = this.nodeList.indexOf(node)
    this.relationList.filter(relation => {
      return relation.start === node || relation.end === node
    }).forEach(relation => {
      this.removeRelation(relation)
    })
    this.nodeList.splice(idx, 1)
  }
  
  removeRelation(relation) {
    const idx = this.relationList.indexOf(relation)
    this.relationList.splice(idx, 1)
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
    
    const currentRelation = find(this.relationList, item => {
      return item.start === relation.start && item.end === relation.end
    })
    
    if (currentRelation) {
      currentRelation.startAt = relation.startAt
      currentRelation.endAt = relation.endAt
    } else {
      this.relationList.push(relation)
    }
    
  }
  
  createNode(options) {
    const node = new GraphNode(options)
    node.parent = this
    return node
  }
  
  createRelation(options) {
    const relation = new GraphRelation(options)
    relation.parent = this
    return relation
  }
  
  init(options = {}) {
    const {
      nodeList = [],
      relationList = []
    } = options
    
    this.initNode(nodeList)
    this.initRelation(relationList)
  }
  
  initNode(nodeList) {
    const list = []
    nodeList.forEach(node => {
      list.push(this.createNode(node))
    })
    this.nodeList.splice(0, this.nodeList.length, ...list)
  }
  
  initRelation(relationList) {
    const list = []
    relationList.forEach(relation => {
      
      const {
        startId = '',
        endId = '',
        meta = null,
        startAt = {
          x: 0,
          y: 0,
          direction: direction.top
        },
        endAt = {
          x: 0,
          y: 0,
          direction: direction.top
        }
      } = relation
      const nodeMap = this.nodeMap()
      
      const start = nodeMap[startId]
      const end = nodeMap[endId]
      
      if (start && end) {
        list.push(
          this.createRelation({
            start,
            end,
            meta,
            startAt,
            endAt
          })
        )
      }
    })
    this.relationList.splice(0, this.relationList.length, ...list)
  }
  
  toJson() {
    return {
      nodeList: this.nodeList.map(node => {
        return {
          id: node.id,
          width: node.width,
          height: node.height,
          x: node.x,
          y: node.y,
          meta: node.meta
        }
      }),
      relationList: this.relationList.map(relation => {
        return {
          startId: relation.start.id,
          endId: relation.end.id,
          meta: relation.meta,
          startAt: relation.startAt,
          endAt: relation.endAt
        }
      })
    }
  }
}

export default Graph
