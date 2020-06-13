/**
 * User: CHT
 * Date: 2020/6/3
 * Time: 14:53
 */
export default class GraphEvent {
  constructor() {
    this.listeners = {}
  }
  
  add(type, callback) {
    if (!(type in this.listeners)) {
      this.listeners[type] = []
    }
    this.listeners[type].push(callback)
  }
  
  remove(type, callback) {
    if (!(type in this.listeners)) {
      return
    }
    const stack = this.listeners[type]
    for (let i = 0, l = stack.length; i < l; i++) {
      if (stack[i] === callback) {
        stack.splice(i, 1)
        return this.remove(type, callback)
      }
    }
  }
  
  dispatch(event, breakOff = false) {
    if (!(event.type in this.listeners)) {
      return
    }
    const stack = this.listeners[event.type]
    event.target = this
    
    if (breakOff) {
      stack.some((fun, idx) => {
        const result = fun.call(this, event)
        if(result) stack.unshift(...stack.splice(idx, 1))
        return result
      })
    } else {
      stack.forEach(fun => fun.call(this, event))
    }
  }
}
