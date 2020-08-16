import { ComponentTypes, IComponentSchema } from "./types"
export * from "./types"
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
const CATEGROY_LIST = [
  ComponentTypes.Layout,
  ComponentTypes.Container,
  ComponentTypes.Composite,
  ComponentTypes.Meta,
  ComponentTypes.Output,
  ComponentTypes.Text,
  ComponentTypes.Page,
  ComponentTypes.GlobalMeta,
  ComponentTypes.Decoration,
]
export function sortCategroyName (cateA, cateB) {
  const indexA = CATEGROY_LIST.indexOf(cateA) === -1 ? 10 : CATEGROY_LIST.indexOf(cateA)
  const indexB = CATEGROY_LIST.indexOf(cateB) === -1 ? 10 : CATEGROY_LIST.indexOf(cateB)
  return indexA < indexB ? -1 : 1
}

export enum AVAILABLE_PROPS {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean'
}
const AVALIABLE_PROPS_LIST = [
  AVAILABLE_PROPS.STRING,
  AVAILABLE_PROPS.NUMBER,
  AVAILABLE_PROPS.BOOLEAN
]
export function availablePropFilter (type: string) {
  return AVALIABLE_PROPS_LIST.some(prop => type.includes(prop))
}
