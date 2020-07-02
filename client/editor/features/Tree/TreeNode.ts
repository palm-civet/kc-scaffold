import React from 'react'
import ReactDOM from 'react-dom'

const nodeData: object = {
  'type': 'input',
  'props': {
    "value": {
      "type": "string",
      "default": '1111',
      "desc": "值"
    },
    "type": {
      "type": "string",
      "default": 'text',
      "desc": "类型"
    }
  },
  children: null
};

class TreeNode {
  treeData: TreeNode[] = [];

  constructor() {

  }

  generatorTree() {

  }

  insertNode() {

  }

  renderTree (nodeData) {
    const newProps: object = {}
    Object.keys(nodeData.props).forEach(key => {
      newProps[key] = nodeData.props[key].default
    });
    return React.createElement(
      nodeData.type,
      newProps,
      nodeData.children ? [...nodeData.children]: null
    )
  }

  cloneNode() {

  }

}

interface IProps {
  value: string
}
const node = new TreeNode()
const TreeDom: React.FC<IProps> = (props) => {
 props.value
  return node.renderTree(nodeData)
}
// setTimeout(() => {
//   ReactDOM.render(TreeDom, document.getElementById('root'));
// },1000)


export { TreeDom }



