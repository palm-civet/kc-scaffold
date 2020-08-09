
module.exports.parseTableToJson = (head, body) => {
  let res = {props: {}, events: {}}
  body.forEach(row => {
    let item = genBodyItem(head, row)
    let key = row[0]
    if (/^on[A-Z]/.test(key)) {
      res.events[key] = {
        type: getBodyType(item),
        default: getBodyDefault(item),
        desc: getBodyDesc(item),
        version: getBodyVersion(item)
      }
    } else {
      res.props[key] = {
        type: getBodyType(item),
        default: getBodyDefault(item),
        desc: getBodyDesc(item),
        version: getBodyVersion(item)
      }
    }
  })
  return res
}

function genBodyItem (head, item) {
  let res = {}
  item.forEach((value, index) => {
    let key = head[index]
    res[key] = value
  })
  return res
}

function getBodyType (data) {
  return data['类型']
}

function getBodyDefault (data) {
  return data['默认值']
}

function getBodyDesc (data) {
  return data['说明']
}

function getBodyVersion (data) {
  return data['版本'] || '4.5.1'
}