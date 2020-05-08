/**
 * User: CHT
 * Date: 2020/5/5
 * Time: 13:53
 */


import generateConnectionPoints from '@comp/flow/connection-straight'

function uuid(props = {}) {
  
  const {
    before = '',
    after = '',
    radix = 36
  } = props
  
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const charsLen = chars.length
  let uuid = []
  const len = 8
  for (let i = 0; i < len; i++) {
    uuid[i] = chars[0 | Math.random() * charsLen]
  }
  return before + Date.now().toString(radix) + uuid.join('') + after
}

// 节点
class GraphNode {
  constructor(options) {
    const {
      id = uuid(),
      x = 0,
      y = 0,
      width = 150,
      height = 100,
      label = '',
      type = ''
    } = options
    
    this.id = id
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.label = label
    this.type = type
  }
  
  get w() {
    return this.width / 2
  }
  
  get h() {
    return this.height / 2
  }
  
  rect() {
    return {
      start: {
        x: this.x - this.w,
        y: this.y - this.h
      },
      end: {
        x: this.x + this.w,
        y: this.y + this.h
      }
    }
  }
}

// 关系对象
class GraphRelation {
  constructor(options = {}) {
    const {
      label = null,
      start = null,
      end = null,
      startOffset = {
        x: 0,
        y: 0
      },
      endOffset = {
        x: 0,
        y: 0
      }
    } = options
    
    this.label = label
    this.start = start
    this.end = end
    this.startOffset = startOffset
    this.endOffset = endOffset
    this.moveInfo = {
      x: 0,
      y: 0
    }
  }
  
  get id() {
    return this.start.id + ',' + this.end.id
  }
  
  get d() {
    const start = this.startPoint()
    const end = this.endPoint()
    if (this.end) {
      let str = ''
      this.orthogonalLine().forEach((item, idx) => {
        if (idx === 0) {
          str += `M${item.position[0]},${item.position[1]} `
        } else {
          str += `L${item.position[0]},${item.position[1]} `
        }
      })
      return str
    } else {
      return `M${start.x},${start.y} L${end.x},${end.y}`
    }
  }
  
  get canvasD() {
    const start = this.startPoint()
    const end = this.endPoint()
    if (this.end) {
      return this.orthogonalLine().map(item => ({
        x: item.position[0],
        y: item.position[1]
      }))
    } else {
      return [start, end]
    }
  }
  
  getStaticDirection(node, offset) {
    const x = node.x + offset.x
    const y = node.y + offset.y
    
    const pointA = {x, y}
    const pointB = {x, y}
    
    if (offset.y === -node.h) {
      pointB.y -= GraphRelation.distance
    } else if (offset.x === node.w) {
      pointB.x += GraphRelation.distance
    } else if (offset.y === node.h) {
      pointB.y += GraphRelation.distance
    } else {
      pointB.x -= GraphRelation.distance
    }
    
    return {
      x,
      y,
      direction: this.vector(pointA, pointB)
    }
  }
  
  getMoveDirection() {
    const start = this.start
    const pointA = this.moveInfo
    
    const pointB = {
      x: this.moveInfo.x,
      y: this.moveInfo.y - GraphRelation.distance
    }
    
    return {
      ...pointA,
      direction: this.vector(pointA, pointB)
    }
  }
  
  startPoint() {
    return this.getStaticDirection(this.start, this.startOffset)
  }
  
  endPoint() {
    if (this.end) {
      return this.getStaticDirection(this.end, this.endOffset)
    } else {
      return this.getMoveDirection()
    }
  }
  
  orthogonalLine() {
    const startPoint = this.startPoint()
    const endPoint = this.endPoint()
    return generateConnectionPoints({
      entryPoint: [startPoint.x, startPoint.y],
      entryDirection: startPoint.direction,
      entryExt: GraphRelation.distance,
      exitPoint: [endPoint.x, endPoint.y],
      exitDirection: endPoint.direction,
      exitExt: GraphRelation.distance
    })
  }
  
  // 获取点的向量
  vector(pointA, pointB) {
    return [
      pointB.x - pointA.x,
      pointB.y - pointA.y
    ]
  }
  
  static distance = 5
}

// 图
class Graph {
  constructor(options) {
    this.nodeList = []
    this.nodeMap = {}
    this.relationList = []
    this.relationMap = {}
    
    this.init(options)
  }
  
  
  init(options = {}) {
    const {
      nodeList = [],
      relationList = []
    } = options
    nodeList.forEach(node => {
      node = new GraphNode(node)
      this.nodeMap[node.id] = node
      this.nodeList.push(node)
    })
    relationList.forEach(relation => {
      const {
        start,
        end
      } = relation
      
      relation = new GraphRelation({
        ...relation,
        start: this.nodeMap[start],
        end: this.nodeMap[end]
      })
      
      this.relationMap[relation.id] = relation
      this.relationList.push(relation)
    })
  }
  
  addNode(node) {
    this.nodeList.push(node)
  }
  
  addRelation(relation) {
    const current = this.relationMap[relation.id]
    if (current) {
      current.startOffset = relation.startOffset
      current.endOffset = relation.endOffset
    } else {
      this.relationMap[relation.id] = relation
      this.relationList.push(relation)
    }
  }
  
  createNode(options) {
    return new GraphNode(options)
  }
  
  createRelation(options) {
    return new GraphRelation(options)
  }
  
}

export default Graph
