/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */

import {
  minus,
  uuid,
  vector
} from './utils'

import {
  direction,
  directionVector
} from './types'

export default class GraphNode {
  constructor(props, graph) {
    const {
      id = uuid('node'),
      width = 180,
      height = 100,
      coordinate = [0, 0],
      meta = null
    } = props
    
    this.key = uuid('node')
    this.graph = graph
    
    this.id = id
    this.coordinate = [...coordinate]
    this.meta = meta
    
    this.width = width
    this.height = height
  }
  
  get position() {
    return vector(this.coordinate)
      .add(this.graph.origin)
      .end
  }
  
  set position(position) {
    this.coordinate = vector(position)
      .minus(this.graph.origin)
      .end
  }
  
  get center() {
    return vector(this.coordinate)
      .add([this.width / 2, this.height / 2])
      .end
  }
  
  set center(position) {
    this.coordinate = vector(position)
      .minus([this.width / 2, this.height / 2])
      .end
  }
  
  get width() {
    return this._width
  }
  
  set width(w) {
    w = Math.floor(w)
    this._width = w > 50 ? w : 50
    this.angle()
  }
  
  get height() {
    return this._height
  }
  
  set height(h) {
    h = Math.floor(h)
    this._height = h > 20 ? h : 20
    this.angle()
  }
  
  angle() {
    const
      w = this.width / 2
      , h = this.height / 2
      , center = [0, 0]
    
    const topLeft = vector(center)
      .minus([w, h])
      .angle()
      .end
    
    const topRight = vector(center)
      .add([w, 0])
      .minus([0, h])
      .angle()
      .end
    
    const bottomRight = vector(center)
      .add([w, h])
      .angle()
      .end
    
    const bottomLeft = vector(center)
      .add([0, h])
      .minus([w, 0])
      .angle()
      .end
    
    this.angleList = [
      topLeft,
      topRight,
      bottomRight,
      bottomLeft
    ]
  }
  
  relative(offset) {
    const angle = vector(offset)
      .minus([this.width / 2, this.height / 2])
      .angle()
      .end
    const angleList = this.angleList
    const directionList = [
      direction.top,
      direction.right,
      direction.bottom,
      direction.left
    ]
    
    let dir = direction.left
    
    angleList.reduce((prev, current, idx) => {
      if (angle >= prev && angle < current) {
        dir = directionList[idx - 1]
      }
      return current
    })
    
    return {
      position: this.fixOffset(offset, dir),
      direction: directionVector[dir]
    }
  }
  
  fixOffset(offset, dir) {
    switch (dir) {
      case direction.top:
        offset[0] = this.width / 2
        offset[1] = 0
        break
      case direction.right:
        offset[0] = this.width
        offset[1] = this.height / 2
        break
      case direction.bottom:
        offset[0] = this.width / 2
        offset[1] = this.height
        break
      case direction.left:
      default:
        offset[0] = 0
        offset[1] = this.height / 2
        break
    }
    return offset
  }
  
  remove() {
    return this.graph.removeNode(this)
  }
  
  toJSON() {
    return {
      id: this.id,
      width: this.width,
      height: this.height,
      coordinate: [...this.coordinate],
      meta: this.meta
    }
  }
}
