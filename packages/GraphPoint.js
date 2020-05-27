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

export default class GraphPoint {
  static prefixId = ''
  
  constructor(props) {
    const {
      width = 180,
      height = 100,
      position = [0, 0],
      meta = null
    } = props
    
    this.key = Symbol('point')
    
    this.width = width
    this.height = height
    
    this.position = position
    this.meta = meta
    
    this.parent = null
    this.angle()
  }
  
  get center() {
    return vector(this.position)
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
    const center = this.center
      , position = this.position
      , width = this.width
      , height = this.height
    
    const topLeft = vector(position)
      .minus(center)
      .angle()
      .end
    
    const topRight = vector(position)
      .add([width, 0])
      .minus(center)
      .angle()
      .end
    
    const bottomRight = vector(position)
      .add([width, height])
      .minus(center)
      .angle()
      .end
    
    const bottomLeft = vector(position)
      .add([0, height])
      .minus(center)
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
      .end
    
    const angleList = this.angleList
    
    if (
      angle >= angleList[0]
      && angle < angleList[1]
    ) {
      return direction.top
    } else if (
      angle >= angleList[1]
      && angle < angleList[2]
    ) {
      return direction.right
    } else if (
      angle >= angleList[2]
      && angle < angleList[3]
    ) {
      return direction.bottom
    } else if (
      angle >= angleList[3]
      || angle < angleList[0]
    ) {
      return direction.left
    }
  }
  
  getEndAt(offset) {
    const dir = vector(this.position)
      .add([offset.x, offset.y])
      .end
    
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
