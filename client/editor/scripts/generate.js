const fs = require('fs')
const path = require('path')
const camelCase = require('camelcase')
const { dealMarkdownAST } = require('./transform')
const { findInTypes, deprecated, degrade } = require('./component-type')
const { component, schema, entry, generateTemplate } = require('./template')
const { isComponentDir, isDirectory, mkDirIfNotExist } = require('./util')

const rootPath = path.resolve(__dirname, '..')
const JSON_DIR = path.resolve(__dirname, 'json-components')

function readZHMarkdowns () {
  const componentDir = path.resolve(rootPath, 'components')
  mkDirIfNotExist(JSON_DIR)
  const files = fs.readdirSync(componentDir)
  const dataEntrySchema = [], dataEntryComp = []
  files.forEach(file => {
    let filePath = path.join(componentDir, file)
    if (isDirectory(filePath) && isComponentDir(file)) {
      const {entrySchema, entryComp} = findAndReadMD(filePath, file)
      dataEntrySchema.push(entrySchema)
      dataEntryComp.push(entryComp)
    }
  })
  fs.writeFileSync(path.join(JSON_DIR, 'index.ts'), dataEntryComp.join('\n'))
  fs.writeFileSync(path.join(JSON_DIR, 'schema.ts'), dataEntrySchema.join('\n'))
}

function findAndReadMD (filePath, filename) {
  const files = fs.readdirSync(filePath)
  let name = camelCase(filename, { pascalCase: true })
  const fileJsonPath = path.resolve(JSON_DIR, name)
  mkDirIfNotExist(fileJsonPath)
  let res = {}
  files.forEach(file => {
    if (/(.*)\.zh\-CN\.md$/.test(file)) {
      let mkname = RegExp.$1
      if (mkname !== 'index') return
      const targetPath = path.join(filePath, file)
      console.log(targetPath)
      let table = dealMarkdownAST(fs.readFileSync(targetPath, { encoding: 'utf-8' }))
      if (table) {
        let type = findInTypes(name)
        table.name = name
        table.categroy = type && type.name
        table.deprecated = deprecated.includes(name)
        table.degrade = degrade.includes(name)
      }
      // 生成组件描述
      let compSchema = generateTemplate(schema, JSON.stringify(table || {}, null, '\t'))
      let compIndex = generateTemplate(component, name)
      let entrySchema = generateTemplate(entry.schema, name)
      let entryComp = generateTemplate(entry.component, name)
      fs.writeFileSync(path.join(fileJsonPath, 'schema.ts'), compSchema)
      fs.writeFileSync(path.join(fileJsonPath, 'index.ts'), compIndex)
      
      res = ({
        entrySchema,
        entryComp
      })
    }
  })
  return res
}

readZHMarkdowns()