/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */


import GraphNode from './GraphNode'

import GraphLink from './GraphLink'

import {
  direction
} from './types'

import {
  arrayReplace, vector
} from './utils'


class Graph {
  constructor(options) {
    
    const {
      nodeList = [],
      linkList = [],
      width,
      height,
      origin = null
    } = options
    
    this.nodeList = []
    this.linkList = []
    this.width = width
    this.height = height
    
    this.origin = origin || [
      Math.floor(width / 2),
      Math.floor(height / 2)
    ]
    
    this.initNode(nodeList)
    this.initLink(linkList)
  }
  
  pointMap() {
    const map = {}
    this.nodeList.forEach(point => {
      map[point.id] = point
    })
    return map
  }
  
  removeNode(node) {
    const idx = this.nodeList.indexOf(node)
    this.linkList.filter(link => {
      return link.start === node || link.end === node
    }).forEach(link => {
      this.removeLink(link)
    })
    this.nodeList.splice(idx, 1)
  }
  
  removeLink(link) {
    const idx = this.linkList.indexOf(link)
    this.linkList.splice(idx, 1)
  }
  
  addNode(options) {
    const node = options.constructor === GraphNode
      ? options
      : this.createNode(options)
    
    this.nodeList.push(node)
  }
  
  addLink(options) {
    const newLink = options.constructor === GraphLink
      ? options
      : this.createLink(options)
    
    const currentLink = this.linkList.find(item => {
      return item.start === newLink.start && item.end === newLink.end
    })
    
    if (currentLink) {
      currentLink.startAt = newLink.startAt
      currentLink.endAt = newLink.endAt
    } else if (newLink.start && newLink.end) {
      this.linkList.push(newLink)
    }
  }
  
  createNode(options) {
    const node = new GraphNode(options)
    node.graph = this
    return node
  }
  
  createLink(options) {
    const link = new GraphLink(options)
    link.graph = this
    return link
  }
  
  initNode(nodeList) {
    arrayReplace(this.nodeList, nodeList.map(node => this.createNode(node)))
  }
  
  initLink(linkList) {
    const list = []
    linkList.forEach(link => {
      
      const {
        startId = '',
        endId = '',
        startAt = [0, 0],
        endAt = [0, 0],
        meta = null
      } = link
      
      const pointMap = this.pointMap()
      
      const start = pointMap[startId]
      const end = pointMap[endId]
      
      if (start && end) {
        list.push(
          this.createLink({
            start,
            end,
            meta,
            startAt,
            endAt
          })
        )
      }
      
    })
    arrayReplace(this.linkList, list)
  }
  
  toLastNode(idx) {
    const nodeList = this.nodeList
    nodeList.splice(
      nodeList.length - 1, 0,
      ...nodeList.splice(idx, 1)
    )
  }
  
  originVector(position) {
    return vector(position)
      .minus(this.origin)
      .end
  }
  
  getPosition(vec) {
    return vector(vec)
      .add(this.origin)
      .end
  }
  
  toJson() {
    return {
      nodeList: this.nodeList.map(point => {
        return {
          id: point.id,
          width: point.width,
          height: point.height,
          x: point.x,
          y: point.y,
          meta: point.meta
        }
      }),
      linkList: this.linkList.map(edge => {
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
