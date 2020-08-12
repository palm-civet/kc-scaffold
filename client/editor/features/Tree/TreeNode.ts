import React, { Children } from 'react'
import { nodeData } from './treeNode.mock'
import { v4 as uuidv4 } from 'uuid'
import * as _ from 'lodash'
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

interface ITypeDescription<T = any> {
  type: string
  default: T, // 默认值
  desc: string
}

interface IPropsDescription<T = any> {
  [key: string]: ITypeDescription<T>
}

export interface INodeData<T = any> {
  value?: ITypeDescription<T>,
  categroy: string,
  name: string,
  childrenType: string[],
  parent?: string,
  children?: INodeData[],
  methods: object,
  props: IPropsDescription<T>,
}

export interface IOutput<T = any> {
  id: string = null
  type: string = null,
  value?: T,
  name: string,
  parent?: string,
  children?: IOutput[],
  methods: object,
  props: object = {}
}

class TreeNode<T = any> {
  id: string = null
  name: string = null
  type: string = null
  props: object = {}
  children: TreeNode<any>[] = []
  value: T = null
  methods: object = {}
  parent: string
  childrenType: string[] = []

  constructor() {
    // this.gnerateNode(data)
  }

  gnerateNode(data: INodeData<T>) {
    this.id = this.gengerateId()
    this.name = data.name
    this.type = data.categroy
    this.value = data.value?.default
    this.childrenType = data.childrenType
    this.parent = data.parent

    this.props = this.initProps(data.props)
    this.children = this.initChildren(data.children)
    this.methods = this.initMethods(data.methods)
  }

  gnerateRestoreNode(data: IOutput) {
    this.id = data.id
    this.name = data.name
    this.type = data.type
    this.value = data.value
    this.parent = data.parent
    this.props = data.props

    data.children.map(node => {
      this.gnerateRestoreNode(node)
    })
  }

  initProps(props: IPropsDescription<T>) {
    const data = {}
    if( _.isPlainObject(props)) {
      Object.keys(props).map(key => {
        data[key] = _.cloneDeep(props[key].default)
      })
    }
    return data
  }

  initChildren(children) {
    if (children && children.length) {
      return children.map(node => {
        const newTree = new TreeNode()
        newTree.gnerateNode({...node, parent: this.id})
        return newTree
      })
    } else {
      return []
    }
  }

  initMethods(methods) {
    const data =  {}
    methods && Object.keys(methods).map(key => {
      data[key] = methods[key]
    })
    return data
  }

  removeChild (id) {
    const index = this.children.findIndex(node => node.id === id)
    if (index !== -1) {
      this.children.splice(index, 1)
      return true
    }
    return false
  }

  outputNode(): IOutput {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      value: this.value,
      props: this.props,
      methods: this.methods,
      parent: this.parent,
      children: this.children.map(node => node.outputNode())
    }
  }

  gengerateId() { // UUID
    return uuidv4().slice(0, 8)
  }

  changeId(node, parentNode?) {
    if (parentNode) {
      node.parent = parentNode.id
    }
    node.id = this.gengerateId()
    node.children.map(param => this.changeId(param, node))
  }

  checkChildType(type) {
    return this.childrenType.indexOf('all') > -1 ||  (type in this.childrenType)
  }

  insertChildNode(index, node) {
    const newTree = new TreeNode()
    newTree.gnerateNode({...node, parent: this.id})
    this.children.splice(index, 0, newTree)
    console.log(this.children)
  }

  clone() {
    const newNode = _.cloneDeep(this)
    this.changeId(newNode)
    return newNode
  }
}

export { TreeNode }



