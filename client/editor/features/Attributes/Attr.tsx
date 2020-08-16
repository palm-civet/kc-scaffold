import React from 'react'
import { Card, Form } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { IComponentSchema, availablePropFilter } from '@editor/antd/helper'

interface IProps {
  schema: IComponentSchema,
  attrs: any
}

const Attr: React.FC<IProps> = props => {
  const { attrs, schema } = props
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const availableProps = Object.keys(schema.props).filter(availablePropFilter)
  const renderLabel = label => (
    <>
      <QuestionCircleOutlined />
      { label }
    </>
  )
  return (
    <Card title='属性面板'>
      <Form
        {...layout}
        name='attr'
        defaultValue={attrs}>
        {
          availableProps.map(key => (
            <Form.Item
              label={renderLabel(key)}
              name={key}>
              
            </Form.Item>
          ))
        }
        
      </Form>
    </Card>
  )
}

export default Attr