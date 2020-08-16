import React, { useContext, useState, useCallback, useMemo } from 'react'
import * as _ from 'lodash'
import { TreeNode, INodeData, IOutput } from './treeNode'
import { IconType } from 'antd/lib/notification'

enum ERROR_TYPE {
  REMOVE_PARENT_NOT_FOUND = '删除节点不存在父节点:',
  REMOVE_RELATION_NOT_CORRCT = '删除节点父子关系存在问题:',
  REMOVE_CURRENT_NOT_FOUND = '当前删除节点不存在',
  INSERT_NODE_NOT_EXSIT = '当前插入节点不存在',
  INIT_TREE_NO_DATA = '当前实例化节点树参数不存在'
}

interface DataNode {
  checkable?: boolean;
  children?: DataNode[];
  disabled?: boolean;
  disableCheckbox?: boolean;
  icon?: IconType;
  isLeaf?: boolean;
  key: string | number;
  title?: React.ReactNode;
  selectable?: boolean;
  switcherIcon?: IconType;
  /** Set style of TreeNode. This is not recommend if you don't have any force requirement */
  className?: string;
  style?: React.CSSProperties;
}

function makeErrorMsg (type: ERROR_TYPE, extra?) {
  return `[Tree Manager Error]: ${ERROR_TYPE[type]}\n  ${type} ${extra}`
}

class TreeManager<T> {
  treeListNode: TreeNode<T> = null

  constructor(treeData) {
    this.generateTreeNode(treeData)
  }

  deps: Function[] = []

  private addDeps(callback) {
    this.deps.push(callback)
  }

  private callDeps() {
    this.deps.forEach(dep => dep())
  }

  private removeDep(dep) {
    const index = this.deps.indexOf(dep)
    if (index !== -1) {
      this.deps.splice(index, 1)
    }
  }

  public observeTree<T>(transfer: (out: T, node: TreeNode) => T | T[]) {
    const getter = useCallback(() => {
      const res: T = {} as T
      this.traverseBack(this.treeListNode, res, transfer)
      return res
    }, [transfer])
    const [data, setData] = useState(getter())
    const observer = () => setData(getter())
    this.addDeps(observer)
    return [data, () => this.removeDep(observer)]
  }

  generateRestoreTree(restoreData: IOutput) {
    this.treeListNode = new TreeNode()
    this.treeListNode.gnerateRestoreNode(restoreData)
  }

  generateTreeNode(treeData: INodeData<T>) {
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
      this.callDeps()
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

  traverseBack(data: TreeNode, inital, callback: Function){
    const recursionFun = function(data, prev, callback) {
      if (Array.isArray(data)) {
        data.forEach((node, index) => {
          prev[index] = {}
          const res = callback(prev[index], node)
          if (node.children && node.children.length) {
            recursionFun(node.children, res, callback)
          }
        })
      } else if (data instanceof Object) {
        const res = callback(prev, data)
        if (data.children && data.children.length) {
          recursionFun(data.children, res, callback)
        }
      }
    }
    recursionFun(data, inital, callback)
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

  // renderTree() {
  //   return this.treeListNode.render(this.treeListNode)
  // }
}
export { TreeManager }

export const manager = new TreeManager({ name: 'Layout', categroy: 'Layout', children: [] })
export const managerContext = React.createContext(manager)

export function useTreeManager () {
  return useContext(managerContext)
}



/**
 * output 快照重新生产 node tree,
 * 快照只需存储组件类型，变量值，属性等，固有不变的属性不需要存储下来，通过具体组件参数就可以知道
 */
// props 属性丢失
