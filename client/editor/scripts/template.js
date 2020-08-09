module.exports.component = `import { $$ } from 'antd'
import { withWrapper } from '../withWrapper'
export default withWrapper($$, { name: '$$' })
`
module.exports.schema = `export default $$`

module.exports.entry = {
  component: `export { default as $$ } from './$$'`,
  schema: `export { default as $$ } from './$$/schema'`
}

module.exports.generateTemplate = (template, data) => {
  return template.replace(/\$\$/g, data)
}