export enum ComponentTypes {
  Text = 'Text',
  Meta = 'Meta',
  GlobalMeta = 'Global Meta',
  Decoration = 'Decoration',
  Layout = 'Layout',
  Container = 'Container',
  Page = 'Page',
  Output = 'Output',
  Composite = 'Composite'
}

interface INameType {
  name: string
  type: string
}

export function containable(parent: INameType, child: INameType) {
  if (child.type === ComponentTypes.Decoration && parent.type !== ComponentTypes.Text) return true
  if (parent.type === ComponentTypes.Text) return false
  if (parent.type === ComponentTypes.Meta && child.type !== ComponentTypes.Text)  return false
  if (child.type === ComponentTypes.Layout) return isAvailableLayout(parent.name)
  if (child.type === ComponentTypes.Container) return isAvailableContainer(parent.name, child.name)
  if (parent.name === 'From' && child.type !== ComponentTypes.Output) return false
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