/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:03
 */


export function uuid(before = '', after = '') {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const charsLen = chars.length
  let uuid = []
  const len = 16
  for (let i = 0; i < len; i++) {
    uuid[i] = chars[0 | Math.random() * charsLen]
  }
  return before + uuid.join('') + after
}


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


export function isIntersect({clientX, clientY}, target) {
  const {
    top,
    right,
    bottom,
    left
  } = target.getBoundingClientRect()
  
  return top < clientY
    && right > clientX
    && bottom > clientY
    && left < clientX
}


// 向量相加
export function addVector(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
}

//  向量乘以常量系数
export function multiply(vector, k) {
  return [vector[0] * k, vector[1] * k]
}

export function differ(pointA, pointB) {
  return [pointB[0] - pointA[0], pointB[1] - pointA[1]]
}

export function minus(pointA, pointB) {
  return [pointA[0] - pointB[0], pointA[1] - pointB[1]]
}

// 向量点积
export function dotProduct(vectorA, vectorB) {
  return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]
}

// 向量叉乘
export function cross(vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]
}

// 向量的单位向量
export function unitVector(vector) {
  const m = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1])
  return [vector[0] / m, vector[1] / m]
}

// 判断向量 x,y 坐标相等
export function equals(vector, target) {
  return vector[0] === target[0] && vector[1] === target[1]
}

// 向量夹角
export function angle(vector) {
  return Math.round(180 / Math.PI * Math.atan2(vector[1], vector[0])) + 180
}

// 判断向量是否平行
export function parallel(vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0] === 0
}

// 判断 y 轴相等
export function yAxisEqual(vectorA, vectorB) {
  return vectorA[1] === vectorB[1]
}

// 判断 x 轴相等
export function xAxisEqual(vectorA, vectorB) {
  return vectorA[0] === vectorB[0]
}

//
export function vector(result) {
  const handler = {
    add: addVector,
    multiply,
    differ,
    minus,
    dotProduct,
    cross,
    unitVector,
    equals,
    angle,
    parallel
  }
  const proxyHandler = {}
  
  Object.keys(handler).forEach(key => {
    Object.defineProperty(proxyHandler, key, {
      get() {
        return function (val) {
          result = handler[key](result, val)
          return proxyHandler
        }
      }
    })
  })
  
  Object.defineProperty(proxyHandler, 'end', {
    get() {
      return result
    }
  })
  
  return proxyHandler
}


export function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase()
}

export function isFun(val) {
  return toRawType(val) === 'function'
}

export function isBool(val) {
  return toRawType(val) === 'boolean'
}

export function isUndef(val) {
  return toRawType(val) === 'undefined'
}

export function isString(val) {
  return toRawType(val) === 'string'
}

export function isObject(val) {
  return toRawType(val) === 'object'
}

export function arrayReplace(arr1, arr2) {
  arr1.splice(0, arr1.length, ...arr2)
}

export function debounce(fn, timestamp) {
  let timeout = null
  return function () {
    if (timeout)
      clearTimeout(timeout)
    timeout = setTimeout(fn, timestamp)
  }
}
