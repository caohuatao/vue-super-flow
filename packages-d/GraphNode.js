/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */

import {
  uuid,
  vectorFromPoints,
  angle, addVector
} from './utils'

import {
  direction,
  directionVector
} from './types'

// 节点
class GraphNode {
  static prefixId = ''
  
  constructor(props) {
    const {
      id = uuid(GraphNode.prefixId),
      width = 180,
      height = 100,
      x = 0,
      y = 0,
      meta = null
    } = props
    
    this.id = id
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.meta = meta
    
    this.parent = null
    
    this.angle()
  }
  
  get center() {
    return [
      this.x + this.width / 2,
      this.y + this.height / 2
    ]
  }
  
  get width() {
    return this._width
  }
  
  set width(w) {
    this._width = Math.floor(w)
    this.angle()
  }
  
  get height() {
    return this._height
  }
  
  set height(h) {
    this._height = Math.floor(h)
    this.angle()
  }
  
  angle() {
    const {
      center,
      x,
      y,
      width,
      height
    } = this
    this.topLeftAngle = angle(vectorFromPoints(
      center, [x, y]
    ))
    this.topRightAngle = angle(vectorFromPoints(
      center, addVector([x, y], [width, 0])
    ))
    this.bottomRightAngle = angle(vectorFromPoints(
      center, addVector([x, y], [width, height])
    ))
    this.bottomLeftAngle = angle(vectorFromPoints(
      center, addVector([x, y], [0, height])
    ))
  }
  
  pointDirection(x, y) {
    const pointAngle = angle(vectorFromPoints(
      this.center,
      [x, y]
    ))
    
    if (pointAngle >= this.topLeftAngle && pointAngle < this.topRightAngle) {
      return direction.top
    } else if (pointAngle >= this.topRightAngle && pointAngle < this.bottomRightAngle) {
      return direction.right
    } else if (pointAngle >= this.bottomRightAngle && pointAngle < this.bottomLeftAngle) {
      return direction.bottom
    } else if (pointAngle >= this.bottomLeftAngle || pointAngle < this.topLeftAngle) {
      return direction.left
    }
  }
  
  getEndAt(offset) {
    const dir = this.pointDirection(
      this.x + offset.x,
      this.y + offset.y
    )
    
    offset.direction = directionVector[dir]
    
    switch (dir) {
      case direction.top:
        offset.y = 0
        break
      case direction.right:
        offset.x = this.width
        break
      case direction.bottom:
        offset.y = this.height
        break
      case direction.left:
        offset.x = 0
        break
    }
    
    return offset
  }
}

export default GraphNode
