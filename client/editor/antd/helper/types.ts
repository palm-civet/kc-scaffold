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

export interface ISchemaProp {
  type: string
  default: any
  desc: string
  version: string
}

export interface ISchemaEvent {
  type: string
  default: any
  desc: string
  version: string
}

export interface IComponentSchema {
  props: { [ key: string ]: ISchemaProp }
  events: { [ key: string ]: ISchemaEvent }
  categroy?: ComponentTypes
  name: string
  deprecated: boolean
  degrade: boolean
}
