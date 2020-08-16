import React from 'react'
import { Collapse, List, Typography } from 'antd'
import * as AntDSchemas from "@editor/antd/schema";
import { categroySchemas, getCategroyName } from "@editor/antd/helper"
import { Dragger } from './Dragger'
import { IComponentSchema } from '@editor/antd/helper/types';
import styles from './Components.module.css'

const schemas = categroySchemas(AntDSchemas)

const Components: React.FC = () => {
  return (
    <Collapse className={styles.container}>
      {
        Object.keys(schemas).map(categroy => (
          <Collapse.Panel header={getCategroyName(categroy)} key={categroy} className={styles.categroy}>
            <List
              dataSource={schemas[categroy]}
              renderItem={(item: IComponentSchema) => (
                <List.Item className={styles.component}>
                  <Dragger acceptItem={{ type: 'dragger', componentName: item.name }}>
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
