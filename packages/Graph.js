/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */

import GraphEvent from './GraphEvent'
import GraphNode from './GraphNode'
import GraphLink from './GraphLink'

import {
  arrayReplace,
  vector
} from './utils'


class Graph extends GraphEvent {
  constructor(options) {
    
    const {
      nodeList = [],
      linkList = [],
      width,
      height,
      origin = null
    } = options
    
    super()
    
    this.nodeList = []
    this.linkList = []
    this.width = width
    this.height = height
    
    this.origin = origin || [
      Math.floor(width / 2),
      Math.floor(height / 2)
    ]
    
    this.mouseonLink = null
    this.mouseonNode = null
    
    this.graphSelected = false
    this.maskBoundingClientRect = {}
    
    this.vertex = null
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
  
  createNode(options) {
    return new GraphNode(options, this)
  }
  
  createLink(options) {
    return new GraphLink(options, this)
  }
  
  getMatrix(isHorizontal = false) {
    const matrix = []
    
    this.vertex.colIndex = 0
    this.vertex.rowIndex = 0
    
    const nest = vertex => this.linkList
      .filter(link => link.start === vertex)
      .forEach((link, idx) => {
        const {end} = link
        end.colIndex = vertex.colIndex + 1
        end.rowIndex = vertex.rowIndex + idx
        nest(link.end)
      })
    
    nest(this.vertex)
    
    this.nodeList.forEach(node => {
      const colIndex = node.colIndex
      const list = matrix[colIndex]
        ? matrix[colIndex]
        : matrix[colIndex] = []
      list.push(node)
    })
    
    matrix.forEach(subList => {
      subList.sort((prev, next) => prev.rowIndex - next.rowIndex)
      subList.forEach((node, idx) => node.rowIndex = idx)
    })
    
    return matrix
  }
  
  vertical() {
    const DISTANCE = {x: 50, y: 80}
    
    if (this.nodeList.length && this.vertex) {
      
      const vertexX = this.vertex.center[0]
      
      this.linkList.forEach(link => {
        const {start, end} = link
        link.startAt = [Math.ceil(start.width / 2), start.height]
        link.endAt = [Math.ceil(end.width / 2), 0]
      })
      
      this.getMatrix().reduce((y, col) => {
        const maxHeight = Math.max(...col.map(node => node.height))
        const xList = []
        let width = vertexX
        
        xList.push(width)
        
        col.reduce((prevNode, currentNode) => {
          width += Math.ceil(prevNode.width / 2 + DISTANCE.x + currentNode.width / 2)
          xList.push(width)
          return currentNode
        })
        
        col.forEach((node, idx) => {
          const x = Math.ceil(xList[idx] - width / 2 + vertexX / 2)
          node.center = [x, y + maxHeight / 2]
        })
        
        return y + maxHeight + DISTANCE.y
      }, this.vertex.coordinate[1])
    }
  }
  
  horizontal() {
    const DISTANCE = {x: 80, y: 50}
    
    if (this.nodeList.length  && this.vertex) {
      const vertexY = this.vertex.center[1]
      
      this.linkList.forEach(link => {
        const {start, end} = link
        link.startAt = [start.width, Math.ceil(start.height / 2)]
        link.endAt = [0, Math.ceil(end.height / 2)]
      })
      
      this.getMatrix(true).reduce((x, col) => {
        const maxWidth = Math.max(...col.map(node => node.width))
        const yList = []
        let height = vertexY
        
        yList.push(height)
        
        col.reduce((prevNode, currentNode) => {
          height += Math.ceil(prevNode.height / 2 + DISTANCE.y + currentNode.height / 2)
          yList.push(height)
          return currentNode
        })
        
        col.forEach((node, idx) => {
          const y = Math.ceil(yList[idx] - height / 2 + vertexY / 2)
          node.center = [x + maxWidth / 2, y]
        })
        
        return x + maxWidth + DISTANCE.x
      }, this.vertex.coordinate[0])
    }
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
    if (this.mouseonLink === link) {
      this.mouseonLink = null
    }
  }
  
  toLastNode(idx) {
    const nodeList = this.nodeList
    nodeList.splice(
      nodeList.length - 1, 0,
      ...nodeList.splice(idx, 1)
    )
  }
  
  toJSON() {
    return {
      width: this.width,
      height: this.height,
      origin: this.origin,
      nodeList: this.nodeList.map(node => {
        return {
          id: node.id,
          width: node.width,
          height: node.height,
          vertex: node.vertex,
          coordinate: [...node.coordinate],
          meta: node.meta
        }
      }),
      linkList: this.linkList.map(link => {
        return {
          id: link.id,
          startId: link.start.id,
          endId: link.end.id,
          startAt: [...link.startAt],
          endAt: [...link.endAt],
          meta: link.meta
        }
      })
    }
  }
  
  selectAll() {
    const nodeList = this.nodeList
    const margin = 20
    
    this.maskBoundingClientRect = {
      top: Math.min(
        ...nodeList.map(
          node => node.center[1] - node.height / 2)
      ) - margin,
      
      right: Math.max(
        ...nodeList.map(
          node => node.center[0] + node.width / 2)
      ) + margin,
      
      bottom: Math.max(
        ...nodeList.map(
          node => node.center[1] + node.height / 2)
      ) + margin,
      
      left: Math.min(
        ...nodeList.map(
          node => node.center[0] - node.width / 2)
      ) - margin
    }
    
    this.graphSelected = true
  }
  
  getInterface() {
    return {
      nodeList: this.nodeList.map(node => node.getInterface()),
      linkList: this.linkList.map(link => link.getInterface()),
      addNode: this.addNode.bind(this),
      addLink: this.addLink.bind(this),
      horizontal: this.horizontal.bind(this),
      vertical: this.vertical.bind(this),
      toJSON: this.toJSON.bind(this),
      selectAll: this.selectAll.bind(this)
    }
  }
}

export default Graph
