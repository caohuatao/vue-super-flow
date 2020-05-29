/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */

import {
  vector
} from './utils'

import {
  direction,
  directionVector
} from './types'

export default class GraphNode {
  
  constructor(props) {
    const {
      id,
      width = 180,
      height = 100,
      coordinate = [0, 0],
      meta = null
    } = props
    
    this.key = Symbol('point')
    this.graph = null
    
    this.id = id
    this.coordinate = [...coordinate]
    this.meta = meta
    
    this.width = width
    this.height = height
  }
  
  get position() {
    return this.graph ? this.graph.getPosition() : [0, 0]
  }
  
  get center() {
    return vector(this.coordinate)
      .add([this.width / 2, this.height / 2])
      .end
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
    const
      center = this.center
      , w = this.width / 2
      , h = this.height / 2
    
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
  
  pointDirection(position) {
    const angle = vector(position)
      .minus(this.center)
      .angle()
      .end
    
    const angleList = this.angleList
    
    if (
      angle >= angleList[0]
      && angle < angleList[1]
    ) {
      return {
        type: direction.top,
        value: directionVector[direction.top]
      }
    } else if (
      angle >= angleList[1]
      && angle < angleList[2]
    ) {
      return {
        type: direction.right,
        value: directionVector[direction.right]
      }
    } else if (
      angle >= angleList[2]
      && angle < angleList[3]
    ) {
      return {
        type: direction.bottom,
        value: directionVector[direction.bottom]
      }
    } else if (
      angle >= angleList[3]
      || angle < angleList[0]
    ) {
      return {
        type: direction.left,
        value: directionVector[direction.left]
      }
    }
  }
  
  changeEndAt(offset) {
    const dir = this.pointDirection(
      vector(this.coordinate)
        .add(offset)
        .end
    )
    
    switch (dir) {
      case direction.top:
        offset[1] = 0
        break
      case direction.right:
        offset[0] = this.width
        break
      case direction.bottom:
        offset[1] = this.height
        break
      case direction.left:
        offset[0] = 0
        break
    }
    
    return offset
    
    return {
      offset,
      direction: directionVector[dir]
    }
  }
  
  remove() {
    this.parent.removeNode(this)
  }
}
