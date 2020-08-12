import React from 'react'
import { Collapse, List, Typography } from 'antd'
import * as AntDSchemas from "@editor/antd/schema";
import { categroySchemas } from "@editor/antd/helper"
import { Dragger } from './Dragger'
import { IComponentSchema } from '@editor/antd/helper/types';

const schemas = categroySchemas(AntDSchemas)

const style: React.CSSProperties = {
  backgroundColor: 'white',
  height: '100%'
}

const Components: React.FC = () => {
  return (
    <Collapse style={style}>
      {
        Object.keys(schemas).map(categroy => (
          <Collapse.Panel header={categroy} key={categroy}>
            <List
              dataSource={schemas[categroy]}
              renderItem={(item: IComponentSchema) => (
                <List.Item>
                  <Dragger acceptItem={{ type: 'dragger', componentName: item.name }}>
                    {item.name}
                  </Dragger>
                </List.Item>
              )}
            />
          </Collapse.Panel>
        ))
      }
    </Collapse>

  )
}

export default Components
