/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */

import {
  uuid,
  vectorFromPoints,
  angle
} from './utils'

import {
  direction,
  directionVector
} from './types'

// 节点
class GraphNode {
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
  }

  get center() {
    return [
      this.x + this.width / 2,
      this.y + this.height / 2
    ]
  }

  get topLeftAngle() {
    return angle(vectorFromPoints(
      this.center,
      [this.x, this.y],
    ))
  }

  get topRightAngle() {
    return angle(vectorFromPoints(
      this.center,
      [this.x + this.width, this.y],
    ))
  }

  get bottomRightAngle() {
    return angle(vectorFromPoints(
      this.center,
      [this.x + this.width, this.y + this.height],
    ))
  }

  get bottomLeftAngle() {
    return angle(vectorFromPoints(
      this.center,
      [this.x, this.y + this.height]
    ))
  }

  pointDirectionVector(x, y) {
    const pointAngle = angle(vectorFromPoints(
      this.center,
      [x, y]
    ))
    if (
      pointAngle >= this.topLeftAngle
      && pointAngle < this.topRightAngle
    ) {
      return directionVector[direction.top]()
    } else if (
      pointAngle >= this.topRightAngle
      && pointAngle < this.bottomRightAngle
    ) {
      return directionVector[direction.right]()
    } else if (
      pointAngle >= this.bottomRightAngle
      && pointAngle < this.bottomLeftAngle
    ) {
      return directionVector[direction.bottom]()
    } else if (
      pointAngle >= this.bottomLeftAngle
      || pointAngle < this.topLeftAngle
    ) {
      return directionVector[direction.left]()
    }
  }

  getEndAt(offset) {
    offset.direction = this.pointDirectionVector(
      this.x + offset.x,
      this.y + offset.y
    )

    switch (direction.toString()) {
      case '0,-1':
        offset.y = 0
        break
      case '1,0':
        offset.x = this.width
        break
      case '0,1':
        offset.y = this.height
        break
      case '-1,0':
        offset.x = 0
        break
    }

    return offset
  }
}

GraphNode.prefixId = ''

export default GraphNode
