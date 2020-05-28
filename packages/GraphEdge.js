/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */

import {vector} from './utils'

import {
  direction,
  directionVector
} from './types'

export default class GraphEdge {
  static distance = 15
  
  constructor(options) {
    const {
      start,
      end = null,
      startAt = [0, 0],
      startDirection = direction.top,
      endAt = [0, 0],
      endDirection = direction.top,
      meta = null
    } = options
    this.key = Symbol('edge')
    this.parent = null
    
    this.start = start
    this.startAt = startAt
    this.startDirection = startDirection
    this.endAt = endAt
    this.endDirection = endDirection
    
    this.movePosition = [0, 0]
    this.meta = meta
    this.end = end
  }
  
  get end() {
    return this._end
  }
  
  set end(node) {
    if (this.start === node) {
      return false
    } else {
      this._end = node
    }
  }
  
  get pathPointList() {
    return this.coordinateList()
  }
  
  startCoordinate() {
    return vector(this.start.position)
      .add(this.startAt)
      .end
  }
  
  endCoordinate() {
    if (this.end) {
      return vector(this.end.position)
        .add(this.endAt)
        .end
    } else {
      return this.movePosition
    }
  }
  
  endDirectionVector() {
    if (this.end) {
      return this.endDirection
    } else {
      const direction = this.start.pointDirection(this.movePosition)
      return vector(directionVector[direction]).multiply(-1).end
    }
  }
  
  coordinateList(turnRatio = 0.5) {
    
    const entryPoint = this.startCoordinate()
    const exitPoint = this.endCoordinate()
    
    const entryDirection = this.startDirection
    let exitDirection = this.endDirectionVector()
    
    // 路径起点
    const startPoint = vector(entryDirection)
      .multiply(GraphEdge.distance)
      .add(entryPoint)
      .end
    
    // 路径终点
    const endPoint = vector(exitDirection)
      .multiply(GraphEdge.distance)
      .add(exitPoint)
      .end
    
    // 入口方向取反
    exitDirection = vector(exitDirection)
      .multiply(-1)
      .end
    
    // 终点 - 起点  垂直 水平向量
    const pathHorizontalVec = [endPoint[0] - startPoint[0], 0]
    const pathVerticalVec = [0, endPoint[1] - startPoint[1]]
    
    const startDirection = this.pathDirection(
      pathVerticalVec,
      pathHorizontalVec,
      entryDirection
    )
    const endDirection = this.pathDirection(
      pathVerticalVec,
      pathHorizontalVec,
      exitDirection
    )
    
    const splitNum = vector(startDirection)
      .dotProduct(endDirection)
      .end > 0 ? 2 : 1
    
    const pathMiddle = endDirection === pathHorizontalVec
      ? pathVerticalVec
      : pathHorizontalVec
    
    let points = []
    
    points.push(entryPoint, startPoint)
    
    if (splitNum === 1) {
      
      const point1 = vector(startPoint)
        .add(startDirection)
        .end
      
      const point2 = vector(point1)
        .add(endDirection)
        .end
      
      points.push(point1, point2)
      
    } else {
      const point1 = vector(startDirection)
        .multiply(turnRatio)
        .add(startPoint)
        .end
      
      const point2 = vector(point1)
        .add(pathMiddle)
        .end
      
      const point3 = vector(endDirection)
        .multiply(1 - turnRatio)
        .add(point2)
        .end
      
      points.push(point1, point2, point3)
      
    }
    
    points.push(exitPoint)
    
    return points
  }
  
  pathDirection(vertical, horizontal, direction) {
    if (vector(horizontal).parallel(direction).end) {
      if (vector(horizontal).dotProduct(direction).end > 0) {
        return horizontal
      } else {
        return vertical
      }
    } else {
      if (vector(vertical).dotProduct(direction).end > 0) {
        return vertical
      } else {
        return horizontal
      }
    }
  }
}
