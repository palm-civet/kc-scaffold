import React from 'react'
import { Collapse, List, Typography } from 'antd'
import * as AntDSchemas from "@editor/antd/schema";
import { categroySchemas, getCategroyName, sortCategroyName } from "@editor/antd/helper"
import { Dragger } from './Dragger'
import { IComponentSchema, ComponentTypes } from '@editor/antd/helper/types';
import styles from './Components.module.css'

const schemas = categroySchemas(AntDSchemas)

const Components: React.FC = () => {
  return (
    <Collapse className={styles.container} defaultActiveKey={ComponentTypes.Layout}>
      {
        Object.keys(schemas).sort(sortCategroyName).map(categroy => (
          <Collapse.Panel header={getCategroyName(categroy)} key={categroy} className={styles.categroy}>
            <List
              dataSource={schemas[categroy]}
              renderItem={(item: IComponentSchema) => (
                <List.Item>
                  <Dragger acceptItem={{ type: 'dragger', componentName: item.name, categroy: item.categroy }}>
                    {item.name} <span>{item.title}</span>
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
