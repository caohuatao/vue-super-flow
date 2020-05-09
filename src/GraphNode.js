/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */

import {uuid} from './utils'

// 节点
class GraphNode {
  static prefixId = ''
  
  constructor(props) {
    const {
      id = uuid(GraphNode.prefixId),
      width = 180,
      height = 100,
      x = 0,
      y = 0,
      meta = null
    } = props
    
    this.id = id
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.meta = meta
  }
  
  
  get center() {
    return {
      x: this.x + this.width / 2,
      y: this.y + this.height / 2
    }
  }
}

export default GraphNode
