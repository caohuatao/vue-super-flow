
export const direction = Object.freeze({
  top: 1,
  right: 2,
  bottom: 3,
  left: 4
})

// [0,-1] 右：[1,0] 下 [1,1] 左 [-1,0]

export const directionVector = Object.freeze({
  [direction.top]: [0, -1],
  [direction.right]: [1, 0],
  [direction.bottom]: [0, 1],
  [direction.left]: [-1, 0]
})

export const menuHandler = Object.freeze({
  nodeDelete: 0,
  nodeConnection: 1,
  
  verticalAlign: 2,
  HorizontalAlign: 3,
})
