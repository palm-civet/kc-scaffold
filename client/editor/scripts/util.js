const fs = require('fs')

module.exports.isComponentDir = (name) => {
  if (!name) return false
  if (name[0] === '_') return false
  if (['config-provider', 'locale', 'locale-provider', 'style', 'version'].includes(name)) return false
  return true
}

module.exports.isDirectory = (path) => {
  return fs.statSync(path).isDirectory()
}

module.exports.mkDirIfNotExist = (dirPath) => {
  if (fs.existsSync(dirPath)) return
  fs.mkdirSync(dirPath)
}