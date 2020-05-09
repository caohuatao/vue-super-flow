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
      startAt = {
        x: 0,
        y: 0
      },
      endAt = {
        x: 0,
        y: 0
      }
    } = options
    
    this.start = start
    this.end = end
    this.startAt = startAt
    this.endAt = endAt
    this.moveInfo = {
      x: 0,
      y: 0
    }
  }
  
  
  static distance = 5
}

export default GraphRelation
