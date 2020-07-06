import React from 'react'
import * as _ from 'lodash'
import { INodeData, TreeNode } from './treeNode'

enum ERROR_TYPE {
  REMOVE_PARENT_NOT_FOUND = '删除节点不存在父节点:',
  REMOVE_RELATION_NOT_CORRCT = '删除节点父子关系存在问题:',
  REMOVE_CURRENT_NOT_FOUND = '当前删除节点不存在'
}

function makeErrorMsg (type: ERROR_TYPE, extra?) {
  return `[Tree Manager Error]: ${ERROR_TYPE[type]}\n  ${type} ${extra}`
}

class TreeManager<T> {
  treeList: TreeNode<T> = null

  constructor(treeData) {
    this.gnerateTreeNode(treeData)
  }

  gnerateTreeNode(treeData: INodeData<T>) {
    if (!treeData) return
    this.treeList = new TreeNode(treeData)
  }

  /**
   * @param id 节点唯一id
   * @description 通过id查找节点
   */
  findNode(id): TreeNode {
    let node = null
    this.traverseData(this.treeList, res => {
      if (res.id === id) {
        node = res
      }
    })
    return node
  }

  insertNode(id, node, index = 0) {
    const target = this.findNode(id)
    if (target && target.checkChildType(node.type)) {
      target.insertChildNode(index, node)
    } else {
      return false
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

  outputNode() {
    if(this.treeList) {
      return this.treeList.outputNode()
    } else {
      return {}
    }
  }

  renderTree (nodeData) {
    const newProps: object = {}
    Object.keys(nodeData.props).forEach(key => {
      newProps[key] = nodeData.props[key].default
    })

    return React.createElement(
      nodeData.type,
      newProps,
      nodeData.children ? [...nodeData.children]: null
    )
  }
}
export { TreeManager }



// output 快照重新生产node tree
// props 属性丢失
