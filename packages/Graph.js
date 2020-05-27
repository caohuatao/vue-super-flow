/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */


import GraphPoint from './GraphPoint'
import GraphEdge from './GraphEdge'
import {direction} from './types'

class Graph {
  constructor(options) {
    this.pointList = []
    this.edgeList = []
    this.init(options)
  }
  
  pointMap() {
    const map = {}
    this.pointList.forEach(point => {
      map[point.id] = point
    })
    return map
  }
  
  edgeMap() {
    const map = {}
    this.edgeList.forEach(edge => {
      map[edge.id] = edge
    })
    return map
  }
  
  removePoint(node) {
    const idx = this.pointList.indexOf(node)
    this.edgeList.filter(edge => {
      return edge.start === node || edge.end === node
    }).forEach(edge => {
      this.removeEdge(edge)
    })
    this.pointList.splice(idx, 1)
  }
  
  removeEdge(edge) {
    const idx = this.edgeList.indexOf(edge)
    this.edgeList.splice(idx, 1)
  }
  
  insertPoint(options) {
    const node = options.constructor === GraphPoint
      ? options
      : this.createPoint(options)
    
    this.pointList.push(node)
  }
  
  insertEdge(options) {
    const edge = options.constructor === GraphEdge
      ? options
      : this.createEdge(options)
    
    const currentEdge = this.edgeList.find(item => {
      return item.start === edge.start && item.end === edge.end
    })
    
    if (currentEdge) {
      currentEdge.startAt = edge.startAt
      currentEdge.endAt = edge.endAt
    } else {
      this.edgeList.push(edge)
    }
  }
  
  createPoint(options) {
    const point = new GraphPoint(options)
    point.parent = this
    return point
  }
  
  createEdge(options) {
    const edge = new GraphEdge(options)
    edge.parent = this
    return edge
  }
  
  init(options = {}) {
    const {
      pointList = [],
      edgeList = []
    } = options
    
    this.initPoint(pointList)
    this.initEdge(edgeList)
  }
  
  initPoint(pointList) {
    const list = []
    pointList.forEach(node => {
      list.push(this.createPoint(node))
    })
    this.pointList.splice(0, this.pointList.length, ...list)
  }
  
  initEdge(edgeList) {
    const list = []
    edgeList.forEach(relation => {
      
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
      const pointMap = this.pointMap()
      
      const start = pointMap[startId]
      const end = pointMap[endId]
      
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
    this.edgeList.splice(0, this.edgeList.length, ...list)
  }
  
  toJson() {
    return {
      pointList: this.pointList.map(point => {
        return {
          id: point.id,
          width: point.width,
          height: point.height,
          x: point.x,
          y: point.y,
          meta: point.meta
        }
      }),
      edgeList: this.edgeList.map(edge => {
        return {
          startId: edge.start.id,
          endId: edge.end.id,
          meta: edge.meta,
          startAt: edge.startAt,
          endAt: edge.endAt
        }
      })
    }
  }
}

export default Graph
