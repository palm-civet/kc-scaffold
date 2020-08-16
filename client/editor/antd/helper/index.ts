import { ComponentTypes, IComponentSchema } from "./types"

interface INameType {
  name: string
  categroy: string
}

export function containable(parent: INameType, child: INameType) {
  if (child.categroy === ComponentTypes.Decoration && parent.categroy !== ComponentTypes.Text) return true
  if (parent.categroy === ComponentTypes.Text) return false
  if (parent.categroy === ComponentTypes.Meta && child.categroy !== ComponentTypes.Text)  return false
  if (child.categroy === ComponentTypes.Layout) return isAvailableLayout(parent.name)
  if (child.categroy === ComponentTypes.Container) return isAvailableContainer(parent.name, child.name)
  if (parent.name === 'From' && child.categroy !== ComponentTypes.Output) return false
  return true
}

function isAvailableLayout (parent) {
  if (parent !== 'Layout') return false
  return true
}

function isAvailableContainer (parent, child) {
  if (parent === 'Row' && child === 'Col') return true
  if (parent === 'Col' && child === 'Row') return true
  return false
}

export function categroySchemas (schemas): { [categroy: string]: IComponentSchema[] } {
  const res = {}
  for (let component in schemas) {
    let { categroy } = schemas[component]
    res[categroy] = res[categroy] || []
    res[categroy].push(schemas[component])
  }
  return res
}

const CATEGROY_NAME = {
  [ComponentTypes.Composite]: '复合组件',
  [ComponentTypes.Container]: '容器组件',
  [ComponentTypes.Decoration]: '装饰组件',
  [ComponentTypes.Layout]: '布局组件',
  [ComponentTypes.Page]: '页面组件',
  [ComponentTypes.Meta]: '元组件',
  [ComponentTypes.Text]: '文本组件',
  [ComponentTypes.GlobalMeta]: '全局组件',
  [ComponentTypes.Output]: '输入组件'
}
export function getCategroyName (categroy: string) {
  return CATEGROY_NAME[categroy] || '未分类'
}
