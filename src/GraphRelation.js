/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */

import {
  addVector,
  dotProduct,
  isParallel,
  multiply,
} from './utils'

import {
  direction,
  directionVector
} from './types'

class GraphRelation {
  constructor(options) {
    const {
      start,
      end = null,
      startAt = {
        x: 0,
        y: 0,
        direction: direction.top
      },
      endAt = {
        x: 0,
        y: 0,
        direction: direction.top
      },
      meta = null
    } = options
    
    this.start = start
    this.end = end
    this.startAt = startAt
    this.endAt = endAt
    this.moveInfo = {
      x: 0,
      y: 0
    }
    this.meta = null
    this.parent = null
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
    return [
      this.start.x + this.startAt.x,
      this.start.y + this.startAt.y
    ]
  }
  
  endCoordinate() {
    if (this.end) {
      return [
        this.end.x + this.endAt.x,
        this.end.y + this.endAt.y
      ]
    } else {
      return [
        this.moveInfo.x,
        this.moveInfo.y
      ]
    }
  }
  
  endDirectionVector() {
    if (this.end) {
      return this.endAt.direction
    } else {
      const direction = this.start.pointDirection(
        this.moveInfo.x,
        this.moveInfo.y
      )
      return multiply(directionVector[direction], -1)
    }
  }
  
  coordinateList(turnRatio = 0.5) {
    
    const entryPoint = this.startCoordinate()
    
    const exitPoint = this.endCoordinate()
    
    
    const entryDirection = this.startAt.direction
    let exitDirection = this.endDirectionVector()
    
    // 路径起点
    const startPoint = addVector(entryPoint,
      multiply(entryDirection, GraphRelation.distance)
    )
    
    // 路径终点
    const endPoint = addVector(exitPoint,
      multiply(exitDirection, GraphRelation.distance)
    )
    
    // 入口方向取反
    exitDirection = multiply(exitDirection, -1)
    
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
    
    const splitNum = dotProduct(
      startDirection,
      endDirection
    ) > 0 ? 2 : 1
    
    const pathMiddle =
      endDirection === pathHorizontalVec
        ? pathVerticalVec : pathHorizontalVec
    
    let points = []
    
    points.push(entryPoint, startPoint)
    
    if (splitNum === 1) {
      const point1 = addVector(startPoint, startDirection)
      const point2 = addVector(point1, endDirection)
      
      points.push(point1, point2)
      
    } else {
      const point1 = addVector(
        startPoint,
        multiply(startDirection, turnRatio)
      )
      const point2 = addVector(
        point1,
        pathMiddle
      )
      const point3 = addVector(
        point2,
        multiply(endDirection, 1 - turnRatio)
      )
      
      points.push(point1, point2, point3)
    }
    
    points.push(exitPoint)
    
    return points
  }
  
  pathDirection(vertical, horizontal, direction) {
    if (isParallel(horizontal, direction)) {
      if (dotProduct(horizontal, direction) > 0) {
        return horizontal
      } else {
        return vertical
      }
    } else {
      if (dotProduct(vertical, direction) > 0) {
        return vertical
      } else {
        return horizontal
      }
    }
  }
  
}

GraphRelation.distance = 15

export default GraphRelation
