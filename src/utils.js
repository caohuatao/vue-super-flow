/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:03
 */

/**
 * Generate unique id. 生成唯一id
 *
 * @param prefix{string}
 * @returns {string}
 */
export function uuid(prefix = '') {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const charsLen = chars.length
  let uuid = []
  const len = 12
  for (let i = 0; i < len; i++) {
    uuid[i] = chars[0 | Math.random() * charsLen]
  }
  return prefix + uuid.join('')
}

/**
 * @param evt
 * @returns {{x: number, y: number}}
 */
export function getOffset(evt) {
  const {
    clientX,
    clientY,
    currentTarget
  } = evt

  const {
    left,
    top
  } = currentTarget.getBoundingClientRect()

  return {
    x: clientX - left,
    y: clientY - top
  }
}



/**
 * 向量相加 或者 向量与坐标相加
 * @param vectorA {array}
 * @param vectorB {array}
 * @returns {*[]}
 */
export const add = function (vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
}

// 向量乘以常量系数
export const multiply = function (vector, k) {
  return [vector[0] * k, vector[1] * k]
}

// 两点之间的向量，a点指向b点
export const vectorFromPoints = function (pointA, pointB) {
  return [pointB[0] - pointA[0], pointB[1] - pointA[1]]
}

// 判断向量是否平行
export const isParallel = function (vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0] === 0
}

//向量点积
export const dot = function (vectorA, vectorB) {
  return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]
}
// 向量叉乘
export const cross = function (vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]
}

// 向量夹角
export const angleFrom = function (vector) {
  return Math.acos(vector[0] / Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]))
}

// 获取向量的单位向量
export const getUnitVector = function (vector) {
  const m = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1])
  return [vector[0] / m, vector[1] / m]
}

// 判断向量 x,y 坐标相等
export const equals = function (vector, target) {
  return vector[0] === target [0] && vector[1] === target[1]
}
