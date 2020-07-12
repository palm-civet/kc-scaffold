import React from 'react'
import * as _ from 'lodash'
import { TreeNode, INodeData, IOutput } from './treeNode'

enum ERROR_TYPE {
  REMOVE_PARENT_NOT_FOUND = '删除节点不存在父节点:',
  REMOVE_RELATION_NOT_CORRCT = '删除节点父子关系存在问题:',
  REMOVE_CURRENT_NOT_FOUND = '当前删除节点不存在',
  INSERT_NODE_NOT_EXSIT = '当前插入节点不存在',
  INIT_TREE_NO_DATA = '当前实例化节点树参数不存在'
}

function makeErrorMsg (type: ERROR_TYPE, extra?) {
  return `[Tree Manager Error]: ${ERROR_TYPE[type]}\n  ${type} ${extra}`
}

class TreeManager<T> {
  treeListNode: TreeNode<T> = null

  constructor(treeData) {
    this.gnerateTreeNode(treeData)
  }

  gnerateRestoreTree(restoreData: IOutput) {
    this.treeListNode = new TreeNode()
    this.treeListNode.gnerateRestoreNode(restoreData)
  }

  gnerateTreeNode(treeData: INodeData<T>) {
    if (!treeData) {
      throw new Error(makeErrorMsg(ERROR_TYPE.INIT_TREE_NO_DATA))
    }
    this.treeListNode = new TreeNode()
    this.treeListNode.gnerateNode(treeData)
  }

  /**
   * @param id 节点唯一id
   * @description 通过id查找节点
   */
  findNode(id): TreeNode {
    let node = null
    this.traverseData(this.treeListNode, res => {
      if (res.id === id) {
        node = res
      }
    })
    return node
  }

  insertNode(id, node, index = 0) {
    const target = this.findNode(id)
    if(!target) {
      throw new Error(makeErrorMsg(ERROR_TYPE.INSERT_NODE_NOT_EXSIT, `id=${id}`))
    }
    if (target.checkChildType(node.type)) {
      target.insertChildNode(index, node)
    }
  }

  copyNode(node: TreeNode) {
    const target = node.clone()
    this.insertNode(node.parent, target)
    return node
  }

  removeNode(id) {
    const current = this.findNode(id)
    if (current) {
      const parent = this.findNode(current.parent)
      if (parent && parent.removeChild(id)) return
      else if (parent) throw new Error(makeErrorMsg(ERROR_TYPE.REMOVE_RELATION_NOT_CORRCT, `id=${id}`))
      else throw new Error(makeErrorMsg(ERROR_TYPE.REMOVE_PARENT_NOT_FOUND, `id=${id}`))
    }
    throw new Error(makeErrorMsg(ERROR_TYPE.REMOVE_CURRENT_NOT_FOUND, `id=${id}`))
  }

  traverseData(data: TreeNode, callback: Function) {
    const recursionFun = function(data, callback) {
      if (Array.isArray(data)) {
        data.forEach(node => {
          callback(node)
          if (node.children && node.children.length) {
            recursionFun(node.children, callback)
          }
        })
      } else if (data instanceof Object) {
        callback(data)
        if (data.children && data.children.length) {
          recursionFun(data.children, callback)
        }
      }
    }
    recursionFun(data, callback)
  }

  outputNode(): IOutput {
    if(this.treeListNode) {
      return this.treeListNode.outputNode()
    }
  }

  // renderTree (nodeData) {
  //   const newProps: object = {}
  //   Object.keys(nodeData.props).forEach(key => {
  //     newProps[key] = nodeData.props[key].default
  //   })

  //   return React.createElement(
  //     nodeData.type,
  //     newProps,
  //     nodeData.children ? [...nodeData.children]: null
  //   )
  // }

  renderTree() {
    console.log(1)
    // return React.createElement(
    //   'input',
    //   {value: 11},
    //   null
    // )
    return this.treeListNode.render(this.treeListNode)
  }
}
export { TreeManager }



/**
 * output 快照重新生产 node tree,
 * 快照只需存储组件类型，变量值，属性等，固有不变的属性不需要存储下来，通过具体组件参数就可以知道
 */
// props 属性丢失
