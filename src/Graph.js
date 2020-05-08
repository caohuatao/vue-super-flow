/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */


import GraphNode from './GraphNode'
import GraphRelation from './GraphRelation'

class Graph {
  constructor(options) {
    this.nodeList = []
    this.relationList = []
    
    this.init(options)
  }
  
  
  createNode(options) {
    return new GraphNode(options)
  }
  
  createRelation(options) {
    return new GraphRelation(options)
  }
}

export default Graph
