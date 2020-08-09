import React from 'react'
import { Space, Button, Card, TimePicker, Input, Switch } from "antd";
import * as AntdConponents from "@editor/antd/index";
import { SearchOutlined ,HomeOutlined} from '@ant-design/icons';
import { Dragger } from './Dragger'

console.log(AntdConponents)
export const GlobalComponent = {
  Space,
  Input,
  Button,
  TimePicker,
  Card,
  HomeOutlined,
  Switch
}

export const components = [{
  name: 'HomeOutlined',
  props: {
    size:'large',
    style: {
      fontSize: '30px'
    }
  }
  },{
    name: 'Switch',
    props: {
      size:'large',
      text: "占位",
    }
  },{
    name: 'Card',
    props: {
      size:'large',
      value:'占位'
    }
  },{
    name: 'TimePicker',
    props: {
      size:'large'
    }
  },{
    name: 'Input',
    props: {
      size:'large',
      value:'占位'
    }
  }]

const style: React.CSSProperties = {
  backgroundColor: 'white',
  height: '100%'
}

const componentStyle: React.CSSProperties = {
  backgroundColor: 'white',
  marginBottom: '10px',
  border: '1px solid #aaa',
  padding: '10px',
  background: '#eee'
}

const Components: React.FC = () => {
  const renderComponents = (component: {name: string, props: any}, index: number) => {
    const TagName = GlobalComponent[component.name]
    let props = {
      acceptItem: {
        type: 'dragger', // 要改不 component.name
        componentName: component.name
      },
      index: index,
      isAdd: true,
      children: <TagName {...component.props} />
    }
    return (
      <div style={componentStyle} key={component.name}>
      <Dragger {...props}></Dragger>
      </div>
    )
  }
  return (
    <div style={style}>
      <div>component list</div>
      {components.map((component, index) => renderComponents(component, index))}
    </div>

  )
}

export default Components
