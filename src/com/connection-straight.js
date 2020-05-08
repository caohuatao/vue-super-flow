/*
 * User: CHT
 * Date: 2020/5/6
 * Time: 10:02
 */

import {
  add,
  multiply,
  isParallel,
  dot,
} from './vectorUtil'


// 描述方向 使用svg 平面轴 上：[0,-1] 右：[1,0] 下 [1,1] 左 [-1,0]
// path 指除了延申线之外的连接线
function coordinateList(options, turnRatio = 0.5) {
  
  let {
    entryPoint = [0, 0],      // 出口
    entryDirection = [0, 1],  // 出口方向向量
    exitPoint = [10, 10],     // 入口
    exitDirection = [1, 0],   // 入口方向向量
    extDistance = 10          // 出入口延伸距离
  } = options
  
  // 路径起点
  const startPoint = add(entryPoint, multiply(entryDirection, extDistance))
  // 路径终点
  const endPoint = add(exitPoint, multiply(exitDirection, extDistance))
  
  // 入口方向取反
  exitDirection = multiply(exitDirection, -1)
  
  // 终点 - 起点  垂直 水平向量
  let pathHorizontalVec = [endPoint[0] - startPoint[0], 0]
  let pathVerticalVec = [0, endPoint[1] - startPoint[1]]
  
  let startDirection = pathDirection(pathVerticalVec, pathHorizontalVec, entryDirection)
  let endDirection = pathDirection(pathVerticalVec, pathHorizontalVec, exitDirection)
  
  let splitNum = dot(startDirection, endDirection) > 0 ? 2 : 1
  let pathMiddle = endDirection === pathHorizontalVec ? pathVerticalVec : pathHorizontalVec
  
  let points = []
  
  points.push(entryPoint, startPoint)
  
  if (splitNum === 1) {
    let point1 = add(startPoint, startDirection)
    const point2 = add(point1, endDirection)
    points.push(point1, point2)
  } else {
    let point1 = add(startPoint, multiply(startDirection, turnRatio))
    let point2 = add(point1, pathMiddle)
    let point3 = add(point2, multiply(endDirection, 1 - turnRatio))
    points.push(point1, point2, point3)
  }
  
  points.push(exitPoint)
  
  return points
  
}

// 方向 垂直向量  水平向量
function pathDirection(vertical, horizontal, direction) {
  if (isParallel(horizontal, direction)) {
    if (dot(horizontal, direction) > 0) {
      return horizontal
    } else {
      return vertical
    }
  } else {
    if (dot(vertical, direction) > 0) {
      return vertical
    } else {
      return horizontal
    }
  }
}

export default coordinateList
