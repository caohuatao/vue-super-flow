/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 11:06
 */

class ConnectStraight {
  
  // 向量相加 或者 向量与坐标相加
  static add(vectorA, vectorB) {
    return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
  }
  
  // 向量乘以常量系数
  static multiply(vector, k) {
    return [vector[0] * k, vector[1] * k]
  }
  
  // 两点之间的向量，a点指向b点
  static vectorFromPoints(pointA, pointB) {
    return [pointB[0] - pointA[0], pointB[1] - pointA[1]]
  }
  
  // 判断向量是否平行
  static isParallel(vectorA, vectorB) {
    return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0] === 0
  }
  
  //向量点积
  static dot(vectorA, vectorB) {
    return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]
  }
  
  // 向量叉乘
  static cross(vectorA, vectorB) {
    return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]
  }
  
  // 向量夹角
  static angleFrom(vector) {
    return Math.acos(vector[0] / Math.sqrt(
      vector[0] * vector[0] + vector[1] * vector[1]
    ))
  }
  
  // 获取向量的单位向量
  static getUnitVector(vector) {
    const m = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1])
    return [vector[0] / m, vector[1] / m]
  }
  
  // 判断向量 x,y 坐标相等
  static equals(vector, target) {
    return vector[0] === target [0] && vector[1] === target[1]
  }

}
