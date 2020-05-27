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
 * @param target
 * @returns {{x: number, y: number}}
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

  return {
    x: clientX - left,
    y: clientY - top
  }
}

export function find(arr, callback) {
  if (Array.prototype.find) {
    return arr.find(callback)
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i)) {
        return arr[i]
      }
    }
    return undefined
  }
}

export function  pauseEvent(e){
  if(e.stopPropagation) e.stopPropagation();
  if(e.preventDefault) e.preventDefault();
  e.cancelBubble=true;
  e.returnValue=false;
  return false;
}

/**
 * 向量相加 或者 向量与坐标相加
 * @param vectorA {array}
 * @param vectorB {array}
 * @returns {*[]}
 */
export const addVector = function (vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
}

/**
 * 向量乘以常量系数
 * @param vector
 * @param k
 * @returns {number[]}
 */
export const multiply = function (vector, k) {
  return [vector[0] * k, vector[1] * k]
}

/**
 * 两点之间的向量，a点指向b点
 * @param pointA
 * @param pointB
 * @returns {number[]}
 */
export const vectorFromPoints = function (pointA, pointB) {
  return [pointB[0] - pointA[0], pointB[1] - pointA[1]]
}

/**
 * 判断向量是否平行
 * @param vectorA
 * @param vectorB
 * @returns {boolean}
 */
export const isParallel = function (vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0] === 0
}

/**
 * 向量点积
 * @param vectorA
 * @param vectorB
 * @returns {number}
 */
export const dotProduct = function (vectorA, vectorB) {
  return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]
}

/**
 * 向量叉乘
 * @param vectorA
 * @param vectorB
 * @returns {number}
 */
export const cross = function (vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]
}

/**
 * 向量夹角
 * @param vector
 * @returns {number}
 */
export const angle = function (vector) {
  return Math.round(180 / Math.PI * Math.atan2(vector[1], vector[0])) + 180
}

/**
 * 获取向量的单位向量
 * @param vector
 * @returns {number[]}
 */
export const getUnitVector = function (vector) {
  const m = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1])
  return [vector[0] / m, vector[1] / m]
}

/**
 * 判断向量 x,y 坐标相等
 * @param vector
 * @param target
 * @returns {boolean|boolean}
 */
export const equals = function (vector, target) {
  return vector[0] === target [0] && vector[1] === target[1]
}
