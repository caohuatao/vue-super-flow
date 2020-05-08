/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */

class GraphRelation {
  constructor(options) {
    const {
      start,
      end = null,
      startOffset = {
        x: 0,
        y: 0
      },
      endOffset = {
        x: 0,
        y: 0
      }
    } = options
    
    this.start = start
    this.end = end
    this.startOffset = startOffset
    this.endOffset = endOffset
    this.moveInfo = {
      x: 0,
      y: 0
    }
  }
  
  
  static distance = 5
}

export default GraphRelation
