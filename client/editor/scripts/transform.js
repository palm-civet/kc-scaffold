const md = require('markdown-it')()
const { parseTableToJson } = require('./parser')

function getStream (markdown) {
  const list = md.parse(markdown, {})
  return {
    next: () => list.shift(),
    peak: () => list[0],
    end: () => list.length === 0
  }
}

module.exports.dealMarkdownAST = (markdown) => {
  const stream = getStream(markdown)
  let apiTable
  while(!stream.end()) {
    if (isApiHead()) {
      apiTable = readApiTable()
    } else {
      stream.next()
    }
  }

  return apiTable

  function isApiHead () {
    if (stream.peak().type === 'heading_open') {
      let next, flag = false
      while(next = stream.next()) {
        if (next.type === 'heading_close') break
        if (next.type === 'inline' && next.content === 'API') flag = true
      }
      return flag
    }
    return false
  }

  function readApiTable () {
    let next, head, body
    while (next = stream.next()) {
      if (next.type === 'table_close') break
      if (next.type === 'thead_open') head = readTableHead()
      if (next.type === 'tbody_open') body = readTableBody()
    }
    return parseTableToJson(head, body)
  }

  function readTableHead () {
    let next, head = []
    while(next = stream.next()) {
      if (next.type === 'thead_close') break
      if (next.type === 'tr_open') head = readTr()
    }
    return head
  }

  function readTableBody () {
    let next, body = []
    while(next = stream.next()) {
      if (next.type === 'tbody_close') break
      if (next.type === 'tr_open') body.push(readTr())
    }
    return body
  }

  function readTr () {
    let next, tr = []
    while(next = stream.next()) {
      if (next.type === 'tr_close') break
      if (next.type === 'th_open') tr.push(readTh())
      if (next.type === 'td_open') tr.push(readTd())
    }
    return tr
  }

  function readTh () {
    let next, th
    while(next = stream.next()) {
      if (next.type === 'th_close') break
      if (next.type === 'inline') th = next.content
    }
    return th
  }

  function readTd () {
    let next, td
    while(next = stream.next()) {
      if (next.type === 'td_close') break
      if (next.type === 'inline') td = next.content
    }
    return td
  }
}

