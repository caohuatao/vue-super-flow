export const prefixCls = 'super-flow'

export const direction = Object.freeze({
  top: 1,
  right: 2,
  bottom: 3,
  left: 4
})

// [0,-1] 右：[1,0] 下 [1,1] 左 [-1,0]

export const directionVector = Object.freeze({
  [direction.top]() {
    return [0, -1]
  },
  [direction.right]() {
    return [1, 0]
  },
  [direction.bottom]() {
    return [0, 1]
  },
  [direction.left]() {
    return [-1, 0]
  }
})
