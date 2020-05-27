/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:03
 */


/**
 * @param evt
 * @param target
 * @returns
 */
export function getOffset(evt, target = null) {
  const {
    clientX,
    clientY,
    currentTarget
  } = evt
  
  const current = target || currentTarget
  
  const {
    left,
    top
  } = current.getBoundingClientRect()
  
  return [clientX - left, clientY - top]
}

export const vectorHandler = {
  // 向量相加
  add(vectorA, vectorB) {
    return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
  },
  
  // 向量乘以常量系数
  multiply(vector, k) {
    return [vector[0] * k, vector[1] * k]
  },
  
  // 获得点B 相对 点A 的向量
  differ(pointA, pointB) {
    return [pointB[0] - pointA[0], pointB[1] - pointA[1]]
  },
  
  // 获得点A 相对 点B 的向量
  minus(pointA, pointB) {
    return [pointA[0] - pointB[0], pointA[1] - pointB[1]]
  },
  
  // 向量点积
  dotProduct(vectorA, vectorB) {
    return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]
  },
  
  // 向量叉乘
  cross(vectorA, vectorB) {
    return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]
  },
  
  // 向量的单位向量
  unitVector(vector) {
    const m = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1])
    return [vector[0] / m, vector[1] / m]
  },
  
  // 判断向量 x,y 坐标相等
  equals(vector, target) {
    return vector[0] === target[0] && vector[1] === target[1]
  },
  
  // 向量夹角 deg
  angle(vector) {
    return Math.round(180 / Math.PI * Math.atan2(vector[1], vector[0])) + 180
  },
  
  // 判断向量是否平行
  parallel(vectorA, vectorB) {
    return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0] === 0
  }
}

export function vector(point) {
  return new Proxy(vectorHandler, {
    get(target, p, receiver) {
      if (p === 'end') {
        return point
      } else {
        return function (val) {
          return vector(target[p](point, val))
        }
      }
    }
  })
}
