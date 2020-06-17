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
  
  insetGrouping(isHorizontal = false) {
    const depthGrouping = []
    const depth = (vertex) => {
      this.linkList.forEach((link, idx) => {
        const {start, end} = link
        if (start === vertex) {
          end.depth = vertex.depth + 1
          if (isHorizontal) {
            link.startAt = [start.width, Math.ceil(start.height / 2)]
            link.endAt = [0, Math.ceil(end.height / 2)]
          } else {
            link.startAt = [Math.ceil(start.width / 2), start.height]
            link.endAt = [Math.ceil(end.width / 2), 0]
          }
          depth(link.end)
        }
      })
    }
    const insetGrouping = (dep, node) => {
      const current = depthGrouping[dep]
      if (current) {
        current.add(node)
      } else {
        depthGrouping[dep] = new Set([node])
      }
    }
    depth(this.vertex)
    insetGrouping(0, this.vertex)
    this.nodeList.forEach(node => insetGrouping(node.depth, node))
    return depthGrouping
  }
  
  vertical() {
    const DISTANCE = {x: 50, y: 100}
    
    if (this.vertex && this.nodeList.length && this.linkList.length) {
      this.vertex.depth = 0
      const [vertexX, vertexY] = this.vertex.center
      this.insetGrouping()
        .slice(1)
        .reduce((y, currentSet) => {
          const currentList = [...currentSet]
          const maxHeight = Math.max(...currentList.map(node => node.height))
          const currentY = y + maxHeight / 2 + DISTANCE.y
          const xList = []
          let width = vertexX
          
          xList.push(width)
          
          currentList.reduce((prevNode, currentNode) => {
            width += Math.ceil(prevNode.width / 2 + DISTANCE.x + currentNode.width / 2)
            xList.push(width)
            return currentNode
          })
          
          currentList.forEach((node, idx) => {
            const x = Math.ceil(xList[idx] - width / 2 + vertexX / 2)
            node.center = [x, currentY]
          })
          
          return y + maxHeight + DISTANCE.y
        }, vertexY + this.vertex.height / 2)
    }
  }
  
  horizontal() {
    const DISTANCE = {x: 100, y: 50}
    
    
    if (this.vertex && this.nodeList.length && this.linkList.length) {
      this.vertex.depth = 0
      const [vertexX, vertexY] = this.vertex.center
      
      this.insetGrouping(true)
        .slice(1)
        .reduce((x, currentSet) => {
          const currentList = [...currentSet]
          const maxWidth = Math.max(...currentList.map(node => node.width))
          const currentX = x + maxWidth / 2 + DISTANCE.x
          const yList = []
          let height = vertexY
          
          yList.push(height)
          
          currentList.reduce((prevNode, currentNode) => {
            height += Math.ceil(prevNode.height / 2 + DISTANCE.y + currentNode.height / 2)
            yList.push(height)
            return currentNode
          })
          
          currentList.forEach((node, idx) => {
            const y = Math.ceil(yList[idx] - height / 2 + vertexY / 2)
            node.center = [currentX, y]
          })
          
          return x + maxWidth + DISTANCE.x
        }, vertexX + this.vertex.width / 2)
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
  
  interface() {
    return {
      nodeList: this.nodeList.map(node => node.interface()),
      linkList: this.linkList.map(link => link.interface()),
      addNode: this.addNode.bind(this),
      addLink: this.addLink.bind(this),
      removeNode: this.removeNode.bind(this),
      removeLink: this.removeLink.bind(this),
      horizontal: this.horizontal.bind(this),
      vertical: this.vertical.bind(this),
      toJSON: this.toJSON.bind(this),
      selectAll: this.selectAll.bind(this)
    }
  }
}

export default Graph
